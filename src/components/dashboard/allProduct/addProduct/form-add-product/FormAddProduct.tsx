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
import { addProduct } from '@/lib/api/Product';
import { Bounce, ToastContainer, toast } from 'react-toastify';

const FormAddProduct = () => {
    const router = useRouter()
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<AddProductTypes>();
    const file = watch("image")

    const onSubmit: SubmitHandler<AddProductTypes> = async (data) => {
        const formData = new FormData();
        
        formData.append('name', data.name);
        formData.append('price_per_hour', data.price.toString());
        formData.append('category', data.category);
        formData.append('description', data.description);
        if (data.image && data.image.length > 0) {
            formData.append('image', data.image[0]);
        }

        try {
            const res = await addProduct(formData)
            toast.success("Success Added Product !", {
                position: "top-center"
            });
        } catch (error) {
            toast.error(`Failed Added Product !`, {
                position: "top-center"
            });
        }


    };

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
                file={file}
                reset={reset}
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

export default FormAddProduct