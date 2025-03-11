'use client'

import React from 'react'
import ModalOffer from '../modal-offer/ModalOffer'
import { useDisclosure } from '@nextui-org/react'
import { IProduct } from '@/lib/types'
import { rupiah } from '@/lib/utils'

interface PropsType extends IProduct {
    user_id: string | undefined
    isAdmin: boolean
}

const Description = ({
    user_id,
    id,
    name,
    slug,
    price_per_hour,
    category,
    description,
    image,
    isAdmin,
}: PropsType) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    return (
        <>
            <div className="space-y-3 md:space-y-5 basis-1/2">
                <div className="space-y-5 hidden md:inline-block">
                    <h5 className="text-2xl font-semibold">{name}</h5>
                    <p className="text-lg font-semibold">{`${rupiah(price_per_hour)}`}
                        <span className="text-neutral-400 text-base font-normal">{' '} / Day</span>
                    </p>
                </div>
                <p>
                    {description}
                </p>

                {
                    isAdmin ?
                        <button
                            className="bg-blue-600 p-3 text-white w-full
                            font-semibold rounded-md cursor-pointer hover:bg-blue-700"
                            onClick={onOpen}
                        >
                            Booking
                        </button>
                        :
                        <button
                            className="bg-blue-600 p-3 text-white w-full
                            font-semibold rounded-md cursor-pointer hover:bg-blue-700"
                        >
                            Edit
                        </button>
                }
            </div>
            <ModalOffer
                user_id={user_id}
                product_id={id}
                price={price_per_hour}
                isOpen={isOpen}
                onOpen={onOpen}
                onOpenChange={onOpenChange}
                onClose={onClose}
            />
        </>
    )
}

export default Description