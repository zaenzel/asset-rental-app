'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const BtnAuth = ({ href, title }: { href: string, title: string }) => {

    const router = useRouter()

    const handleClick = () => {
        router.push(href)
    }

    return (
        <button className='px-8 py-4 w-fit
            bg-blue-700 hover:bg-blue-800 transition-colors rounded-full text-sm
            font-bold text-white' onClick={handleClick}>
            {title}
        </button>
    )
}

export default BtnAuth