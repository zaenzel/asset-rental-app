import { updateTransaction, useTransactionDetail } from '@/lib/api/Transaction'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import moment from 'moment';
import React, { Dispatch, SetStateAction, useState } from 'react'
import 'moment/locale/id';
import TextValue from './text-value/TextValue';
import { rupiah } from '@/lib/utils';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';


type PropsType = {
    isOpen: boolean
    onOpenChange: () => void
    idTrx: number
    idTrxSet: Dispatch<SetStateAction<number>>
    isAdmin?: boolean
}

const ModalTrx = ({
    isOpen,
    onOpenChange,
    idTrx,
    idTrxSet,
    isAdmin
}: PropsType) => {
    const { data, error, isLoading } = useTransactionDetail({ id: idTrx })
    const [payment, paymentSet] = useState<string>(data?.data.payment_total)

    const onCloseClick = (onClose: () => void) => {
        onClose()
        idTrxSet(0)
    }

    const onProcess = async () => {
        await toast.promise(
            updateTransaction({ id: data.data.id, status: 'process' }),
            {
                pending: 'Loading',
                success: {
                    render({ data }: any) {
                        return `Success, In the transaction process, the admin will contact you via Email, check your email!`
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

    const onApprove = async () => {
        let status_payment = ''

        if (payment == data?.data.price_total) {
            status_payment = 'lunas'
        } else if (parseInt(payment) != 0 && parseInt(payment) <= data?.data.price_total) {
            status_payment = 'dp'
        } else if (parseInt(payment) >= data?.data.price_total) {
            return toast.error("Payment terlalu banyak")
        } else {
            status_payment = data?.data.payment_status
        }

        await toast.promise(
            updateTransaction({
                id: data.data.id,
                status: 'approve',
                payment_total: payment,
                payment_status: status_payment
            }),
            {
                pending: 'Loading',
                success: {
                    render() {
                        return `Success, In the transaction process wait to payment`
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

    const onReject = async () => {
        await toast.promise(
            updateTransaction({
                id: data.data.id,
                status: 'reject',
            }),
            {
                pending: 'Loading',
                success: {
                    render({ data }: any) {
                        return `Success, reject this offer`
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

    moment.locale('en');
    const startDate = moment(data?.data.start_booking_date).format("dddd, DD MMMM YYYY, h:mm a")
    const endDate = moment(data?.data.end_booking_date).format("dddd, D MMMM YYYY, h:mm a")
    const restOffBill = data?.data.price_total - data?.data.payment_total

    return (
        <Modal
            size='xl'
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            scrollBehavior='inside'>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">{data?.data.product.name}</ModalHeader>
                        <ModalBody className='flex flex-col gap-y-5'>
                            <div className="flex flex-col sm:flex-row gap-y-5 sm:gap-y-0 sm:gap-x-2">
                                <TextValue title='From' value={startDate} />
                                <TextValue title='To' value={endDate} />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-y-5 sm:gap-y-0 sm:gap-x-2">
                                <TextValue title='Duration' value={data?.data.booking_duration} />
                                <TextValue title='Bill Total' value={rupiah(data?.data.price_total)} />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-y-5 sm:gap-y-0 sm:gap-x-2">
                                <div className="group flex items-center border border-gray-300 p-2 rounded relative gap-2 w-full group-focus-within:border-blue-500">
                                    <p className="absolute -top-[8px] bg-white z-10 left-2 text-xs text-default-500 font-medium">Payment</p>
                                    <div className="flex justify-between items-center p-1 w-full">
                                        <input
                                            className="font-semibold text-gray-500 text-medium md:text-md pl-2 w-full focus:ring-0 focus:outline-none"
                                            type="number"
                                            disabled={restOffBill === 0}
                                            placeholder={rupiah(data?.data.payment_total)}
                                            onChange={e => paymentSet(e.target.value)}
                                        />
                                        <FaEdit className="text-blue-800 text-xl" />
                                    </div>
                                </div>


                                <TextValue
                                    title='Rest of the bill'
                                    value={rupiah(restOffBill)}
                                    classname={
                                        restOffBill == data?.data.price_total ? 'text-red-500 font-bold text-medium md:text-lg' :
                                            restOffBill < data?.data.price_total ? 'text-yellow-500 font-bold text-medium md:text-lg' :
                                                'text-green-500 font-bold text-medium md:text-lg'
                                    }
                                />
                            </div>
                            <TextValue title='Tenant' value={data?.data.user.name} />
                            <TextValue title='Adress' value={data?.data.user.address} />
                            <TextValue title='Email' value={data?.data.user.email} />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="bordered" onPress={() => onCloseClick(onClose)}>
                                Close
                            </Button>
                            {
                                isAdmin && data?.data.status === 'pending' &&
                                <Button color="danger" variant="solid" onPress={onReject}>
                                    Reject
                                </Button>
                            }
                            {
                                isAdmin &&
                                    data?.data.status === 'pending' ? <Button
                                        color="primary"
                                        onPress={
                                            onProcess
                                        }>
                                    Process
                                </Button> : data?.data.status === 'process' ? <Button
                                    color="primary"
                                    onPress={
                                        onApprove
                                    }>
                                    Approve
                                </Button> : data?.data.status === 'approve' ? <Button
                                    color="primary"
                                    onPress={
                                        onApprove
                                    }>
                                        Save
                                    </Button> : null
                            }

                        </ModalFooter>
                    </>
                )}
            </ModalContent>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </Modal>
    )
}

export default ModalTrx