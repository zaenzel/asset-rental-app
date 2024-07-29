'use client'

import React, { useState } from 'react'
import ModalOffer from '../modal-offer/ModalOffer'
import { ProductTypes } from '@/lib/types'
import { useDisclosure } from '@nextui-org/react'

const Description = ({
    id,
    name,
    price,
    category,
    description,
    image,
    isAdmin,
}: ProductTypes) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    return (
        <>
            <div className="space-y-3 md:space-y-5 basis-1/2">
                <div className="space-y-5 hidden md:inline-block">
                    <h5 className="text-2xl font-semibold">{name}</h5>
                    <p>{`Rp. ${price.toLocaleString()} / Day`}</p>
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
                price={price}
                isOpen={isOpen}
                onOpen={onOpen}
                onOpenChange={onOpenChange}
                onClose={onClose}
            />
        </>
    )
}

export default Description