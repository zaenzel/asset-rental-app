import Image from 'next/image'
import React from 'react'

const Card = () => {
    return (
        <div className='border-[.5px] shadow rounded 
            flex flex-col gap-3 max-w-64 cursor-pointer
            hover:shadow-lg'>
            <div className="relative w-full h-40 rounded-t">
                <Image
                    src="/images/no-image.png"
                    alt="product-pic"
                    className='object-contain'
                    fill
                />
            </div>
            <div className="flex flex-col gap-4 px-2 pb-5">
                <h4>Title</h4>
                <div className="flex">
                    <h5>Rp. 200.000</h5>
                    <h5>/ Day</h5>
                </div>
                <p className='truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repellat quaerat eveniet,
                    aut qui beatae, voluptatem sunt quod quidem
                    eos temporibus inventore modi dolor aspernatur
                    pariatur illum deserunt quos. Minima?
                </p>
            </div>
        </div>
    )
}

export default Card