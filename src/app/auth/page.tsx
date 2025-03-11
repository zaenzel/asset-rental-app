'use client'

import FormLogin from '@/components/auth/form-login/FormLogin'
import FormRegist from '@/components/auth/form-regist/FormRegist'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = () => {
    const router = useRouter()
    const [isLogin, isLoginSet] = useState<boolean>(true)
    const [isSuccess, isSuccessSet] = useState<boolean>(false)

    useEffect(() => {
        if (isSuccess) {
            router.push("/dashboard")
        }
    }, [isSuccess])

    return (
        <main className='flex justify-center items-center p-5 min-h-screen'>
            <div className="flex flex-col gap-14 px-5 py-5 
                rounded-lg shadow-xl bg-white w-full max-w-lg">
                <h4 className='text-center text-3xl font-semibold'>
                    {
                        isLogin ? 'Login' : 'Signin'
                    }
                </h4>
                {
                    isLogin ? <FormLogin isSuccessSet={isSuccessSet} /> : <FormRegist isLoginSet={isLoginSet} />
                }
                <div className="flex gap-x-1 items-center justify-center w-full">
                    <hr className='flex-1 border border-gray-300' />
                    <p className='flex-2 text-sm 
                        text-blue-600 cursor-pointer'
                        onClick={() => isLoginSet(!isLogin)}>
                        {
                            isLogin ? "Don't have an account?" : "Have an account?"
                        }

                    </p>
                    <hr className='flex-1 border border-gray-300' />
                </div>
            </div>
        </main>
    )
}

export default page