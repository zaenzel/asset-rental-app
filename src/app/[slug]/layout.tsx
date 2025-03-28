import { getDetailProduct } from "@/lib/api/Product";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main className="pt-20 min-h-screen">
      {children}
    </main>
  )
}