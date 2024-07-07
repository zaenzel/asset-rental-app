'use client'

import TextInput from '@/components/global/text-input/TextInput'
import { AddProductTypes } from '@/lib/types';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import Dropdown from './dropdown/Dropdown';
import DescInput from '@/components/global/text-input/DescInput';
import Button from '@/components/global/button/Button';
import { useRouter } from 'next/navigation';
import ImageUpload from '../image-upload/ImageUpload';

const FormAddProduct = () => {
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<AddProductTypes>();

    const onSubmit: SubmitHandler<AddProductTypes> = data => console.log(data);

    const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        router.back()
    }

    return (
        <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit(onSubmit)}>
            <TextInput
                name='name'
                title='Name'
                type='text'
                register={register}
                validation={{
                    required: {
                        value: true,
                        message: "Name is required",
                    }
                }}
                error={errors}
            />

            <TextInput
                name='price'
                title='Price'
                type='number'
                register={register}
                validation={{
                    required: {
                        value: true,
                        message: "Price is required",
                    }
                }}
                error={errors}
            />

            <Dropdown
                name='category'
                register={register}
                validation={{
                    required: {
                        value: true,
                        message: "Category is required",
                    }
                }}
                error={errors}
            />

            <DescInput
                title='Description'
                name='description'
                register={register}
                validation={{
                    required: {
                        value: true,
                        message: "Description is required",
                    }
                }}
                error={errors}
            />

            <ImageUpload
                name='image'
                register={register}
                validation={{
                    required: {
                        value: true,
                        message: "Image is required",
                    }
                }}
                error={errors}
            />

            <div className="flex gap-x-2 self-end mt-5">
                <Button
                    title='Cancel'
                    classname='bg-red-600 text-white font-semibold'
                    onclick={(e) => handleReset(e)}
                />
                <Button
                    title="Submit"
                    classname="bg-blue-600 text-white font-semibold"
                    type="submit"
                />
            </div>
        </form>
    )
}

export default FormAddProduct