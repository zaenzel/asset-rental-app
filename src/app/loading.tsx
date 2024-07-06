import React from 'react'

const loading = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen space-x-3">
            <div className="w-6 h-6 border-4 border-blue-600 border-dashed rounded-full animate-spin" />
            <p className='text-2xl font-bold text-blue-600 animate-pulse'>
                Loading
            </p>
        </div>
    )
}

export default loading