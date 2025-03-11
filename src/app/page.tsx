import CardLists from "@/components/home/card-list/CardLists";
import Hero from "@/components/home/hero/Hero";
import { getProduct } from "@/lib/api/Product";
import 'moment/locale/id';


export default async function Home() {
  const products = await getProduct()
  
  return (
    <main className="">
      <Hero />
      <CardLists products={products} />
    </main>
  );
}
