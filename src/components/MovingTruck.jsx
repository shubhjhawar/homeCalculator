import React from 'react';
import { truck, arrow } from "../assets";
import { useNavigate } from 'react-router-dom';
import "../styles/movingtruck.css"

const MovingTruck = ({link}) => {
  const navigate = useNavigate();

  return (
    <div className='text-white text-lg  '>
        <button onClick={() => navigate(link)} className='w-full flex gap-5 items-center justify-center'>
            <p>לדרך</p>
            <img src={truck} alt="truck" className='moving-truck' />
            <p>צא</p>
        </button>
        <div className='w-full flex items-center justify-center'>
            <img src={arrow} alt="arrow" />
        </div>
    </div>
  )
}

export default MovingTruck