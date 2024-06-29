import React, { Dispatch, SetStateAction } from 'react'
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'
import BtnAuth from '../../btn-auth/BtnAuth'

type PropsType = {
    modalShow: boolean
    modalShowSet: Dispatch<SetStateAction<boolean>>
}

const CustomMobileLink = ({ href, title, className = "", togle }:
    { href: string, title: string, className: string, togle: () => void }) => {

    const router = useRouter()


    const handleClick = () => {
        togle();
        router.push(href)
    };

    return (
        <button
            className={`${className} relative group dark:text-dark`}
            onClick={handleClick}
        >
            {title}

            <span
                className={`w-0 h-[1px] inline-block bg-white
                absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300
            `}
            >
                &nbsp;
            </span>
        </button>
    );
};

const Modal = ({ modalShow, modalShowSet }: PropsType) => {

    const handleClick = () => {
        modalShowSet(!modalShow)
    }

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="min-w-[70vw] flex flex-col gap-10 justify-between items-center z-30
            fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-blue-900 rounded-lg backdrop-blur-md py-20"
        >
            <CustomMobileLink
                href={"/"}
                title={"Home"}
                className="text-white"
                togle={handleClick}
            />
            <CustomMobileLink
                href={"/product"}
                title={"Product"}
                className="text-white"
                togle={handleClick}
            />
            <CustomMobileLink
                href={"/about"}
                title={"About"}
                className="text-white"
                togle={handleClick}
            />
            <CustomMobileLink
                href={"/contact"}
                title={"Contact"}
                className="text-white"
                togle={handleClick}
            />
             <CustomMobileLink
                href={"/dashboard"}
                title={"Dashboard"}
                className="text-white"
                togle={handleClick}
            />
            <BtnAuth href='/auth' title='Login' />
        </motion.div>
    )
}

export default Modal