'use client'

import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import moment from 'moment';
import { toast } from 'react-toastify';
import { formateDate } from '@/lib/utils';
import Toast from '@/components/global/toast/Toast';
import { BookingTypes, Preview } from '@/lib/types';
import PreviewBooking from './preview/PreviewBooking';
import SelectDate from './select-date/SelectDate';
import { addTransaction } from '@/lib/api/Transaction';
import { useRouter } from 'next/navigation'

type PropsType = {
    user_id: any,
    product_id: number
    price: number
    isOpen: boolean
    onOpen: Dispatch<SetStateAction<boolean>>
    onClose: Dispatch<SetStateAction<boolean>>
    onOpenChange: () => void
}

const MessageBooking = () => (
    <div className="">
        <h5>Success Booking !</h5>
        <p>You will be contacted by the admin to continue payment</p>
    </div>
)


const ModalOffer = ({
    user_id,
    product_id,
    price,
    isOpen,
    onOpen,
    onClose,
    onOpenChange
}: PropsType) => {

    const router = useRouter()
    const [selectedDates, setSelectedDates] = useState<any>({ start: null, end: null });
    const [currentDateTime, setCurrentDateTime] = useState('');
    const [futureDateTime, setFutureDateTime] = useState('');
    const [preview, previewSet] = useState<Preview>({
        startDate: '',
        endDate: '',
        hoursDifference: 0,
        next: false
    })
    const [bookingData, bookingDataSet] = useState<BookingTypes>({
        user_id,
        product_id,
        start_booking_date: '',
        end_booking_date: ''
    })

    const onDateChange = (dateRange: any) => {
        setSelectedDates(dateRange);
    };

    const handleDateChange = () => {
        if (selectedDates && selectedDates.start && selectedDates.end) {
            const { start, end } = selectedDates;
            const startDate = new Date(start.year, start.month - 1, start.day, start.hour, start.minute, 0,)
            const endDate = new Date(end.year, end.month - 1, end.day, end.hour, end.minute, 0,)

            bookingDataSet(prev => ({
                ...prev,
                start_booking_date: formateDate(startDate),
                end_booking_date: formateDate(endDate)
            }))

            const startMoment = moment(startDate);
            const endMoment = moment(endDate);

            const duration = moment.duration(endMoment.diff(startMoment));
            const hoursDifference = duration.asHours();

            previewSet({
                startDate: moment(startDate).format("dddd, MMMM D YYYY, h:mm a"),
                endDate: moment(endDate).format("dddd, MMMM D YYYY, h:mm a"),
                hoursDifference: hoursDifference,
                next: true
            });

            console.log(preview);
        } else {
            toast.error(`Please Select The Date !`, {
                position: "top-center"
            });
        }
    }

    const onReset = () => {
        previewSet({
            startDate: '',
            endDate: '',
            hoursDifference: 0,
            next: false
        })
    }

    const onSubmit = async () => {
        if (user_id === undefined) {
            router.push("/auth")
            return toast.error("Login first")
        }
        await toast.promise(
            addTransaction(bookingData),
            {
                pending: 'Loading',
                success: {
                    render() {
                        previewSet({
                            startDate: '',
                            endDate: '',
                            hoursDifference: 0,
                            next: false
                        })
                        return <MessageBooking />
                    }
                },
                error: {
                    render({ data }: any) {
                        // When the promise reject, data will contains the error
                        return `Failed, ${data.response.data.message}`
                    }
                }
            }
        );
    }

    useEffect(() => {
        const addDays = (date: any, days: number) => {
            const result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        };

        const now = new Date();
        const futureDate = addDays(now, 2);

        setCurrentDateTime(now.toISOString());
        setFutureDateTime(futureDate.toISOString());
    }, []);

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement='top'
            motionProps={{
                variants: {
                    enter: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.3,
                            ease: "easeOut",
                        },
                    },
                    exit: {
                        y: -20,
                        opacity: 0,
                        transition: {
                            duration: 0.2,
                            ease: "easeIn",
                        },
                    },
                }
            }}>
            <ModalContent>
                {() => (
                    <>
                        <ModalHeader>
                            <h5 className='text-base md:text-lg text-gray-500'>
                                {
                                    preview.next ?
                                        'Preview Date' :
                                        'Select Date'
                                }
                            </h5>
                        </ModalHeader>
                        <ModalBody className='mb-5'>
                            {
                                preview.next ?
                                    <PreviewBooking
                                        previewProps={preview}
                                        onReset={onReset}
                                        onSubmit={onSubmit}
                                        price={price}
                                    />
                                    :

                                    <SelectDate
                                        currentDateTime={currentDateTime}
                                        futureDateTime={futureDateTime}
                                        onDateChange={onDateChange}
                                        handleDateChange={handleDateChange}
                                    />

                            }
                        </ModalBody>
                    </>
                )}
            </ModalContent>
            <Toast />
        </Modal>
    )
}

export default ModalOffer