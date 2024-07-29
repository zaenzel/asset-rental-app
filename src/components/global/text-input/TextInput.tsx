import React from 'react'
import { UseFormRegister } from 'react-hook-form'

type PropsType = {
    title: string
    name: string
    type: string
    placeholder?: string
    register: UseFormRegister<any>
    validation: object
    error?: string | any;
    addon?: string
}

const TextInput = ({
    title,
    type,
    name,
    placeholder,
    register,
    validation,
    error,
    addon
}: PropsType) => {

    return (
        <div className="flex flex-col gap-2">
            <p className='text-sm md:text-base text-gray-500'>{title}</p>
            <div className="flex justify-between w-full rounded-md border-0 
                py-2 md:py-3 px-5 text-gray-900 outline-none
                ring-1 ring-inset ring-gray-300 
                placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset 
                focus:ring-blue-600 text-xs sm:text-sm 
                sm:leading-6 hover:ring-blue-500">
                <input
                    type={type}
                    className="outline-none flex-1"
                    placeholder={placeholder}
                    {...register(name, validation)}
                />
                <p className='text-sm text-gray-400 '>{addon}</p>
            </div>
            {error && (
                <p className=" text-red-500 font-light text-sm">
                    {error[name]?.message}
                </p>
            )}
        </div>
    )
}

export default TextInput