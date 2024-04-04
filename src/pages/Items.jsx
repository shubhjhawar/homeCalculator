import React, { useState, useEffect } from 'react';
import { items_bg, sun, hotairballoon, add, minus, progress_bar_items } from '../assets';
import Cloud from '../components/Cloud';
import '../styles/truckAnimation.css';
import MovingTruck from '../components/MovingTruck';
import { listOfItems } from "../constants/index"
import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { useSelector, useDispatch } from 'react-redux';
import { addItems } from '../slices/slices';

const Items = () => {
  const reduxItems = useSelector(state => state.items.items);
  console.log(reduxItems);
  const [selectedItems, setSelectedItems] = useState(reduxItems);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredItems = listOfItems.filter(item =>
      item.heading.toLowerCase().includes(query)
    );
    setFilteredItems(filteredItems);
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

  const handleSelectChange = (item) => {
    const isItemSelected = selectedItems.some(i => i.name === item.name);
    
    if (isItemSelected) {
      const updatedSelectedItems = selectedItems.filter(i => i.name !== item.name);
      setSelectedItems(updatedSelectedItems);
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  useEffect(() => {
    setFilteredItems(listOfItems)
  }, [])
  
  
  return (
    <div className="fixed bottom-0 w-full z-50 h-full overflow-auto flex flex-col justify-between items-center">
    
        <img src={progress_bar_items} className='h-2 mt-4 w-full px-6' />
      <div className="mt-20 md:w-1/3 flex flex-col justify-center items-center gap-3 z-20">

        <div className="p-2 flex flex-col justify-center items-center mt-5">
          <h1 className="text-3xl font-bold">הוסף פריטים למשאית שלך</h1>
        </div>

        <div className="flex flex-col items-end">
          <p className='text-right'>חפש פריטים</p>
          <select
            onChange={handleSelectChange}
            className="border border-gray-300 rounded-md px-3 py-2 text-right w-auto"
            style={{ maxHeight: "100px" }}
          >
            <option value="">ארון 3 דלתות, מקרר, שולחן אוכל</option>
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
        </div>


      
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
