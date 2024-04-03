import React, { useState } from 'react';
import { home_bg, sun, hotairballoon } from '../assets';
import Cloud from '../components/Cloud';
import '../styles/truckAnimation.css';
import MovingTruck from '../components/MovingTruck';

const Home = () => {
  return (
    <div className="relative h-full flex flex-col justify-between">
      {/* clouds */}
      <div className="absolute top-10 left-14 max-md:left-[14px] w-36 h-20 -z-[20]">
        <Cloud />
      </div>
      <div className="absolute top-[220px] right-[24px] w-24 h-12 -z-[20]">
        <Cloud />
      </div>
      <div className="absolute top-[320px] left-20 max-md:left-[20px] w-24 h-12">
        <Cloud />
      </div>
      <img src={sun} alt="sun" className="absolute top-10 right-[20px] -z-[20]"/>
      <img src={hotairballoon} alt="hotairballoon" className="absolute top-[360px] right-20 max-md:right-[20px] -z-[20]"/>
      <div className="flex h-full justify-center mt-24">
        {/* main heading div */}
        <div className="w-1/2 max-md:w-full h-full p-2 flex flex-col justify-center items-center gap-6">
          <h1 className="text-xl">בוא נבדוק מה היא</h1>
          <h2 className="text-3xl font-bold">עלות ההובלה שלך</h2>
          <p>
            מתכננים לעבור דירה? מעולה! אבל לפני שתתחילו לארוז, בוא נבדוק כמה זה באמת תעלה לכם ההובלה. עם המחשבון
            הקליל (אבל מדויק!) שלנו, תוכל להגיע מהר מאוד להערכת עלות ההובלה. בוא נתחיל!
          </p>
        </div>
      </div>
      <MovingTruck link="/baseline" />
      <div className='w-full mt-20 -z-[30] flex justify-end'>
        <img src={home_bg} alt="home_bg" className="w-full"/>
      </div>
    </div>
  );
};

export default Home;
