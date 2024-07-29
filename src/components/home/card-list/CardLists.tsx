import Card from '@/components/global/card/Card';
import WrapProduct from '@/components/global/wrap-product/WrapProduct';
import { getProduct } from '@/lib/api/Product';
import React from 'react'
import { FcOrganization, FcAlphabeticalSortingAz, FcLandscape, FcInTransit } from "react-icons/fc";

const category = [
  {
    id: 1,
    name: "All",
    slug: "",
    icon: <FcAlphabeticalSortingAz size={30} />
  },
  {
    id: 2,
    name: "Room",
    slug: "room",
    icon: <FcOrganization size={30} />
  },
  {
    id: 3,
    name: "Area",
    slug: "area",
    icon: <FcLandscape size={30} />
  },
  {
    id: 4,
    name: "Vehicle",
    slug: "vehicle",
    icon: <FcInTransit size={30} />
  },

]

const CardLists = async () => {
  const products = await getProduct()

  return (
    <WrapProduct>
      <div className="
        flex justify-center gap-10 md:gap-32 pb-12">
        {
          category.map((item) => {
            return (
              <div className="flex flex-wrap 
                justify-center items-center 
              gap-2 cursor-pointer
              transition-all
              hover:scale-105"
                key={item.id}>
                {item.icon}
                <h1>{item.name}</h1>
              </div>
            )
          })
        }
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {
            products.data.map((e: any, i: number) => <Card key={i} {...e} />)
          }
        </div>
      </div>
    </WrapProduct>
  )
}

export default CardLists