'use client'

import { Button, DateRangePicker, Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import moment from 'moment';
import { toast } from 'react-toastify';
import { formateDate } from '@/lib/utils';
import Toast from '@/components/global/toast/Toast';
import { Preview } from '@/lib/types';
import PreviewBooking from './preview/PreviewBooking';
import SelectDate from './select-date/SelectDate';

type PropsType = {
    price: number
    isOpen: boolean
    onOpen: Dispatch<SetStateAction<boolean>>
    onClose: Dispatch<SetStateAction<boolean>>
    onOpenChange: () => void
}

const ModalOffer = ({
    price,
    isOpen,
    onOpen,
    onClose,
    onOpenChange
}: PropsType) => {

    const [selectedDates, setSelectedDates] = useState<any>({ start: null, end: null });
    const [currentDateTime, setCurrentDateTime] = useState('');
    const [futureDateTime, setFutureDateTime] = useState('');
    const [preview, previewSet] = useState<Preview>({
        startDate: '',
        endDate: '',
        hoursDifference: 0,
        next: false
    })
    const [date, dateSet] = useState({
        startDate: '',
        endDate: ''
    })

    const onDateChange = (dateRange: any) => {
        setSelectedDates(dateRange);
    };

    const handleDateChange = () => {
        if (selectedDates && selectedDates.start && selectedDates.end) {
            const { start, end } = selectedDates;
            const startDate = new Date(start.year, start.month - 1, start.day, start.hour, start.minute, 0,)
            const endDate = new Date(end.year, end.month - 1, end.day, end.hour, end.minute, 0,)

            dateSet({ startDate: formateDate(startDate), endDate: formateDate(endDate) })

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

    const onSubmit = () => {
        console.log(date);
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
                {(onClose) => (
                    <>
                        <ModalHeader>
                            <h5 className='text-base md:text-lg text-gray-500'>Select Date</h5>
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