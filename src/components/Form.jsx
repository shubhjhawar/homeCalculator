import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Form = ({ toggleSummary }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-50 z-50 bg-slate-900 bg">
      <div className="relative">
        <FaTimes className="absolute right-4 text-gray-600 cursor-pointer h-16" onClick={toggleSummary} />
        <div className="bg-white rounded-3xl flex flex-col justify-center items-center p-12 overflow-hidden">
          <h1 className="text-4xl mb-4 align-center">?מעוניינים במכרז</h1>
          <h2 className="text-xl p-4 text-slate-500 text-center">
              תנו לנו לעשות עבורכם את העבודה הקשה.<br />
              אתם רק תשאירו פרטים, ואנחנו כבר
              נדאג לאתר את ההצעה הטובה ביותר!
          </h2>

          <h3 className="text-md my-4 text-slate-400">שימו לב - גמישות בתאריכים ובשעות ההובלה תוכל לעזור לכם לקבל הצעות יותר טובות.</h3>
          <div className="flex mb-6">
            <div className="mr-8">
              <label htmlFor="text1" className="block mb-1 text-right">מספר טלפון</label>
              <input type="text" id="text1" className="border rounded p-1 h-10 w-64 text-right" placeholder='053-2836698' />
            </div>
            <div>
              <label htmlFor="text2" className="block mb-1 text-right">שם מלא</label>
              <input type="text" id="text2" className="w-64 h-10 border rounded p-1 text-right" placeholder='שם מלא' />
            </div>
          </div>
          <div className="flex mb-6">
            <div className="mr-8">
              <label htmlFor="text3" className="block mb-1 text-right">טווח שעות</label>
              <input type="text" id="text3" className="w-64 h-10 border rounded p-1 text-right" placeholder='9:00-12:00'/>
            </div>
            <div>
              <label htmlFor="text4" className="block mb-1 text-right">תאריך הובלה</label>
              <input type="text" id="text4" className="w-64 h-10 border rounded p-1 text-right" placeholder='13/10/2024'/>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="comment" className="block mb-1 text-right">פרטים נוספים</label>
            <textarea id="comment" className=" border rounded p-1 w-96 text-right" rows="3"></textarea>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-xl py-3 px-16 rounded-lg">הגש מכרז</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
