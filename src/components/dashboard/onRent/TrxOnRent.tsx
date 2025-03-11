'use client'

import CardTrx from '@/components/global/card/CardTrx'
import ModalTrx from '@/components/global/modal-trx/ModalTrx'
import { useTransaction } from '@/lib/api/Transaction'
import { useDisclosure } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

const TrxOnRent = ({
    user_id,
    isAdmin,
}: {
    user_id?: string
    isAdmin?: boolean
}) => {
    const { data, error, isLoading } = useTransaction({ user_id, isAdmin, status: "approve" })
    const [idTrx, idTrxSet] = useState<number>(0)

    const [onRent, onRentSet] = useState([])

    const sortingOnRent = () => {
        if (!data?.data) return; // Pastikan data ada

        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set ke awal hari untuk akurasi perbandingan

        const filteredData = data.data.filter((trx: any) => {
            const bookingDate = new Date(trx.start_booking_date);
            bookingDate.setHours(0, 0, 0, 0); // Set ke awal hari untuk perbandingan yang akurat

            return bookingDate.getTime() === today.getTime(); // Bandingkan hanya YYYY-MM-DD
        });

        onRentSet(filteredData);
    };

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const onShowModal = (id: number) => {
        onOpen()
        idTrxSet(id)
    }

    useEffect(() => {
        if (data?.data) {
            sortingOnRent();
        }
    }, [data]);

    return (
        <div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-5">
                {
                    onRent.map((data: any, i: number) => (
                        <div key={i} className="" onClick={() => onShowModal(data.id)}>
                            <CardTrx {...data} />
                        </div>
                    ))
                }

            </div>

            <ModalTrx
                idTrx={idTrx}
                idTrxSet={idTrxSet}
                isOpen={isOpen}
                onOpenChange={onOpenChange} />
        </div>
    )
}

export default TrxOnRent