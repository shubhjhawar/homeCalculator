import React from 'react'
import { progress_bar_services, services_bg } from '../assets'
import MovingTruck from '../components/MovingTruck';
import { useSelector, useDispatch } from 'react-redux';
import Packaging from '../components/Packaging';
import Assemble from '../components/Assemble';
import Disassemble from '../components/Disassemble';

const Services = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items.items);
  
  return (
    <div className="fixed bottom-0 w-full z-50 h-full flex flex-col justify-between items-center">
      <img src={progress_bar_services} className='h-2 mt-4 w-full px-6' />

      <div className="mt-20 md:w-1/3 flex flex-col justify-end items-end gap-3 z-20">
        <h2 className="text-3xl font-bold w-full flex justify-center">שירותים נוספים</h2>

        <Assemble />
        <Disassemble />
        <Packaging />

     
        {/* moving truck button */}
        <div className="w-full flex justify-center mt-4">
          <div onClick={()=>{}}>
            <MovingTruck link="/destination" />
          </div>
        </div>
      </div>

      {/* <IoIosArrowDroprightCircle className='hidden md:block absolute top-1/2 right-0 w-10 h-10 mr-10 text-[#008EF5] hover:text-[#006EF5]' onClick={() => navigate('/destination')} /> */}

      {/* base */}
      <div className="">
        {/* <img src={rocket} alt="rocket" className="rocket-animation absolute bottom-14 left-10 w-26 h-40 max-md:w-24 max-md:h-24 z-10" />
        <img src={marker} alt="marker" className='absolute bottom-14 right-10 w-26 h-40 max-md:w-14 max-md:h-24 z-30'/>
        <img src={grass} alt="grass" className='z-20'/>
        <img src={grayslab} alt="grayslab" className='z-20'/> */}
        <img src={services_bg} alt="services_bg" />

      </div>
    </div>

  )
}

export default Services