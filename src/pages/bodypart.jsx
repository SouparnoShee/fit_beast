import React, { useEffect, useState } from 'react'
import Sider from '../components/sider'
import { bodyPart } from '../data/data'
import { apioptions, dataFetch } from '../api/fetch'
import Card from '../components/card'
import toast from 'react-hot-toast'

const Bodypart = () => {
    const [mode, setMode] = useState([])
    const [part, setPart] = useState('chest')
    const searchExercises = async () => {
        const fetchExercises = await dataFetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${part}`, apioptions)
        setMode(fetchExercises)
    }


    useEffect(() => {
        searchExercises();
    }, [part])


    useEffect(() => {
        toast('If Any data is not showing, Sorry for that, Its using Rapid Apis API, (free version). Maybe limits of api fetching has reached its limits ', {
            icon: "😓",
            duration: 5000,
        })
    }, [])


    const clickevent = (e) => {
        console.log(e)
        setPart(e);
        searchExercises();
    }

    return (
        <div className='container max-w-full flex bg-[#27374D]'>
            <div className=' w-[20%] '>
                <Sider items={bodyPart} onClick={(e) => clickevent(e)} />
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

export default Bodypart
