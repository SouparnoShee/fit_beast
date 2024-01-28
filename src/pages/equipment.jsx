import React, { useEffect, useState } from 'react'
import { apioptions, dataFetch } from '../api/fetch'
import Sider from '../components/sider'
import { equipmentList } from '../data/data'
import Card from '../components/card'

const Equipment = () => {
    const [mode, setMode] = useState([])
    const [part, setPart] = useState('dumbbell')
    const searchExercises = async () => {
        const fetchExercises = await dataFetch(`https://exercisedb.p.rapidapi.com/exercises/equipment/${part}`, apioptions)
        setMode(fetchExercises)
    }


    useEffect(() => {
        searchExercises();
    }, [part])


    const clickevent = (e) => {
        console.log(e)
        setPart(e);
        searchExercises();
    }
    return (
        <div className='container max-w-full flex bg-[#27374D]'>
            <div className=' w-[20%] '>
                <Sider items={equipmentList} onClick={(e) => clickevent(e)} />
            </div>
            <div className='container w-[80%] h-[93vh] overflow-scroll overflow-x-hidden flex items-center justify-center gap-20 flex-wrap p-10 exercise-fetch'>
                {
                    mode.map((mod) => {
                        return (
                            <Card key={mod.id} img={mod.gifUrl} name={mod.name.toUpperCase()} equip={mod.equipment} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Equipment
