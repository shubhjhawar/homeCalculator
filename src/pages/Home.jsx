import React, { useState } from 'react';
import { home_bg, sun, hotairballoon } from '../assets';
import Cloud from '../components/Cloud';
// import smallCloud from "../components/smallCloud";
import '../styles/truckAnimation.css';
import MovingTruck from '../components/MovingTruck';
import SmallCloud from '../components/SmallCloud';
import Balloon from '../components/Balloon';

const Home = () => {
  return (
    <div className="relative h-full flex flex-col justify-between">
      {/* clouds */}
      <div className="absolute top-[124px] left-[58px] max-md:left-[14px] w-[250px] h-[140px] -z-[20]">
        <Cloud />
      </div>
      <div className="absolute top-[207px] left-[1233px] w-[250px] h-[118px] -z-[20]">
        <Cloud />
      </div>
      <div className="absolute top-[134px] left-[1118px] w-[100px] h-[62px]">
        <SmallCloud />
      </div>
      <div className="absolute top-[360px] right-20 max-md:right-[20px] -z-[20]">
        <Balloon />
      </div>
      {/* <img src={sun} alt="sun" className="absolute top-10 right-[20px] -z-[20]"/> */}
      {/* <img src={hotairballoon} alt="hotairballoon" className="absolute top-[360px] right-20 max-md:right-[20px] -z-[20]"/> */}



      <div className="flex h-full justify-center ">
        {/* main heading div */}
        <div className="w-1/2 max-md:w-full h-full p-2 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-semibold mt-[100px]">בוא נבדוק מה היא</h1>
          <h2 className="text-4xl font-bold text-white mt-[30px]">עלות ההובלה שלך</h2>
          <p className='mt-[30px] text-center w-[535px] max-md:w-full'>
          מתכננים לעבור דירה? מעולה! אבל לפני שתתחילו לארוז, בוא נבדוק כמה באמת תעלה לכם ההובלה. עם המחשבון הקליל (אבל מדויק!) שלנו, תוכל להגיע מהר מאוד להערכת עלות ההובלה. בוא נתחיל!
          </p>
          <h3 className='mt-[15px] font-bold'>בוא נתחיל!</h3>
        </div>
      </div>
      <div className="mt-[40px]" >
        <MovingTruck link="/baseline" />
      </div>
      <div className='w-full h-[400px] mt-20 -z-[30] flex justify-end'>
        <img src={home_bg} alt="home_bg" className="w-full"/>
      </div>
    </div>
  );
};

export default Home;
