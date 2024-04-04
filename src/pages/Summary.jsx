import React from 'react';
import { boxes_img } from '../assets';

const Summary = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-full pt-12">
      <div className="flex gap-6 text-neutral-50 text-xl text-center">
        <div className="w-40 h-auto bg-gray-500 p-3 rounded-xl">המלצות   לחיסכון בעלויות</div>
        <div className="w-40 h-auto bg-gray-500 p-5 rounded-xl">פירוט עלויות</div>
        <div className="w-auto h-auto bg-orange-400 p-5 rounded-xl">סיכום הזמנה</div>
      </div>

      {/* Red circle with outer shadow */}
      <div className="absolute top-8 right-20 w-24 h-24 bg-red-500 rounded-full shadow-2xl p-5 text-white text-2xl"> צור מכרז</div>

      <div className='pt-12 text-2xl'> Total Moving Costs </div>
      <div className='pt-6 text-7xl font-semibold'> $650 </div>

      {/* Dotted grey box */}
      <div className="border-dashed border border-gray-500 mt-6 p-4 max-w-2xl" style={{ borderWidth: '2px', borderStyle: 'dashed', borderRadius: '8px' }}> {/* Adjusted border style and width */}
          The displayed price is the maximum price for this move. You can reduce the moving costs by 20% - 30% by creating a tender among moving companies. When opening a tender, moving companies receive your moving details and offer competitive prices. You will receive the prices directly to WhatsApp and can choose the best offer for you. Only when you agree to receive a call, your details will be transferred to the moving company.
      </div>

      {/* Background image */}
      <img src={boxes_img} alt="background" className='h-1/4 bottom-0 w-full max-md:w-14 max-md:h-24' />
    </div>
  );
};

export default Summary;
