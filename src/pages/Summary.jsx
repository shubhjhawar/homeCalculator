import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { boxes_img, carousel_arrow } from '../assets';
import Details from '../components/Details';
import Table from '../components/Table';
import Final from '../components/Final';
import Data from '../components/Data';
import Form from "../components/Form";

const Summary = () => {
  const [toggle, setToggle] = useState(2);
  const [form, setForm] = useState(false);

  const toggleForm = () => {
    setForm(true);
  };

  const toggleSummary = () => {
    setForm(false);
  };

  return (
    <div className="fixed bottom-0 w-full z-50 h-full flex flex-col justify-between items-center pt-10 overflow-auto">
      <div className="flex max-md:flex-col gap-6 text-neutral-50 text-xl text-center max-md:mt-14">
        {!form && (
          <>
            <button onClick={() => setToggle(0)} className={`w-40 h-auto ${toggle === 0 ? 'bg-orange-400' : ' bg-gray-400'} p-2 rounded-lg font-semibold`}>המלצות לחיסכון בעלויות</button>
            <button onClick={() => setToggle(1)} className={`w-40 h-auto ${toggle === 1 ? 'bg-orange-400' : ' bg-gray-400'} p-2 rounded-lg font-semibold`}>פירוט עלויות</button>
            <button onClick={() => setToggle(2)} className={`w-40 h-auto ${toggle === 2 ? 'bg-orange-400' : ' bg-gray-400'} p-2 rounded-lg font-semibold`}>סיכום הזמנה</button>
          </>
        )}
      </div>

      {!form && (
        <>
          {/* Red circle with outer shadow */}
          <div className="flex items-center absolute top-8 max-lg:right-5 right-20 max-md:w-14 max-md:h-14 w-20 h-20 bg-red-500 rounded-full font-semibold shadow-2xl p-5 max-md:p-3 text-white text-lg max-md:text-sm" onClick={toggleForm}>צור מכרז</div>

          {toggle === 2 && (
            <div className='flex flex-col items-center justify-center gap-3'>
              <Final />
            </div>
          )}

          {toggle === 1 && (
            <div className='flex flex-col items-center justify-center gap-3 mt-10'>
              <Details />
              <Table />
            </div>
          )}

          {toggle === 0 && (
            <div className='w-2/3 flex flex-col items-center justify-center gap-3 mt-10'>
              <Data />
            </div>
          )}

          {/* Button with right arrow */}
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden lg:block">
            <Link to="/summary">
              <img src={carousel_arrow} alt="Button with right arrow" />
            </Link>
          </div>

          {/* Background image */}
          <img src={boxes_img} alt="background" className='w-full' />
        </>
      )}

      {form && <Form toggleSummary={toggleSummary} />}
    </div>
  );
};

export default Summary;