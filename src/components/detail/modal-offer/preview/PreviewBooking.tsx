import { Preview } from '@/lib/types'
import { rupiah } from '@/lib/utils'
import { Button } from '@nextui-org/react'
import React from 'react'

type PropsType = {
    previewProps: Preview
    onReset: () => void
    onSubmit: () => void
    price: number
}

const PreviewBooking = ({
    previewProps,
    onReset,
    onSubmit,
    price
}: PropsType) => {
    return (
        <div className="flex flex-col gap-y-6">
            <div className="space-y-2">
                <h5 className='text-sm text-gray-600 font-medium'>Booking Date</h5>
                <div className="flex flex-col justify-between 
                                                gap-2 px-2 text-sm sm:text-base text-gray-500 font-semibold">
                    <h5>
                        <span className='text-gray-400 font-medium'>
                            From {" "}
                        </span>
                        {previewProps.startDate}
                    </h5>
                    <h5>
                        <span className='text-gray-400 font-medium'>
                            To {" "}
                        </span>
                        {previewProps.endDate}
                    </h5>
                </div>
            </div>
            <div className="space-y-2">
                <h5 className='text-sm text-gray-600 font-medium'>Duration</h5>
                <h5 className='px-2 text-sm sm:text-base 
                                                text-gray-500 font-semibold'>
                    {previewProps.hoursDifference} {" "}
                    <span className='text-gray-400 font-medium'>
                        Hours
                    </span>
                </h5>
            </div>
            <div className="space-y-2">
                <h5 className='text-sm text-gray-600 font-medium'>Price Total</h5>
                <h5 className='px-2 text-sm sm:text-base 
                                                text-gray-500 font-semibold'>
                    {rupiah(previewProps.hoursDifference * price)}
                </h5>
            </div>
            <div className="flex justify-between gap-x-3">
                <Button
                    onPress={onReset}
                    variant='bordered'
                    color='danger'
                    className='w-full'
                >
                    Reset
                </Button>
                <Button
                    onPress={onSubmit}
                    variant='solid'
                    color='primary'
                    className='w-full'
                >
                    Booking
                </Button>
            </div>
        </div>
    )
}

export default PreviewBooking