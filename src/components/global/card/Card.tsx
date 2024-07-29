import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type PropsType = {
    id: number
    name: string;
    slug:string;
    description: string;
    price_per_hour: number;
    category: string;
    image: string;
}

const Card = ({
    id,
    name,
    slug,
    description,
    price_per_hour,
    category,
    image,
}: PropsType) => {
    return (
        <Link href={`/${slug}`} className='border-[.5px] shadow rounded 
            flex flex-col gap-3 max-w-64 cursor-pointer
            hover:shadow-lg'>
            <div className="relative w-full h-40 rounded-t">
                <Image
                    src={image ? image : '/images/no-image.png'}
                    alt="product-pic"
                    className='object-contain'
                    fill
                />
            </div>
            <div className="flex flex-col gap-4 px-2 pb-5">
                <h4>{name}</h4>
                <div className="flex justify-between items-center">
                    <h5>Rp. {price_per_hour?.toLocaleString("id-ID")} </h5>
                    <p className='text-sm text-gray-400'> / Day</p>
                </div>
                <p className='truncate'>
                    {description}
                </p>
            </div>
        </Link>
    )
}

export default Card