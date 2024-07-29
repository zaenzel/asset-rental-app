import Description from "@/components/detail/description/Description";
import { getSession } from "@/lib/api/Auth";
import { getDetailProduct } from "@/lib/api/Product";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {

    const {
        id,
        name,
        price_per_hour,
        category,
        description,
        image
    } = await getDetailProduct(params.slug)

    const session = await getSession()

    return (
        <div className="container mx-auto 
            flex flex-col sm:flex-row 
            justify-center items-center
            gap-x-5 max-w-screen-xl
            sm:px-5 sm:p-5">
            <div className="flex flex-col p-5
                rounded-t-[2rem] rounded-b-none sm:rounded-b-[2rem]
                gap-5 bg-white  
                md:flex-row w-full">

                <div className="space-y-3 md:hidden">
                    <h5 className="text-2xl font-semibold">{name}</h5>
                    <p>{`Rp. ${price_per_hour} / Day`}</p>
                </div>

                <div className="relative w-full h-64 md:h-full md:min-h-96 md:basis-1/2">
                    <Image
                        src={image}
                        alt="product-pic"
                        className='object-cover rounded'
                        fill />
                </div>

                <Description
                    id={id}
                    name={name}
                    price={price_per_hour}
                    category={category}
                    description={description}
                    image={image}
                    isAdmin={!session.isAdmin}
                />
            </div>



        </div>
    )
}