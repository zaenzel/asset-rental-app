import Image from 'next/image'
import React from 'react'
import BtnAuth from '../../global/btn-auth/BtnAuth'

const Hero = () => {
    return (
        <section className='container mx-auto
            flex flex-col md:flex-row items-center justify-around
            pt-20 px-4 gap-y-10 sm:gap-y-5 md:pt-44'>
            <div className="flex flex-col gap-5 sm:self-start">
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-white' style={{lineHeight:1.3}}>
                    Tidak Perlu Beli Baru <br />
                    Sewa Aja di {" "}
                    <span className='font-bold text-blue-800'>BRAND</span> <br />
                    Sekarang!
                </h1>
                <BtnAuth href='/product' title='Mulai Sewa' />
            </div>
            <div className="relative w-80 h-52 
                sm:w-[40rem] sm:h-96 sm:self-end 
                lg:h-[450px]">
                <Image
                    src={"/images/hero.png"}
                    alt='hero images'
                    fill
                    priority
                />
            </div>
        </section>
    )
}

export default Hero