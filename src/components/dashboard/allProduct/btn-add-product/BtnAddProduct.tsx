import Link from 'next/link';
import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";

const BtnAddProduct = () => {
    return (
        <Link href={"/dashboard/addproduct"}
            className='border-2 border-dashed 
            flex flex-col justify-center items-center 
            gap-3 hover:shadow-lg text-blue-600'>
            <div className="text-2xl">
                <IoIosAddCircleOutline />
            </div>
            Add Product
        </Link>
    )
}

export default BtnAddProduct