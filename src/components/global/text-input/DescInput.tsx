import React from 'react'

type PropsType = {
  title: string
}

const DescInput = ({
  title
} : PropsType) => {
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
        // {...register('address')}
      />
    </div>
  )
}

export default DescInput