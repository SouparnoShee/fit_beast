import React from 'react'

const Card = ({ id, img, name, equip }) => {
    return (
        <div key={id} className='w-[340px] h-[450px] bg-white flex flex-col items-center justify-center gap-10 p-8'>
            <img src={img} alt="" className='h-[200px]' />
            <h3 className='text-1xl font-bold'>{name}</h3>
            <span>Equipment: {equip}</span>
        </div>
    )
}

export default Card
