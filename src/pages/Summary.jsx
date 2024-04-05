import React from 'react';
import { Link } from 'react-router-dom';
import { carousel_arrow } from '../assets';

import { boxes_img } from '../assets';

const Summary = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-full py-12">
      <div className="flex gap-6 text-neutral-50 text-xl text-center">
        <div className="w-40 h-auto bg-gray-400 p-2 rounded-2xl font-semibold">המלצות לחיסכון בעלויות</div>
        <div className="w-40 h-auto bg-gray-400 p-5 rounded-2xl font-semibold">פירוט עלויות</div>
        <div className="w-auto h-auto bg-orange-400 p-5 rounded-2xl font-semibold">סיכום הזמנה</div>
      </div>

      {/* Red circle with outer shadow */}
      <div className="absolute top-8 right-20 w-24 h-24 bg-red-500 rounded-full font-semibold shadow-2xl p-5 text-white text-2xl">צור מכרז</div>

      <div className='py-5 text-3xl font-semibold'>סה"כ עלויות הובלה</div>
      <div className='text-7xl font-semibold'>650 ₪</div>

      {/* Dotted grey box */}
      <div className="border-dashed border border-gray-500 mt-6 p-4 max-w-2xl" style={{ borderWidth: '2px', borderStyle: 'dashed', borderRadius: '8px' }}>
      המחיר המוצג הוא המחיר המקסימלי עבור ההובלה הזאת. ניתן להוזיל את עלות ההובלה ב - 20% - 30% אחוז ע”י יצירת מכרז בין חברות הובלה. בעת פתיחת מכרז, חברות הובלה מקבלות את פרטי ההובלה שלכם, ומציעים מחירים תחרותיים. אתם תקבלו את המחירים ישירות לווצאפ, ותוכלו לבחור את ההצעה הטובה ביותר עבורכם. רק ברגע שהסכמתם לקבל פנייה הפרטים שלכם יעברו לחברת הובלות.
      </div>
      {/* Background image */}
      <img src={boxes_img} alt="background" className='h-1/4 bottom-0 w-full max-md:w-14 max-md:h-24' />

       {/* Button with right arrow */}
       <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
       <Link to="/summary">
        <img src={carousel_arrow} alt="Button with right arrow" />
      </Link>
      </div>  
    </div>
  );
};

export default Summary;