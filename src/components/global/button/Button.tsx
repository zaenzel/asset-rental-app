import React from 'react'

type PropsType = {
    title: string
    classname?: string
    onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    type?: 'button' | 'submit' | 'reset';
}

const Button = ({
    title,
    classname,
    onclick,
    type
} : PropsType) => {
  return (
    <button 
    onClick={onclick}
    type={type}
    className={`${classname} 
        px-6 py-2 w-fit
        rounded hover:opacity-75 transition-opacity`}>
        {title}
    </button>
    )
}

export default Button