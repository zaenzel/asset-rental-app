import FormAddProduct from '@/components/dashboard/allProduct/addProduct/form-add-product/FormAddProduct'
import React from 'react'

const page = () => {


  return (
    <div className='flex flex-col justify-center items-center gap-y-5 w-full'>
      <h1 className='font-bold text-3xl'>Add Product</h1>
      <FormAddProduct />
    </div>
  )
}

export default page