import React from 'react';
import { grass, grayslab, marker, rocket, truck } from '../assets';
import "../styles/rocket.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Baseline = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 w-full z-50 h-full flex flex-col justify-between items-center">
      <div className="mt-20 md:w-1/3 flex flex-col justify-end items-end gap-3 z-20">
        <h1 className="text-xl w-full flex justify-center">בוא נבדוק מה היא</h1>
        <h2 className="text-3xl font-bold w-full flex justify-center">עלות ההובלה שלך</h2>

        {/* address */}
        <div className="w-full flex flex-col justify-end items-end gap-1">
          <h3>Address</h3>
          <input className='w-full bg-transparent border border-black border-opacity-100 px-4 py-2 rounded-md'/>
        </div>

        {/* elevator and floor selection */}
        <div className='w-full flex justify-end items-end md:gap-20 gap-3'>
          {/* Elevator radio buttons */}
          <div className="flex flex-col justify-end items-end">
            <h3>Elevator</h3>
            <div className='flex gap-2 border-[1px] border-black rounded-md'>
              <div className='border-r-[1px] border-black p-2'>
                <input type="radio" id="elevatorYes" name="elevator" value="yes" />
                <label htmlFor="elevatorYes">Yes</label>
              </div>
              <div className="p-2">
                <input type="radio" id="elevatorNo" name="elevator" value="no" />
                <label htmlFor="elevatorNo">No</label>
              </div>
            </div>
          </div>

          {/* Floor selection dropdown */}
          <div className="flex flex-col justify-end items-end">
            <h3>Floor</h3>
            <select className="px-4 py-2 border border-black border-opacity-100 rounded-md bg-transparent">
              {[...Array(20)].map((_, index) => (
                <option key={index} value={index + 1} className='bg-[#96E0F8]'>{index + 1}</option>
              ))}
            </select>
          </div>
        </div>

        {/* access to truck */}
        <div className='flex flex-col justify-end items-end'>
          <h3>Truck Access</h3>
          <div className='flex gap-2 border-[1px] border-black rounded-md'>
              <div className='border-r-[1px] border-black p-2'>
              <input type="radio" id="accessEasy" name="access" value="easy" />
              <label htmlFor="accessEasy">Easy</label>
            </div>
            <div className="border-r-[1px] border-black p-2">
              <input type="radio" id="accessMedium" name="access" value="medium" />
              <label htmlFor="accessMedium">Medium</label>
            </div>
            <div className="p-2">
              <input type="radio" id="accessHard" name="access" value="hard" />
              <label htmlFor="accessHard">Hard</label>
            </div>
          </div>
        </div>

        <button
          className="py-2 w-full flex justify-center items-center text-white gap-4"
          onClick={() => navigate('/destination')}
        >
          <img src={truck} alt="Truck" className={`truck`} />
        </button>
      </div>

      <IoIosArrowDroprightCircle className='hidden md:block absolute top-1/2 right-0 w-10 h-10 mr-10 text-[#008EF5] hover:text-[#006EF5]' onClick={() => navigate('/destination')} />

      {/* base */}
      <div className="flex flex-col items-center md:h-[150px] relative">
        <img src={rocket} alt="rocket" className="rocket-animation absolute bottom-14 left-10 w-26 h-40 max-md:w-24 max-md:h-24 z-10" />
        <img src={marker} alt="marker" className='absolute bottom-14 right-10 w-26 h-40 max-md:w-14 max-md:h-24 z-30'/>
        <img src={grass} alt="grass" className='z-20'/>
        <img src={grayslab} alt="grayslab" className='z-20'/>
      </div>
    </div>
  )
}

export default Baseline;
