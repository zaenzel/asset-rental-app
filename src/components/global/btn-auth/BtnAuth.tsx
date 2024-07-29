'use client'

type PropsType = {
    title: string
    handleclick?: () => void
}

const BtnAuth = ({ title, handleclick } : PropsType) => {

    return (
        <button className='px-8 py-4 w-fit
            bg-blue-700 hover:bg-blue-800 transition-colors rounded-full text-sm
            font-bold text-white' onClick={handleclick}>
            {title}
        </button>
    )
}

export default BtnAuth