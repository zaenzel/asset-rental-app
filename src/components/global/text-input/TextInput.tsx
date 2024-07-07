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
}

const TextInput = ({
    title,
    type,
    name,
    placeholder,
    register,
    validation,
    error
}: PropsType) => {

    return (
        <div className="flex flex-col gap-2">
            <p className='text-sm md:text-base'>{title}</p>
            <input
                type={type}
                className="
            block w-full rounded-md border-0 
            py-2 md:py-3 px-5 text-gray-900 outline-none
            ring-1 ring-inset ring-gray-300 
            placeholder:text-gray-400 
            focus:ring-2 focus:ring-inset 
            focus:ring-blue-600 text-xs sm:text-sm 
            sm:leading-6"
                placeholder={placeholder}
                {...register(name, validation)}
            />
            {error && (
                <p className=" text-red-500 font-light text-sm">
                    {error[name]?.message}
                </p>
            )}
        </div>
    )
}

export default TextInput