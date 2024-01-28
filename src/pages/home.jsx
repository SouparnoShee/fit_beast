import React, { useEffect, useState } from 'react'
import fitbeast_hero from '../assets/fitbeast_hero.png'
import equipment from '../assets/equipment.png'
import bodypart from '../assets/bodypart.png'
import targetmuscle from '../assets/targetmuscle.png'
import bmrimage from '../assets/bmr-image.png'
import comingsoon from '../assets/comingsoon.png'
import { dataFetch, apioptions } from '../api/fetch'
import { useNavigate } from 'react-router-dom'
import Card from '../components/card'




const Home = () => {
    const navigateTo = useNavigate();
    const [exercises, setExercises] = useState([])
    const [search, setSearch] = useState("")


    const searchExercises = async () => {
        if (search) {
            const fetchExercises = await dataFetch(`https://exercisedb.p.rapidapi.com/exercises/name/${search}`, apioptions)
            setSearch('')
            setExercises(fetchExercises)

        }
    }





    return (
        <div>
            {/*HERO SECTION */}
            <div className='container h-[70vh] md:h-[85vh] max-w-full bg-[#27374D] flex'>
                <div className=" w-[90%] pt-16 pl-4 sm:pl-16 flex items-start justify-center flex-col  md:w-3/6">
                    <h1 className='text-white font-bold text-3xl sm:text-5xl md:text-7xl mb-10'>
                        DISCOVER THE BEAST <br /> IN YOU
                    </h1>
                    <span className='text-white text-base'> Our application shows you different exercises according to target muscle, <br /> equipment's , helps calculating your BMR and knowing the macros and many more
                    </span>
                    <button
                        className='px-14 py-4 rounded text-base text-white font-semibold mt-10 bg-[#526D82] hover:bg-[#7fafd1]'
                        onClick={() => navigateTo("/bodypart")}
                    >
                        EXPLORE
                    </button>

                </div>
                <div className=" hidden  w-3/6  pt-16 pl-16 box-border md:flex items-end justify-center">
                    <img className='h-[60vh] md:h-[73vh]' src={fitbeast_hero} alt="" />
                </div>
            </div>
            {/* CARD SECTION */}
            <div className="container h-auto py-10 md:h-[80vh] md:py-0  max-w-full bg-[#9DB2BF] flex flex-col gap-24 items-center justify-center">
                <h1 className='text-white font-bold text-5xl text-center md:text-start'>DISCOVER EXERCISES</h1>
                <div className="container max-w-full flex items-center justify-center md:justify-around gap-6 md:gap-0 flex-col md:flex-row">
                    <div className='w-[300px] h-[400px] bg-[#DDE6ED] p-8 flex flex-col items-center justify-around' onClick={() => navigateTo("/equipment")}>
                        <h1 className='font-bold text-2xl'>WITH EQUIPMENTS</h1>
                        <img src={equipment} alt="" className='h-[150px]' />
                        <span className='text-center'>Discover different exercises according to the equipments, it helps to specify exercises according to your situation</span>
                    </div>
                    <div className='w-[300px] h-[400px] bg-[#DDE6ED] p-8 flex flex-col items-center justify-around' onClick={() => navigateTo("/bodypart")}>
                        <h1 className='font-bold text-2xl'>WITH BODYPART</h1>
                        <img src={bodypart} alt="" className='h-[150px]' />
                        <span className='text-center'>Gym goers could also define their exercises according to their different body part</span>
                    </div>
                    <div className='w-[300px] h-[400px] bg-[#DDE6ED] p-8 flex flex-col items-center justify-around' onClick={() => navigateTo("/target")}>
                        <h1 className='font-bold text-2xl'>WITH TARGET MUSCLE</h1>
                        <img src={targetmuscle} alt="" className='h-[150px]' />
                        <span className='text-center'>People want to find different exercises according to their specific targeted muscles, we made that possible too </span>
                    </div>
                </div>
            </div>
            {/* BMR SECTION */}
            <div className="container h-auto md:h-[80vh] p-10 md:p-0 max-w-full bg-[#27374D] flex flex-col">
                <h1 className='md:text-6xl text-4xl font-bold text-white text-center pt-12'>YOUR BMR</h1>
                <div className='flex items-center h-full flex-col md:flex-row'>
                    <div className="sm:w-3/6 w-full flex justify-center items-center">
                        <img src={bmrimage} alt="" className='h-[200px] sm:h-[300px] md:h-[450px] md:p-0 p-10' />
                    </div>
                    <div className="w-[90%] md:w-3/6 flex justify-center items-start flex-col gap-12">
                        <span className='w-auto md:w-[70%] tracking-wide text-md sm:text-2xl text-white'>BMR Definition: Your Basal Metabolic Rate (BMR) is the number of calories you burn as your body performs basic (basal) life-sustaining function. Commonly also termed as Resting Metabolic Rate (RMR), which is the calories burned if you stayed in bed all day. In either case, many utilize the basal metabolic rate formula to calculate their body’s metabolism rate.</span>
                        <button className='text-white bg-[#9DB2BF] px-10 py-3 text-lg text-center tracking-wider font-bold md:text-start' onClick={() => navigateTo("/bmr")}>Calculate Now</button>
                    </div>
                </div>
            </div>
            {/* SEARCH EXERCISES */}
            <div className="container h-auto max-w-full py-28 px-12 flex flex-col gap-10 bg-[#9DB2BF] justify-center items-center">
                <h1 className='text-white font-bold text-xl sm:text-5xl'>SEARCH EXERCISES</h1>
                <div className="w-auto h-auto md:h-[60px] flex items-center md:flex-row flex-col md:gap-0 gap-4">
                    {/* INPUT OR THE SEARCH UNCTIONALITY IS HERE */}
                    <input
                        type="text"
                        className="h-full bg-white w-[300px] md:w-[600px] px-3 md:py-0 py-6"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value.toLowerCase())
                        }}
                    />
                    <button className='bg-[#526D82] text-white font-bold tracking-wider px-10 py-2 h-full' onClick={searchExercises}>SEARCH</button>
                </div>
                <h1 className='text-3xl text-white font-bold'>Results Shown Here</h1>
                {/* SECTION OF DATA TO SHOW */}
                <div className="container max-w-full flex items-center justify-center gap-14 flex-wrap">

                    {
                        exercises.map((exercise) => {
                            return (

                                <Card id={exercise.id} img={exercise.gifUrl} name={exercise.name.toUpperCase()} equip={exercise.equipment} />
                            )
                        })
                    }


                </div>

            </div>

            {/* COMING SOON SECTION */}
            <div className="container h-auto md:h-[80vh] md:py-0  py-10 max-w-full bg-[#27374D] flex flex-col">
                <h1 className=' text-xl sm:text-5xl font-bold text-white text-center pt-12'>MORE FEATURES ARE COMING SOON...</h1>
                <div className='flex items-center h-full md:flex-row flex-col'>
                    <div className="w-2/5 flex justify-center items-center">
                        <img src={comingsoon} alt="" className='sm:h-[450px] h-[250px] md:p-0 p-4' />
                    </div>
                    <div className="w-[90%] md:w-3/5 flex justify-center items-start flex-col gap-12">
                        <span className='aw-auto md:w-[70%] tracking-wide text-lg md:text-2xl text-white'>I also gathered some ideas for calorie search on foods ,recipe suggestions, full diet plan suggestions, trainers instructions and many more and will be integrating in this application very soon, please enjoy the existing features of the app, THANK YOU</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
