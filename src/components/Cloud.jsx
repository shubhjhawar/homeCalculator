import React from 'react'
import { cloud, cloudleft } from '../assets'
import "../styles/cloud.css";
const Cloud = () => {
  return (
    <div className="">
      <img src={cloud} alt="Cloud" className="h-full absolute top-0 cloud" />

      <img src={cloudleft} alt="Cloud Left" className="w-1/2 h-full absolute top-0 cloud-left" />
    </div>
  )
}

export default Cloud