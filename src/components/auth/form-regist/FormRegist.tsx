import DescInput from '@/components/global/text-input/DescInput';
import TextInput from '@/components/global/text-input/TextInput'
import { RegistTypes } from '@/lib/types';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

const FormRegist = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<RegistTypes>();

    const onSubmit: SubmitHandler<RegistTypes> = data => console.log(data);

    return (
        <form className='flex flex-col gap-5 md:gap-7' onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col sm:flex-row gap-x-5 gap-y-5">
                <TextInput
                    title='Fullname'
                    type='text'
                    name="fullname"
                    placeholder='Fullname'
                    register={register}
                    validation={{
                        required: {
                            value: true,
                            message: "Fullname is required",
                        }
                    }}
                    error={errors}
                />
                <TextInput
                    title='Contact'
                    type='number'
                    name="contact"
                    placeholder='081122223333'
                    register={register}
                    validation={{
                        required: {
                            value: true,
                            message: "Contact is required",
                        }
                    }}
                    error={errors}
                />
            </div>

            <DescInput title='Address' />

            <div className="flex flex-col sm:flex-row gap-x-5 gap-y-5">
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
            </div>
            <button className='px-8 py-4 w-full
                bg-blue-700 hover:bg-blue-800 transition-colors rounded-md text-sm
                font-bold text-white'
                type='submit'>
                Login
            </button>
        </form>
    )
}

export default FormRegist