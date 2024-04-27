import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculate } from '../slices/slices';
import MovingTruck from '../components/MovingTruck';
import Packaging from '../components/Packaging';
import Assemble from '../components/Assemble';
import Disassemble from '../components/Disassemble';
import Crane from '../components/Crane';
import Storage from '../components/Storage';
import { progress_bar_services, services_bg } from '../assets';
import { getDistance } from '../utils';

const Services = () => {
  const dispatch = useDispatch();
  // const items = useSelector(state => state.items.items);
  const state = useSelector(state => state.items);

  const handleCalculate = async () => {
      const distance = await getDistance(state.baseline.address, state.destination.address);
      if (distance !== null) {
        dispatch(calculate({ ...state, distance: distance }));
      }
  };

  return (
    <div className="fixed bottom-0 w-full z-50 h-full overflow-auto flex flex-col justify-between items-center">
      <img src={progress_bar_services} className='h-2 mt-4 w-full px-6' />

      <div className="mt-20 md:w-1/3 flex flex-col justify-end items-end gap-3 z-20">
        <h2 className="text-3xl font-bold w-full flex justify-center">שירותים נוספים</h2>

        <Assemble />
        <Disassemble />
        <Packaging />
        <Storage />
        <Crane />

        {/* moving truck button */}
        <div className="w-full flex justify-center mt-4">
          <div onClick={handleCalculate}>
            <MovingTruck link="/summary" />
          </div>
        </div>
      </div>

      {/* base */}
      <div className="">
        <img src={services_bg} alt="services_bg" />
      </div>
    </div>
  );
};

export default Services;
