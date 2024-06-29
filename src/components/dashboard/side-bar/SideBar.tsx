'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { AiFillProduct } from "react-icons/ai";
import { MdLocalOffer } from "react-icons/md";
import { GiCarKey } from "react-icons/gi";

const CustomLink = ({
  title,
  icon,
  color,
  classname,
  href
}: {
  title: string
  icon: React.ReactNode
  color: string
  classname: string
  href: string
}) => {

  const asPath = usePathname()

  return (
    <Link href={href}
      className={`flex gap-x-3 items-center 
      transition-all hover:scale-105 ${classname} `}>
      <div className={`${color} text-2xl`}>
        {icon}
      </div>
      <p className={`text-lg ${asPath === href ? color : 'text-black'}`}>
        {title}
      </p>
    </Link>
  )
}

const SideBar = () => {

  return (
    <aside className='border-2 shadow-xl w-full h-fit p-6 rounded-2xl'>
      <h5 className='text-2xl font-semibold'>Category</h5>
      <nav className='flex flex-col gap-y-8 mt-10'>
        <CustomLink
          title='All Product'
          icon={<AiFillProduct />}
          color='text-blue-600'
          classname='hover:text-blue-600'
          href="/dashboard"
        />
        <CustomLink
          title='Offers'
          icon={<MdLocalOffer />}
          color='text-yellow-300'
          classname='hover:text-yellow-600'
          href="/dashboard/offers"
        />
        <CustomLink
          title='On Rent'
          icon={<GiCarKey />}
          color='text-green-600'
          classname='hover:text-green-600'
          href="/dashboard/onrent"
        />
      </nav>
    </aside>
  )
}

export default SideBar