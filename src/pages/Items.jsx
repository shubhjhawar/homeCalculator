import React, { useState, useEffect } from 'react';
import { items_bg, sun, hotairballoon, add, minus, progress_bar_items } from '../assets';
import Cloud from '../components/Cloud';
import '../styles/truckAnimation.css';
import MovingTruck from '../components/MovingTruck';
import { listOfItems } from "../constants/index"
import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { useSelector, useDispatch } from 'react-redux';
import { addItems, changeItemQuantity, removeItem } from '../slices/slices';

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
                const updatedQuantity = item.quantity + change;
                if (updatedQuantity <= 0) {
                    dispatch(removeItem({ item }));
                    return null; // Returning null to be filtered out later
                }
                return { ...item, quantity: updatedQuantity };
            }
            return item;
        });

        return newItems.filter(item => item !== null && item.quantity > 0); // Filtering out null items
    });
    dispatch(changeItemQuantity({ name, change }));
  };


  const handleSelectChange = (item) => {
    const isItemSelected = selectedItems.some(i => i.name === item.name);
    
    if (isItemSelected) {
      const updatedSelectedItems = selectedItems.filter(i => i.name !== item.name);
      setSelectedItems(updatedSelectedItems);
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }

    dispatch(removeItem({item}))
  };

  useEffect(() => {
    setFilteredItems(listOfItems)
  }, [])
  
  
  return (
    <div className="fixed bottom-0 w-full z-50 h-full overflow-auto flex flex-col justify-between items-center">
    
        <img src={progress_bar_items} className='h-2 mt-4 w-full px-6' />
      <div className="mt-20 md:w-1/3 flex flex-col justify-center items-center gap-3 z-20">

        <div className="p-2 flex flex-col justify-center items-center mt-5">
          <h1 className="text-xl">add items</h1>
        </div>

        <h2 className='w-full flex justify-end mr-4'>Items</h2>
        <input
          type="text"
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md px-3 py-2 text-right w-full"
          style={{ maxHeight: "100px" }}
          placeholder="Search..."
          value={searchQuery}
        />
        <div className='bg-white w-full text-black rounded-md max-h-[200px] overflow-y-scroll' style={{ direction: 'rtl' }}>
          {filteredItems.map((item, index) => (
            <div key={index} className="p-2">
              <div>
                <h2 className='font-bold text-lg bg-gray-200 p-1'>{item.heading}</h2>
                <ul>
                  {item.subheading.map((subItem, subIndex) => {
                    const isSelected = selectedItems.some(selectedItem => selectedItem.name === subItem.name);
                                       
                    return (
                      <li key={subIndex} className="cursor-pointer hover:bg-gray-100 flex gap-2 items-center" onClick={() => handleSelectChange(subItem)}>
                        {isSelected && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24">
                            <path fill="#7F56D9" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z" />
                          </svg>
                        )}
                        {subItem.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
    
        <div className='flex flex-col w-full items-center py-2 mb-5'>
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
              <div className='flex gap-2 items-center'>
                <p>{item.name}</p>
                <button onClick={()=>handleSelectChange(item)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24">
                    <g fill="black">
                      <path fill="#7F56D9" d="M5.47 5.47a.75.75 0 0 1 1.06 0l12 12a.75.75 0 1 1-1.06 1.06l-12-12a.75.75 0 0 1 0-1.06" />
                      <path fill="#7F56D9" d="M18.53 5.47a.75.75 0 0 1 0 1.06l-12 12a.75.75 0 0 1-1.06-1.06l12-12a.75.75 0 0 1 1.06 0" />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div onClick={() => dispatch(addItems(selectedItems))}>
          <MovingTruck link="/boxes" />
        </div>
      </div>
      <div className='w-full mt-20 -z-[30] flex justify-end'>
        <img src={items_bg} alt="items_bg" className="w-full"/>
      </div>
    </div>
  );
};

export default Items;