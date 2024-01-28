import React, { useState } from 'react'
import "./styles.scss"

const Sider = ({ items, onClick }) => {

    const [ham, setHam] = useState(false)

    return (
        <>
            {
                !ham ?

                    <div className="hamClick" onClick={() => setHam(true)}>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </div> : null
            }

            <div className="p-1 sm:p-5 bg-[#9DB2BF] w-full min-h-[80vh] hideHam">
                {
                    items.map((item) => {
                        return (
                            <div className="p-2 m-1 md:p-4 sm:m-6 cursor-pointer" onClick={() => onClick(item.key)} key={item.key} >
                                <span className='text-white text-[11px] md:text-2xl font-bold  hover:text-black active:text-black'>{item.name}</span>
                            </div>
                        )

                    })
                }

            </div>
            {
                ham ? <div className="p-1 sm:p-5 bg-[#9DB2BF] w-full min-h-[80vh]">
                    <div className="hamClose" onClick={() => setHam(false)}>
                        <div className='line'></div>
                        <div className='line'></div>
                    </div>
                    {
                        items.map((item) => {
                            return (
                                <div className="p-2 m-1 md:p-4 sm:m-6 cursor-pointer" onClick={() => onClick(item.key)} key={item.key} >
                                    <span className='text-white text-[11px] md:text-2xl font-bold  hover:text-black active:text-black'>{item.name}</span>
                                </div>
                            )

                        })
                    }

                </div> : null
            }


        </>
    )
}

export default Sider
