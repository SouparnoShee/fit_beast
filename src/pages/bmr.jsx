import React, { useState } from 'react'

const Bmr = () => {
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [age, setAge] = useState(0)
    const [gender, setGender] = useState('male')
    const [bmi, setBmi] = useState(0)
    const [bulk, setBulk] = useState(false)
    const [cut, setCut] = useState(false)
    const [cal, setCal] = useState(0)

    const calcBmi = (e) => {
        e.preventDefault();
        if (height === 0 && weight === 0 && age === 0) {
            alert("Please enter some value")
        } else if (gender.toLowerCase() === 'male') {
            const TheBMI = 10 * weight + 6.25 * height - 5 * age + 5;
            setBmi(TheBMI);

        } else if (gender.toLowerCase() === 'female') {
            const TheBMI = 10 * weight + 6.25 * height - 5 * age - 161;
            setBmi(TheBMI);
        }
    }

    return (
        <div className='min-h-[80vh] bg-[#27374D] relative flex items-center flex-col pt-10'>
            <h1 className='text-white text-4xl sm:text-6xl font-bold mb-12 px-2'>CALCULATE YOUR BMR</h1>
            <form onSubmit={calcBmi} className='flex flex-col gap-8 '>
                <div className='flex flex-col gap-2'>
                    <label className='text-white'>Weight: </label>
                    <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder='Enter Your Weight' className=' w-[280px] sm:w-[500px] py-4 px-4 bg-white rounded-md'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-white'>Height: </label>
                    <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} placeholder='Enter Your Height' className='w-[280px] sm:w-[500px] py-4 px-4 bg-white rounded-md' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-white'>Age: </label>
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter Your Age' className='w-[280px] sm:w-[500px] py-4 px-4 bg-white rounded-md' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-white'>Weight: </label>
                    <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder='Mention Gender' className='w-[280px] sm:w-[500px] py-4 px-4 bg-white rounded-md' />
                </div>
                <div className="buttons text-center flex gap-6 justify-center">
                    <button className='bg-[#526D82] px-6 py-2 text-xl text-white shadow-md rounded-lg'>CALCULATE</button>
                    <button className='bg-[#526D82] px-6 py-2 text-xl text-white shadow-md rounded-lg'>CLEAR</button>
                </div>
            </form>

            {
                bmi ? <div className="my-16 px-4 ">
                    <p className='text-white text-xl font-bold my-2'>The Result is : {bmi} </p>
                    <p className='text-white text-lg font-light my-1'>Your daily calorie intake with no exercise is - <b>{bmi * 1.2}</b> Calories</p>
                    <p className='text-white text-lg font-light my-1'>Your daily calorie intake with little exercise (3 times a week) is - <b>{bmi * 1.375}</b> Calories</p>
                    <p className='text-white text-lg font-light my-1'>Your daily calorie intake with Moderate (most of the days in a week) is - <b>{bmi * 1.55}</b> Calories</p>
                    <p className='text-white text-lg font-light my-1'>Your daily calorie intake with hard exercise is - <b>{bmi * 1.725}</b> Calories</p>
                    <p className='text-white text-lg font-light my-1'>Your daily calorie intake with very hard exercise (two times a day) is - <b>{bmi * 1.9}</b> Calories </p>
                    <div className='flex justify-between mt-10 text-white text-xl font-bold cursor-pointer'>
                        <div onClick={() => {
                            setBulk(true)
                            setCut(false)
                        }}>Want to bulk</div>
                        <div onClick={() => {
                            setBulk(false)
                            setCut(true)
                        }}>Want to cut?</div>
                    </div>
                    {
                        bulk ? <div className='flex flex-col gap-6'>
                            <h1 className='text-white bg-black p-3 m-2' >
                                You Need usual 500cal extra , according to Bmi it would be {bmi * 1.375 + 500} calories
                            </h1>
                        </div> : null
                    }
                    {
                        cut ? <div className='flex flex-col gap-6'>
                            <h1 className='text-white text-end bg-black p-3 m-2'>
                                You Need usual 500cal less , according to  Bmi it would be {bmi * 1.375 - 500} calories
                            </h1>
                        </div> : null
                    }
                </div>
                    :
                    <div className='text-white font-bold text-lg my-12'> Results Shown Here</div>
            }


        </div>
    )
}

export default Bmr
