import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculate } from '../slices/slices';
import MovingTruck from '../components/MovingTruck';
import Packaging from '../components/Packaging';
import Assemble from '../components/Assemble';
import Disassemble from '../components/Disassemble';
import Crane from '../components/Crane';
import Storage from '../components/Storage';
import { crane2, progress_bar_services, servicesbg2 } from '../assets';
import { getDistance } from '../utils';
import Cloud from '../components/Cloud';
import SmallCloud from '../components/smallCloud';

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
      <div className="absolute top-[124px] left-[58px] max-md:left-[14px] w-[250px] h-[140px] -z-[20]">
        <Cloud />
      </div>
      <div className="absolute top-[244px] left-[58px] max-md:left-[14px] w-[250px] h-[140px] -z-[40]">
        <img src={crane2} alt="crane" />
      </div>
      <div className="absolute top-[207px] left-[1233px] w-[250px] h-[118px] -z-[20]">
        <Cloud />
      </div>
      <div className="absolute top-[134px] left-[1118px] w-[100px] h-[62px]">
        <SmallCloud />
      </div>

      <div className="mt-20 md:w-1/3 flex flex-col justify-end items-end gap-3 z-20">
        <h2 className="text-[35px] font-semiold w-full flex justify-center mb-[30px]">שירותים נוספים</h2>

        <Assemble />
        <Disassemble />
        <Packaging />
        {/* <Storage /> */}
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
        <img src={servicesbg2} alt="services_bg" />
      </div>
    </div>
  );
};

export default Services;
