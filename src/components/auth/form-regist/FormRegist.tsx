import DescInput from '@/components/global/text-input/DescInput';
import TextInput from '@/components/global/text-input/TextInput'
import { userRegister } from '@/lib/api/Auth';
import { RegistTypes } from '@/lib/types';
import React, { Dispatch, SetStateAction, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Bounce, ToastContainer, toast } from 'react-toastify';

type PropsType = {
    isLoginSet: Dispatch<SetStateAction<boolean>>
}

const FormRegist = ({ isLoginSet }: PropsType) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<RegistTypes>();
    const [isLoading, isLoadingSet] = useState(false)

    const onSubmit: SubmitHandler<RegistTypes> = async (data) => {
        isLoadingSet(true)
        try {
            await userRegister(data)
            toast.success("Success Registration !", {
                position: "top-center"
            });
            setTimeout(() => {
                isLoginSet(true)
            }, 2500)
        } catch (error) {
            toast.error(`Failed Registration !`, {
                position: "top-center"
            });
        } finally {
            isLoadingSet(false)
        }
    };

    return (
        <form className='flex flex-col gap-5 md:gap-7' onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col sm:flex-row gap-x-2 gap-y-5">
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

            <DescInput
                title='Address'
                validation={{
                    required: {
                        value: true,
                        message: "address is required",
                    }
                }}
                name='address'
                register={register}
                error={errors}
            />

            <div className="flex flex-col sm:flex-row gap-x-2 gap-y-5">
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
                type='submit'
                disabled={isLoading}
            >
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

export default FormRegist