import SideBar from '@/components/dashboard/side-bar/SideBar';
import WelcomText from '@/components/dashboard/welcome-text/WelcomText';
import WrapProduct from '@/components/global/wrap-product/WrapProduct';
import React from 'react'

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className='pt-20 md:pt-32'>
            <WelcomText name={'Glidsto'} />
            <WrapProduct>
                <div className="container mx-auto lg:px-10 flex justify-center gap-x-5 max-w-screen-xl">
                    <div className="relative basis-1/4 hidden md:block">
                        <SideBar />
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