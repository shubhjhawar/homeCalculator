import React, { useState, useRef } from 'react';
import { firstballoon, secondballoon, thirdballoon, progress_bar_destination, destinationbg, sun} from '../assets';
import "../styles/parcel.css";
import "../styles/buttons.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import MovingTruck from '../components/MovingTruck';
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';
import { useSelector, useDispatch } from 'react-redux';
import { addDestination } from '../slices/slices';
import Cloud from '../components/Cloud';
import SmallCloud from '../components/smallCloud';


const Destination = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const destinationForm = useSelector(state => state.items.destination);
  const [form, setForm] = useState(destinationForm)
  const autocompleteRef = useRef(null); 

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAuIchE5mdfEw_S7oM8I5ZkpCcQyWOMg-Y',
    libraries: ['places']
  })

  const handlePlaceSelect = () => {
    if (autocompleteRef.current !== null) {
      const place = autocompleteRef.current.getPlace();
      if (place && place.formatted_address) {
        handleAddressChange(place.formatted_address);
      }
    }
  };

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

  if(!isLoaded){
    return <h1>loading</h1>
  }

  console.log(form)

  return (
    <div className="w-full h-fit flex flex-col items-center">
      <img src={progress_bar_destination} className='h-2 mt-4 w-full px-6' />
      <div className="absolute top-[124px] left-[58px] max-md:left-[14px] w-[250px] h-[140px] -z-[20]">
        <Cloud />
      </div>
      <div className="absolute top-[207px] left-[1233px] w-[250px] h-[118px] -z-[20]">
        <Cloud />
      </div>
      <div className="absolute top-[134px] left-[1118px] w-[100px] h-[62px]">
        <SmallCloud />
      </div>
      <img src={sun} alt="sun" className="absolute top-10 right-[20px] -z-[20]"/>


      <div className="w-full md:w-1/3 flex flex-col items-end z-20 mt-[80px]">
        <h1 className="w-full flex justify-center text-[45px] font-semibold">בוא נבדוק מה היא</h1>
        <h2 className="text-xl w-full flex justify-center mt-[10px] mb-[30px]">עלות ההובלה שלך</h2>

        {/* address */}
        <div className="w-full flex flex-col justify-end items-end gap-1 px-8">
          <h3 className='mb-1'>כתובת מוצא</h3>
          <Autocomplete 
            onLoad={autocomplete => { autocompleteRef.current = autocomplete; }}
            onPlaceChanged={handlePlaceSelect}
          >
            <input
              value={form.address}
              onChange={(e) => handleAddressChange(e.target.value)}
              className='w-[400px] h-[44px] bg-white border border-[#cccccc] border-opacity-100 px-4 py-2 rounded-md text-end focus:border-none'
              placeholder="הכנס מיקום"
            />
          </Autocomplete>
        </div>

        {/* elevator and floor selection */}
        <div className='w-full flex-row-reverse flex gap-[70px] px-8 mt-[30px]'>
          {/* Elevator radio buttons */}
          <div className="flex flex-col justify-end items-end">
            <h3 className='mb-1'>יש מעלית?</h3>
            <div className='flex gap-2 border-[1px] border-[#cccccc] rounded-md bg-white w-[200px]'>
              <div className='w-1/2 border-r-[1px] border-[#cccccc] flex  justify-center items-center px-2 gap-[12px] h-[44px]'>
                <button onClick={() => handleElevatorChange(true)} className={`w-5 h-5 ${form.elevator ? 'bg-[#7F56D9]' : 'border-[1px] bg-white border-[#cccccc]'}  rounded-full`} />
                <label htmlFor="elevatorYes">לא</label>
              </div>
              <div className="w-1/2 flex px-2 justify-center items-center gap-[12px] h-[44px]">
                <button onClick={() => handleElevatorChange(false)} className={`w-5 h-5 ${!form.elevator ? 'bg-[#7F56D9]' : 'border-[1px] bg-white border-[#cccccc]'}  rounded-full`} />
                <label htmlFor="elevatorNo">כן</label>
              </div>
            </div>
          </div>

          {/* Floor selection dropdown */}
          <div className="flex flex-col justify-end items-end w-[80px]">
            <h3 className='mb-1'>מספר קומה</h3>
            <select onChange={(e) => handleFloorChange(e.target.value)} className="px-2 h-[44px] w-[82px] border border-[#cccccc] border-opacity-100 rounded-md bg-white">
              {[...Array(20)].map((_, index) => (
                <option key={index} value={index + 1} className='bg-[#96E0F8]'>{index + 1}</option>
              ))}
            </select>
          </div>
        </div>

        {/* access to truck */}
        <div className='flex flex-col justify-end items-end px-8 mt-[30px]'>
          <h3 className='mb-1'>גישה למשאית</h3>
          <div className='flex gap-2 border-[1px] border-[#cccccc] bg-white rounded-md h-[44px] w-[300px] h-[44px]'>
            <div className='border-r-[1px] w-1/3 border-[#cccccc] p-2 flex items-center gap-[12px]'>
              <button onClick={() => handleTruckAccessChange('easy')} className={`w-5 h-5 ${form.truckAccess=='easy' ? 'bg-[#7F56D9]' : 'border-[1px] bg-white border-[#cccccc]'}  rounded-full`} />
              <label htmlFor="accessEasy">קשה</label>
            </div>
            <div className="border-r-[1px] w-1/3  border-[#cccccc] p-2 flex items-center gap-[12px]">
              <button onClick={() => handleTruckAccessChange('medium')} className={`w-5 h-5 ${form.truckAccess=='medium' ? 'bg-[#7F56D9]' : 'border-[1px] bg-white border-[#cccccc]'}  rounded-full`} />
              <label htmlFor="accessMedium">בינונית</label>
            </div>
            <div className="w-1/3 p-2 flex items-center gap-[12px]">
              <button onClick={() => handleTruckAccessChange('hard')} className={`w-5 h-5 ${form.truckAccess=='hard' ? 'bg-[#7F56D9]' : 'border-[1px] bg-white border-[#cccccc]'}  rounded-full`} />
              <label htmlFor="accessHard">קלה</label>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-4 mt-[40px]">
          <div onClick={()=>dispatch(addDestination(form))}>
            <MovingTruck link="/items" />
          </div>
        </div>
      </div>

      <IoIosArrowDroprightCircle className='hidden md:block absolute top-1/2 right-0 w-10 h-10 mr-10 text-[#008EF5] hover:text-[#006EF5]' onClick={() => navigate('/items')} />

      {/* base */}
      <div className="flex flex-col w-full items-center md:h-[150px] relative">
        <img src={firstballoon} alt="firstballoon" className='parcel-animation absolute bottom-0 left-[200px] z-30'/>
        <img src={thirdballoon} alt="thirdballoon" className='parcel-animation absolute bottom-0 left-[100px] z-30'/>
        <img src={secondballoon} alt="secondballoon" className='parcel-animation absolute bottom-0 left-[20px] z-30'/>
        <img src={destinationbg} alt="grayslab" className='z-20 w-full object-cover'/>
      </div>
    </div>
  )
}

export default Destination;
