import { IProduct, IUser } from '@/lib/types'
import { rupiah } from '@/lib/utils'
import { Card, CardBody, Chip } from '@nextui-org/react'
import moment from 'moment'
import Image from 'next/image'

type PropsType = {
    user_id: number,
    product_id: number,
    start_booking_date: string,
    end_booking_date: string,
    price_per_hour: number,
    booking_duration: number,
    price_total: number,
    status: string,
    payment_status: string,
    payment_total: number,
    product: IProduct
    user: IUser
}

const CardTrx = ({
    user_id,
    product_id,
    start_booking_date,
    end_booking_date,
    price_per_hour,
    booking_duration,
    price_total,
    status,
    payment_status,
    payment_total,
    product,
    user

}: PropsType) => {

    const startDate = moment(start_booking_date).format("dddd, D MMMM YYYY, h:mm a")
    const endDate = moment(end_booking_date).format("dddd, D MMMM YYYY, h:mm a")
    const restOffBill = price_total - payment_total

    return (
        <Card className='cursor-pointer hover:outline-blue-200'>
            <CardBody className='flex md:flex-row justify-between gap-y-3'>
                <div className=" flex flex-col md:flex-row gap-y-2 gap-x-2">
                    <div className="relative w-full h-44 md:h-full md:w-20 lg:w-32">
                        <Image
                            alt='image-product'
                            src={product.image}
                            fill
                            className='w-full object-cover rounded'
                        />
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-bold text-xl">{user.name}</h4>
                        <p className='text-sm'>{product.name}</p>
                        <div className="text-xs md:text-sm flex gap-x-1">
                            <p className='text-default-500'>From</p>
                            <p>{startDate}</p>
                        </div>
                        <div className="text-xs md:text-sm flex gap-x-1">
                            <p className='text-default-500'>To</p>
                            <p>{endDate}</p>
                        </div>
                        <div className="text-xs md:text-sm flex gap-x-1">
                            <p className="text-default-500">Duration</p>
                            <p>{booking_duration} hour</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-y-1">
                    <div className="space-x-1">
                        <Chip
                            className='text-white font-bold'
                            color={
                                payment_status === 'not yet paid'
                                    ? "danger" : payment_status === "dp"
                                        ? "warning" : "success"
                            }
                            size="sm">{payment_status.toUpperCase()}
                        </Chip>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className='text-xs md:text-sm text-default-500'>Bill Total</p>
                        <h4 className="font-bold text-medium md:text-lg">{rupiah(price_total)}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className='text-xs md:text-sm text-default-500'>Payment</p>
                        <h4 className={`font-bold text-medium md:text-lg`}>{rupiah(payment_total)}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className='text-xs md:text-sm text-default-500'>Rest of the bill</p>
                        <h4 className=
                            {
                                restOffBill == price_total ? 'text-red-500 font-bold text-medium md:text-lg' :
                                    restOffBill < price_total ? 'text-yellow-500 font-bold text-medium md:text-lg' :
                                        'text-green-500 font-bold text-medium md:text-lg'
                            }
                        >
                            {rupiah(restOffBill)}
                        </h4>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default CardTrx