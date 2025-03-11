import BtnAddProduct from '@/components/dashboard/allProduct/btn-add-product/BtnAddProduct'
import Card from '@/components/global/card/Card'
import { getSession } from '@/lib/api/Auth'
import { getProduct } from '@/lib/api/Product'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {

  const session = await getSession()
  const products = await getProduct()

  if (!session.isAdmin) {
    redirect("/dashboard/offers")
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        <BtnAddProduct />
        {
          products.data.map((product: any, i: number) => {
            return <Card key={i} {...product} /> 
          })
        }
      </div>
    </div>
  )
}

export default page