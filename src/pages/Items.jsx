import React, { useState } from 'react';
import { items_bg, sun, hotairballoon, add, minus } from '../assets';
import Cloud from '../components/Cloud';
import '../styles/truckAnimation.css';
import MovingTruck from '../components/MovingTruck';
import { listOfItems } from "../constants/index"
import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

const Items = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  console.log(selectedItems)
  
  const handleSelectChange = (e) => {
    const selectedOption = JSON.parse(e.target.value);
    const isItemSelected = selectedItems.some(item => item.name === selectedOption.name);
    
    if (isItemSelected) {
      const updatedSelectedItems = selectedItems.filter(item => item.name !== selectedOption.name);
      setSelectedItems(updatedSelectedItems);
    } else {
      setSelectedItems([...selectedItems, selectedOption]);
    }
  };

  const handleQuantityChange = (name, change) => {
    setSelectedItems(prevItems => {
      const newItems = prevItems.map(item => {
        if (item.name === name) {
          return { ...item, quantity: item.quantity + change };
        }
        return item;
      });

      return newItems.filter(item => item.quantity > 0);
    });
  };
  
  return (
    <div className="fixed bottom-0 w-full z-50 h-full overflow-auto flex flex-col justify-between items-center">
      <div className="mt-20 md:w-1/3 flex flex-col justify-center items-center gap-3 z-20">

        <div className="p-2 flex flex-col justify-center items-center mt-5">
          <h1 className="text-xl">add items</h1>
        </div>

        <select
          onChange={handleSelectChange}
          className="border border-gray-300 rounded-md px-3 py-2 text-right w-auto"
          style={{ maxHeight: "100px" }}
        >
          <option value="">Select an item...</option>
          {listOfItems.map((item, index) => (
            <optgroup key={index} label={item.heading}>
              {item.subheading.map((subItem, subIndex) => (
                <option key={subIndex} value={JSON.stringify({name: subItem.name, price: subItem.price, quantity: 1})}>
                  {subItem.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      
      <div className='flex flex-col w-full items-center p-2 mb-5'>
        {selectedItems.map((item, index) => (
          <div key={index} className='flex justify-between w-full p-2'>
            <div className='flex gap-5'>
              <button onClick={() => handleQuantityChange(item.name, 1)}>
                <IoIosAdd className='bg-white rounded-sm' />
              </button>
              <p>{item.quantity}</p>
              <button onClick={() => handleQuantityChange(item.name, -1)}>
                <RiSubtractFill className='bg-white rounded-sm' />
              </button>
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <MovingTruck link="/baseline" />
      </div>
      <div className='w-full mt-20 -z-[30] flex justify-end'>
        <img src={items_bg} alt="items_bg" className="w-full"/>
      </div>
    </div>
  );
};

export default Items;
