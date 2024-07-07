import React from 'react'
import { UseFormRegister } from 'react-hook-form'

type PropsType = {
  title: string
  register: UseFormRegister<any>
  name: string
  validation: object
  error?: string | any;
}

const DescInput = ({
  title,
  register,
  name,
  validation,
  error
}: PropsType) => {
  return (
    <div className="flex flex-col gap-2">
      <p className='text-sm md:text-base'>{title}</p>
      <textarea
        className="
                block w-full rounded-md border-0 
                py-2 md:py-3 px-5 text-gray-900 outline-none
                ring-1 ring-inset ring-gray-300 
                placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset 
                focus:ring-blue-600 sm:text-sm 
                sm:leading-6"
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

export default DescInput