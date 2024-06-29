'use client'

import React, { Dispatch, SetStateAction } from 'react'

type PropsType = {
    modalShow: boolean,
    modalShowSet: Dispatch<SetStateAction<boolean>>
}

const Hamburger = ({ modalShow, modalShowSet }: PropsType) => {
    return (
        <button
            className="flex flex-col justify-center items-center"
            onClick={() => modalShowSet(!modalShow)}
        >
            <span
                className={`bg-blue-800 block h-1 w-6 rounded-sm transition-all duration-300 
                    ${modalShow ? "rotate-45 translate-y-2" : "-translate-y-0.5"
                    }`}
            ></span>
            <span
                className={`bg-blue-800 block h-1 w-6 rounded-sm my-0.5 transition-all duration-300
                    ${modalShow ? "opacity-0" : "opacity-100"
                    }`}
            ></span>
            <span
                className={`bg-blue-800 block h-1 w-6 rounded-sm transition-all duration-300
                    ${modalShow ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
            ></span>
        </button>
    )
}

export default Hamburger