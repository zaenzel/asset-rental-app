'use client'

import { axiosInstance } from '@/lib/api/axios'
import React from 'react'
import { SWRConfig } from 'swr'

const WrapProduct = ({ children }: { children: React.ReactNode }) => {
    return (
        <SWRConfig
            value={{
                refreshInterval: 3000,
                fetcher: (url: string) => axiosInstance.get(url).then(res => res.data)
            }}
        >
            <section className='bg-white rounded-t-[5rem] min-h-screen'>
                <div className="container mx-auto px-5 py-12">
                    {children}
                </div>
            </section>
        </SWRConfig>
    )
}

export default WrapProduct