import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

const Header = () => {

    const [hamhide, setHamHide] = useState(false)

    return (
        <div >
            <div className="ham-button bg-[#526D82] py-6" onClick={() => setHamHide(true)}>
                <Icon icon="material-symbols:menu" className='ml-8' />
            </div>
            <div className={hamhide ? 'ham-open-menu container max-w-full py-20 bg-[#526D82] flex flex-col items-center justify-center relative' : "hidden"}>
                <Icon icon="material-symbols:cancel-outline" className='absolute top-5 right-5 text-white text-[30px] cursor-pointer' onClick={() => setHamHide(false)} />
                <Link to={"/"}>
                    <h1 className='text-5xl mb-10 text-white	font-semibold ' onClick={() => setHamHide(false)}>FITBEAST</h1>
                </Link>
                <div onClick={() => setHamHide(false)} className='flex gap-12 flex-col items-center'>
                    <Link className='text-white text-2xl font-bold' to={"/"}>Home</Link>
                    <Link className='text-white text-2xl font-bold' to={"/bmr"}>BMR</Link>
                    <Link className='text-white text-2xl font-bold' to={"/bodypart"}>Exercises</Link>
                    <Link className='text-white text-2xl font-bold' to={"/"}>Nutrition</Link>
                </div>
            </div>
            <div className='ham-hide-menu container h-24 px-12 flex items-center max-w-full bg-[#526D82] justify-between '>
                <Link to={"/"}>
                    <h1 className='text-5xl text-white	font-semibold '>FITBEAST</h1>
                </Link>


                <div className='flex gap-8 items-center'>
                    <Link className='text-white text-2xl font-bold' to={"/"}>Home</Link>
                    <Link className='text-white text-2xl font-bold' to={"/bmr"}>BMR</Link>
                    <Link className='text-white text-2xl font-bold' to={"/bodypart"}>Exercises</Link>
                    <Link className='text-white text-2xl font-bold' to={"/"}>Nutrition</Link>
                </div>

            </div>
        </div>
    )
}

export default Header
