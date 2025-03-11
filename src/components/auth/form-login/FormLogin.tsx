'use client'

import React, { Dispatch, SetStateAction, useState } from 'react'
import TextInput from '../../global/text-input/TextInput'
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginTypes } from '@/lib/types';
import { userLogin } from '@/lib/api/Auth';
import { Bounce, ToastContainer, toast } from 'react-toastify';

type PropsType = {
    isSuccessSet: Dispatch<SetStateAction<boolean>>
}

const FormLogin = ({
    isSuccessSet,
}: PropsType) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginTypes>();
    const [isLoading, isLoadingSet] = useState(false)

    const onSubmit: SubmitHandler<LoginTypes> = async (data) => {
        isLoadingSet(true)
        try {
            await userLogin(data)

            toast.success("Success Login !", {
                position: "top-center"
            });

            isSuccessSet(true)
        } catch (error: any) {
            if (error.response?.status == "401") {
                return toast.warn("User not found !", {
                    position: "top-center"
                });
            }
            toast.error(`Failed Login !`, {
                position: "top-center"
            });
        } finally {
            isLoadingSet(false)
        }
    }

    return (
        <form className='flex flex-col gap-5 md:gap-7' onSubmit={handleSubmit(onSubmit)}>
            <TextInput
                title='Email'
                type='email'
                name="email"
                placeholder='example@email.com'
                register={register}
                validation={{
                    required: {
                        value: true,
                        message: "Email is required",
                    }
                }}
                error={errors}
            />
            <TextInput
                title='Password'
                type='password'
                name="password"
                register={register}
                validation={{
                    required: {
                        value: true,
                        message: "Password is required",
                    }
                }}
                error={errors}
            />
            <button className='px-8 py-4 w-full
                bg-blue-700 hover:bg-blue-800 transition-colors rounded-md text-sm
                font-bold text-white'
                type='submit'
                disabled={isLoading}>
                Login
            </button>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </form>
    )
}

export default FormLogin