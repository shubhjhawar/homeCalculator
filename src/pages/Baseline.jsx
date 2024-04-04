import React, { useEffect, useRef, useState } from 'react';
import { grass, grayslab, marker, rocket, progress_bar_baseline } from '../assets';
import "../styles/rocket.css";
import "../styles/buttons.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import MovingTruck from '../components/MovingTruck';
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';
import { useSelector, useDispatch } from 'react-redux';
import { addBaseline } from '../slices/slices';

const Baseline = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const baselineForm = useSelector(state => state.items.baseline);
  const [form, setForm] = useState(baselineForm)

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAuIchE5mdfEw_S7oM8I5ZkpCcQyWOMg-Y',
    libraries: ['places']
  })

  const handleAddressChange = (value) => {
    setForm({ ...form, address: value });
  };  

  const handleFloorChange = (value) => {
    setForm({ ...form, floor: value });
  };

  const handleElevatorChange = (value) => {
    setForm({ ...form, elevator: value });
  };

  const handleTruckAccessChange = (value) => {
    setForm({ ...form, truckAccess: value });
  }

  console.log(form)

  if(!isLoaded){
    return <h1>loading</h1>
  }

  return (
    <div className="fixed bottom-0 w-full z-50 h-full flex flex-col justify-between items-center">
      <img src={progress_bar_baseline} className='h-2 mt-4 w-full px-6' />

      <div className="mt-20 md:w-1/3 flex flex-col justify-end items-end gap-3 z-20">
        <h1 className="text-xl w-full flex justify-center">בוא נבדוק מה היא</h1>
        <h2 className="text-3xl font-bold w-full flex justify-center">עלות ההובלה שלך</h2>

        {/* address */}
        <div className="w-full flex flex-col justify-end items-end gap-1">
          <h3 className='mb-1'>Address</h3>
          <Autocomplete>
            <input value={form.address} onChange={(e) => handleAddressChange(e.target.value)}  className='w-[400px] bg-transparent border border-black border-opacity-100 px-4 py-2 rounded-md'/>
          </Autocomplete>
        </div>

        {/* elevator and floor selection */}
        <div className='w-full flex justify-end items-end md:gap-20 gap-3'>
          {/* Elevator radio buttons */}
          <div className="flex flex-col justify-end items-end">
            <h3 className='mb-1'>Elevator</h3>
            <div className='flex gap-2 border-[1px] border-black rounded-md'>
              <div className='border-r-[1px] border-black p-2 flex items-center gap-2'>
                <button onClick={() => handleElevatorChange(true)} className={`w-5 h-5 ${form.elevator ? 'bg-[#7F56D9]' : 'bg-white'}  rounded-full`} />
                <label htmlFor="elevatorYes">Yes</label>
              </div>
              <div className="p-2 flex items-center gap-2">
                <button onClick={() => handleElevatorChange(false)} className={`w-5 h-5 ${!form.elevator ? 'bg-[#7F56D9]' : 'bg-white'}  rounded-full`} />
                <label htmlFor="elevatorNo">No</label>
              </div>
            </div>
          </div>

          {/* Floor selection dropdown */}
          <div className="flex flex-col justify-end items-end">
            <h3 className='mb-1'>Floor</h3>
            <select onChange={(e) => handleFloorChange(e.target.value)} className="px-4 py-2 border border-black border-opacity-100 rounded-md bg-transparent">
              {[...Array(20)].map((_, index) => (
                <option key={index} value={index + 1} className='bg-[#96E0F8]'>{index + 1}</option>
              ))}
            </select>
          </div>
        </div>

        {/* access to truck */}
        <div className='flex flex-col justify-end items-end'>
          <h3 className='mb-1'>Truck Access</h3>
          <div className='flex gap-2 border-[1px] border-black rounded-md'>
            <div className='border-r-[1px] border-black p-2 flex items-center gap-2'>
              <button onClick={() => handleTruckAccessChange('easy')} className={`w-5 h-5 ${form.truckAccess=='easy' ? 'bg-[#7F56D9]' : 'bg-white'}  rounded-full`} />
              <label htmlFor="accessEasy">Easy</label>
            </div>
            <div className="border-r-[1px] border-black p-2 flex items-center gap-2">
              <button onClick={() => handleTruckAccessChange('medium')} className={`w-5 h-5 ${form.truckAccess=='medium' ? 'bg-[#7F56D9]' : 'bg-white'}  rounded-full`} />
              <label htmlFor="accessMedium">Medium</label>
            </div>
            <div className="p-2 flex items-center gap-2">
              <button onClick={() => handleTruckAccessChange('hard')} className={`w-5 h-5 ${form.truckAccess=='hard' ? 'bg-[#7F56D9]' : 'bg-white'}  rounded-full`} />
              <label htmlFor="accessHard">Hard</label>
            </div>
          </div>
        </div>
        {/* moving truck button */}
        <div className="w-full flex justify-center mt-4">
          <div onClick={()=>dispatch(addBaseline(form))}>
            <MovingTruck link="/destination" />
          </div>
        </div>
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
