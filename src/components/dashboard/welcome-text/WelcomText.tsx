import React from 'react'

type PropsType = {
    name: string
}

const WelcomText = ({name} : PropsType) => {
  return(
    <section className="container mx-auto px-5 pb-10 flex">
        <div className="flex flex-col gap-y-3">
            <h1 className='text-4xl lg:text-6xl font-bold text-white'>Welcome,</h1>
            <h1 className='text-6xl lg:text-8xl font-bold text-blue-800'>{name} !</h1>
        </div>
    </section>
  )
}

export default WelcomText