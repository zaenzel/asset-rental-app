import { AddProductTypes } from '@/lib/types';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { UseFormRegister, UseFormReset } from 'react-hook-form';
import { FaPlus } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";

type PropsType = {
    register: UseFormRegister<any>
    name: string
    validation: object
    error?: string | any;
    file: any, //File | null
    reset: UseFormReset<AddProductTypes>
}

const ImageUpload = ({
    register,
    name,
    validation,
    error,
    file,
    reset
}: PropsType) => {
    const [preview, previewSet] = useState<string | null>(null);
  
    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        reset(formValues => ({
            ...formValues,
            image: null,
        }))
    }

    /*
    useEffect(() => {
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            console.log(previewUrl);
            previewSet(previewUrl);
            return () => {
                URL.revokeObjectURL(previewUrl);
            }
        } else {
            previewSet(null);
        }

        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                selectedImageset(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    }, [file]);
    */

    return (
        <div className="space-y-2">
            <h5 className='text-sm md:text-base text-gray-500'>Image</h5>
            <div className="flex flex-col gap-y-2 items-center max-w-72">
                <div
                    className={`border-dashed border-2 border-gray-200 
                space-y-3 w-fit cursor-pointer self-start 
                ${preview ? 'p-2 md:p-4' : 'p-12 md:p-16 '}`}
                    onClick={() => document.getElementById('image-upload-input')?.click()}
                >
                    {file ? (
                        // <img src={preview} alt="Uploaded" className='' />
                        <p>{file?.[0]?.name}</p>
                    ) : (
                        <div className='flex flex-col items-center gap-y-3'>
                            <FaPlus className='text-gray-600' />
                            <p className='text-gray-600'>Upload an image</p>
                        </div>
                    )}
                    <input
                        type="file"
                        id="image-upload-input"
                        className='hidden'
                        {...register(name, validation)}
                    />
                </div>
                {error && (
                    <p className="self-start text-red-500 font-light text-sm">
                        {error[name]?.message}
                    </p>
                )}
                {
                    file &&
                    <button
                        className='bg-red-500 w-full p-2 
                        rounded-sm text-white font-semibold mt-2
                        hover:bg-red-600 text-center'
                        onClick={handleDelete}>
                        Delete Image
                    </button>
                }

            </div>
        </div>
    );
}

export default ImageUpload