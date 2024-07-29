'use client'

import React, { useState } from 'react'
import Hamburger from './hamburger/Hamburger'
import Modal from './modal/Modal'
import { usePathname, useRouter, } from 'next/navigation';
import Link from 'next/link';
import BtnAuth from '../btn-auth/BtnAuth';
import { logout } from '@/lib/api/Auth';
import { IronSession } from 'iron-session';
import { SessionData } from '@/lib/types';

type PorpsType = {
    isLogin: boolean
    session: IronSession<SessionData>
}

const CustomLink = ({ href, title, className = "" }:
    { href: string, title: string, className: string }) => {
    const asPath = usePathname()

    return (
        <Link href={href} className={`${asPath === href ?
            'text-blue-700' : className} relative group text-sm`}>

            {title}

            <span
                className={`w-0 h-5 inline-block bg-blue-700
                    absolute left-1/2 -translate-x-1/2 -bottom-6 rounded-full
                    group-hover:w-full group-hover:h-5 transition-[width] ease duration-300
                    ${asPath === href ? "w-full" : "w-0"}`}
            >
                &nbsp;
            </span>
        </Link>
    );
};

const Navbar = ({ isLogin, session }: PorpsType) => {

    const [modalShow, modalShowSet] = useState(false)
    const asPath = usePathname()
    const router = useRouter()

    return (
        <nav className={` 
            ${asPath === "/auth" ?
                "hidden" :
                "container mx-auto px-5 py-3 max-w-screen-xl"
            }`
        }>
            <div className="flex justify-between items-center gap-5">
                <h4 className='text-xl font-bold text-blue-900'>LOGO</h4>

                {/* desktop */}
                <div className="hidden md:inline-block
                    relative w-full max-w-lg  
                    ">
                    <div className="absolute -top-6 left-0 
                        w-full bg-white px-16 py-4 shadow-2xl
                        flex justify-between items-center
                        rounded-full">
                        <CustomLink
                            href='/'
                            title='Home'
                            className='text-black'
                        />
                        <CustomLink
                            href='/product'
                            title='Product'
                            className='text-black'
                        />
                        <CustomLink
                            href='/about'
                            title='About'
                            className='text-black'
                        />
                        <CustomLink
                            href='/contact'
                            title='Contact'
                            className='text-black'
                        />
                        {
                            isLogin &&
                            <CustomLink
                                href='/dashboard'
                                title='Dashboard'
                                className='text-black'
                            />
                        }
                    </div>
                </div>

                <div className="hidden md:block">
                    {
                        isLogin ?
                            <BtnAuth handleclick={() => logout()} title='Logout' /> :
                            <BtnAuth handleclick={() => router.push("/auth")} title='Login' />
                    }
                </div>

                {/* mobile */}
                <div className="md:hidden">
                    <Hamburger
                        modalShow={modalShow}
                        modalShowSet={modalShowSet}
                    />
                </div>
            </div>

            {
                modalShow ? (
                    <Modal
                        session={session}
                        isLogin={isLogin}
                        modalShow={modalShow}
                        modalShowSet={modalShowSet} />
                ) : null
            }
        </nav>
    )
}

export default Navbar