import React from 'react'

type PropsType = {
    title: string
    value: string | number
    classname?: string
}

const TextValue = ({
    title,
    value,
    classname
} : PropsType) => {
    return (
        <div className="flex items-center border border-gray-300 p-2 rounded relative gap-2 w-full">
            <p className='absolute -top-[8px] bg-white z-10 left-2 text-xs  text-default-500 font-medium'>{title}</p>
            <h4 className={`font-semibold text-gray-500 text-medium md:text-md pl-2 ${classname}`}>{value}</h4>
        </div>
    )
}

export default TextValue