import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Form = ({ toggleSummary }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
      <div className="relative">
        <FaTimes className="absolute top-2 right-2 text-gray-600 cursor-pointer" onClick={toggleSummary} />
        <div className="bg-white rounded-3xl flex flex-col justify-center items-center p-8 overflow-hidden">
          <h1 className="text-4xl mb-4">מעוניינים במכרז</h1>
          <h2 className="text-lg mb-4 p-2">
            תנו לנו לעשות עבורכם את העבודה הקשה.<br />
            אתם רק תשאירו פרטים, ואנחנו כבר
            נדאג לאתר את ההצעה הטובה ביותר!
          </h2>
          <h3 className="text-md mb-2 mt-4 text-gray-600">שימו לב - גמישות בתאריכים ובשעות ההובלה תוכל לעזור לכם לקבל הצעות יותר טובות.</h3>
          <div className="flex mb-4">
            <div className="mr-4">
              <label htmlFor="text1" className="block mb-1">מספר טלפון</label>
              <input type="text" id="text1" className="w-28 border rounded p-1" />
            </div>
            <div>
              <label htmlFor="text2" className="block mb-1">שם מלא</label>
              <input type="text" id="text2" className="w-28 border rounded p-1" />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="mr-4">
              <label htmlFor="text3" className="block mb-1">טווח שעות</label>
              <input type="text" id="text3" className="w-28 border rounded p-1" />
            </div>
            <div>
              <label htmlFor="text4" className="block mb-1">תאריך הובלה</label>
              <input type="text" id="text4" className="w-28 border rounded p-1" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block mb-1">פרטים נוספים</label>
            <textarea id="comment" className="w-full border rounded p-1" rows="3"></textarea>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">הגש מכרז</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
