'use client'

import React, { useState } from 'react'
import { Radio, RadioGroup, useDisclosure } from '@nextui-org/react'
import CardTrx from '@/components/global/card/CardTrx'
import { useTransaction } from '@/lib/api/Transaction'
import ModalTrx from '@/components/global/modal-trx/ModalTrx'

const TrxListing = ({
    user_id,
    isAdmin,
}: {
    user_id?: string
    isAdmin?: boolean
}) => {

    const [status, statusSet] = useState<string>("");
    const [idTrx, idTrxSet] = useState<number>(0)

    const { data, error, isLoading } = useTransaction({ user_id, isAdmin, status })
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const onShowModal = (id: number) => {
        onOpen()
        idTrxSet(id)
    }

    return (
        <div>
            <div className="flex justify-center items-center">
                <RadioGroup
                    value={status}
                    onValueChange={statusSet}
                    orientation="horizontal"
                    className=''
                >
                    <Radio value="">All</Radio>
                    <Radio value="pending">Pending</Radio>
                    <Radio value="process">Process</Radio>
                    <Radio value="approve">Approve</Radio>
                    <Radio value="reject">Reject</Radio>
                </RadioGroup>
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-5">
                {
                    data?.data.map((data: any, i: number) => {
                        return (
                            <div key={i} className="" onClick={() => onShowModal(data.id)}>
                                <CardTrx {...data} />
                            </div>
                        )
                    })
                }
            </div>

            <ModalTrx
                idTrx={idTrx}
                idTrxSet={idTrxSet}
                isOpen={isOpen}
                onOpenChange={onOpenChange} 
                isAdmin={isAdmin}
                />
        </div>
    )
}

export default TrxListing