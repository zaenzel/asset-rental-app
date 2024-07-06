'use client'

import React, { Dispatch, SetStateAction, useState } from 'react'
import { FaChevronDown } from "react-icons/fa6";
import { motion } from "framer-motion"
import { dropDownItem } from '@/lib/utils';

type PropsType = {
    isChoice: string,
    isChoiceSet: Dispatch<SetStateAction<string>>
}

const Dropdown = ({
    isChoice,
    isChoiceSet
}: PropsType) => {

    const [isClick, isClickSet] = useState(false)


    return (
        <div className="flex flex-col gap-2">
            <p className='text-sm md:text-base'>Category</p>
            <div className={`flex justify-between items-center relative
                    w-full rounded-md border-0 
                    py-3 px-5 text-gray-900
                    ${isClick ? "ring-2 ring-inset ring-blue-600" : "ring-1 ring-inset ring-gray-300 "}
                    text-sm leading-6 cursor-pointer`}
                onClick={() => isClickSet(!isClick)}>
                <p>{isChoice}</p>
                <div className={`transition-transform ${isClick ? 'rotate-180' : 'rotate-0'}`}>
                    <FaChevronDown />
                </div>
                {
                    isClick &&
                    <motion.div
                        initial={{
                            scale: 0,
                            opacity: 0,
                            y: "0",
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.2
                        }}
                        className="absolute top-12 left-0 
                                    bg-white border
                                     w-full origin-center">
                        {
                            dropDownItem.map(e => {
                                return (
                                    <p className='p-3 hover:bg-blue-50' key={e.id}
                                        onClick={() => isChoiceSet(e.name)}
                                    >
                                        {e.name}
                                    </p>
                                )
                            })
                        }
                    </motion.div>
                }
            </div>
        </div>
    )
}

export default Dropdown