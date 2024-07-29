'use client'

import React, { useEffect } from 'react'
import Cookies from "js-cookie"
import { useRouter } from 'next/navigation'

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()

    useEffect(() => {
        const token = Cookies.get()
        if (token === null) {
            router.push("/auth")
        }
    }, [])

    return (
        <div>
            {children}
        </div>
    )
}

export default PrivateRoute