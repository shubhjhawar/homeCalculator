import React from 'react';
import { pin, couch, services, box } from '../assets';
import { useSelector } from 'react-redux';

const Details = () => {
  const itemsPrice = useSelector(state => state.items.itemsPrice)
  const servicesPrice = useSelector(state => state.items.servicesPrice)
  const distancePrice = useSelector(state => state.items.distancePrice)
  const boxesPrice = useSelector(state => state.items.boxesPrice)
  return (
    <div className='w-full flex flex-wrap justify-evenly gap-2'>
      <div className="w-[200px] bg-white rounded-md p-8 flex flex-col items-center gap-2">
        <h2 className='font-semibold text-lg'>שירותים נוספים</h2>
        <img src={services} alt="services"/>
        <p>סה”כ עלויות</p>
        <h3 className='text-2xl font-semibold'>{servicesPrice} <span className='text-3xl'>₪</span></h3>
      </div>

      <div className="w-[200px] bg-white rounded-md p-8 flex flex-col items-center gap-2">
        <h2 className='font-semibold text-lg'>ארגזים</h2>
        <img src={box} alt="box"/>
        <p>סה”כ עלויות</p>
        <h3 className='text-2xl font-semibold'>{boxesPrice} <span className='text-3xl'>₪</span></h3>
      </div>

      <div className="w-[200px] bg-white rounded-md p-8 flex flex-col items-center gap-2">
        <h2 className='font-semibold text-lg'>פריטים</h2>
        <img src={couch} alt="couch"/>
        <p>סה”כ עלויות</p>
        <h3 className='text-2xl font-semibold'>{itemsPrice} <span className='text-3xl'>₪</span></h3>
      </div>

      <div className="w-[200px] bg-white rounded-md p-8 flex flex-col items-center gap-2">
        <h2 className='font-semibold text-lg'>מרחק</h2>
        <img src={pin} alt="pin"/>
        <p>סה”כ עלויות</p>
        <h3 className='text-2xl font-semibold'>{distancePrice} <span className='text-3xl'>₪</span></h3>
      </div>
    
    </div>
  )
}

export default Details
