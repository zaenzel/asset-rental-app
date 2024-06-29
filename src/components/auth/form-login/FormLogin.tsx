'use client'

import React from 'react'
import TextInput from '../../global/text-input/TextInput'
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginTypes } from '@/lib/types';
import { useRouter } from 'next/navigation';



const FormLogin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginTypes>();
    const router = useRouter()

    const onSubmit: SubmitHandler<LoginTypes> = data => console.log(data);

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
                onClick={() => router.push("/dashboard")}>
                Login
            </button>
        </form>
    )
}

export default FormLogin