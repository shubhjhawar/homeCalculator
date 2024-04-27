import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Confetti from 'react-confetti';
import { greenarrow } from '../assets';
import { useSelector } from 'react-redux';

const Form = ({ toggleSummary }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    phoneNumber: '',
    fullName: '',
    hoursRange: '',
    movingDate: '',
    additionalDetails: ''
  });

  const state = useSelector(state => state.items);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Construct email body
    const emailPayload = {
      phoneNumber: formData.phoneNumber,
      fullName: formData.fullName,
      hoursRange: formData.hoursRange,
      movingDate: formData.movingDate,
      additionalDetails: formData.additionalDetails,
      movingDetails: state
    };
    // Here you can add code to send the email with `emailBody`
    console.log({emailPayload});
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleArrowClick = () => {
    // Redirect to the summary page
    window.location.href = '/summary';
  };

  const handleXClick = () => {
    // Close the form
    toggleSummary();
  };

  if(formSubmitted) {
    return (
      <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-gray-500">
        <div id="confetti-container" className="absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center">
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        </div>
        <div className="absolute top-0 flex flex-col items-center z-20">
          <img src={greenarrow} alt="Green Arrow" className="w-20 h-20 mb-4 mt-20"/>
          <p className="text-white text-4xl font-bold my-4 ">המכרז שלכם התקבל בהצלחה!</p>
          <p className="text-white text-xl text-center mb-4">אנחנו עובדים קשה לאתר לכם ההצעות משתלמות.<br />
          את ההצעות אתם תקבלו ישירות לווצאפ, ותוכלו לבחור את ההצעה הטובה ביותר עבורכם.</p>
        <button onClick={()=>setFormSubmitted(false)} className="absolute top-20 right-1">
          <FaTimes className="text-white text-2xl cursor-pointer" />
        </button>
        </div>
      </div>
    )
  } else {
    
      return (
        <div className={`fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-50 z-50 bg-slate-900 ${formSubmitted ? 'bg' : ''}`}>
          { !formSubmitted && (
            <div className="relative">
              <FaTimes className="absolute right-4 text-gray-600 cursor-pointer h-16" onClick={handleXClick} />
              <div className="bg-white rounded-3xl flex flex-col justify-center items-center p-12 overflow-hidden">
                <h1 className="text-4xl mb-4 align-center">?מעוניינים במכרז</h1>
                <h2 className="text-xl p-4 text-slate-500 text-center">
                    תנו לנו לעשות עבורכם את העבודה הקשה.<br />
                    אתם רק תשאירו פרטים, ואנחנו כבר
                    נדאג לאתר את ההצעה הטובה ביותר!
                </h2>
    
                <h3 className="text-md my-4 text-slate-400">שימו לב - גמישות בתאריכים ובשעות ההובלה תוכל לעזור לכם לקבל הצעות יותר טובות.</h3>
                <form onSubmit={handleSubmit}>
                  <div className="flex mb-6">
                    <div className="mr-8">
                      <label htmlFor="phoneNumber" className="block mb-1 text-right">מספר טלפון</label>
                      <input type="text" id="phoneNumber" className="border rounded p-1 h-10 w-64 text-right" placeholder='053-2836698' value={formData.phoneNumber} onChange={handleChange} />
                    </div>
                    <div>
                      <label htmlFor="fullName" className="block mb-1 text-right">שם מלא</label>
                      <input type="text" id="fullName" className="w-64 h-10 border rounded p-1 text-right" placeholder='שם מלא' value={formData.fullName} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="flex mb-6">
                    <div className="mr-8">
                      <label htmlFor="hoursRange" className="block mb-1 text-right">טווח שעות</label>
                      <input type="time" id="hoursRange" className="w-64 h-10 border rounded p-1 text-right" placeholder='9:00-12:00' value={formData.hoursRange} onChange={handleChange} />
                    </div>
                    <div>
                      <label htmlFor="movingDate" className="block mb-1 text-right">תאריך הובלה</label>
                      <input type="date" id="movingDate" className="w-64 h-10 border rounded p-1 text-right" placeholder='13/10/2024' value={formData.movingDate} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="additionalDetails" className="block mb-1 text-right">פרטים נוספים</label>
                    <textarea id="additionalDetails" className=" border rounded p-1 text-right w-full" rows="3" value={formData.additionalDetails} onChange={handleChange}></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white text-xl py-3 px-16 rounded-lg">הגש מכרז</button>
                  </div>
                </form>
              </div>
            </div>
          )}
           
        </div>
      );
  }
};

export default Form;
