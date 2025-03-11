import SideBar from '@/components/dashboard/side-bar/SideBar';
import WelcomText from '@/components/dashboard/welcome-text/WelcomText';
import WrapProduct from '@/components/global/wrap-product/WrapProduct';
import { getSession } from '@/lib/api/Auth';
import { redirect } from 'next/navigation';

const layout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const session = await getSession()
    if (!session.isLoggedIn) {
        redirect("/auth")
    }

    return (

        <main className='pt-20 md:pt-32'>
            <WelcomText />
            <WrapProduct>
                <div className="container mx-auto lg:px-10 flex justify-center gap-x-5 max-w-screen-xl">
                    <div className="relative basis-1/4 hidden md:block">
                        <SideBar isAdmin={!session.isAdmin} />
                    </div>
                    <div className="grow">
                        {children}
                    </div>
                </div>
            </WrapProduct>
        </main>
    )
}

export default layout