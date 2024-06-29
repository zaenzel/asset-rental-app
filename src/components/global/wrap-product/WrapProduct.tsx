import React from 'react'

const WrapProduct = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className='bg-white rounded-t-[5rem] min-h-screen'>
            <div className="container mx-auto px-5 py-12">
                {children}
            </div>
        </section>
    )
}

export default WrapProduct