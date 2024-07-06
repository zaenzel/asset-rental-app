import BtnAddProduct from '@/components/dashboard/allProduct/btn-add-product/BtnAddProduct'
import Card from '@/components/global/card/Card'
import React from 'react'

const page = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        <BtnAddProduct />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default page