'use client'

import React, { Dispatch, MouseEvent, MouseEventHandler, SetStateAction, useState } from 'react'
import { FaChevronDown } from "react-icons/fa6";
import { motion } from "framer-motion"
import { dropDownItem } from '@/lib/utils';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { AddProductTypes } from '@/lib/types';

type PropsType = {
    register: UseFormRegister<any>
    name: string
    validation: object
    error?: string | any;
}

const Dropdown = ({
    register,
    name,
    validation,
    error
}: PropsType) => {

    return (
        <div className="flex flex-col gap-2">
            <p className='text-sm md:text-base'>Category</p>
            <select
                className='py-2 md:py-4 px-5 text-gray-900 bg-white
                ring-1 ring-inset ring-gray-300 
                placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset 
                focus:ring-blue-600 text-xs sm:text-sm
                sm:leading-6 outline-none rounded'
                {...register(name, validation)}>
                {
                    dropDownItem.map((e, i) => {
                        return (
                            i === 0 ?
                                <option key={e.id} value="">...</option> :
                                <option key={e.id} value={e.name}>{e.name}</option>
                        )
                    })
                }


            </select>
            {error && (
                <p className=" text-red-500 font-light text-sm">
                    {error[name]?.message}
                </p>
            )}
        </div>
    )
}

export default Dropdown