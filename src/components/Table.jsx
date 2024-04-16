import React from 'react';
import { useSelector } from 'react-redux';

const Table = () => {
  const items = useSelector(state => state.items.items)
  const packagedItems = useSelector(state => state.items.packagedItems)
  const assembledItems = useSelector(state => state.items.assembledItems)
  const disassembledItems = useSelector(state => state.items.disassembledItems)


  const getTotalCost = (item) => {
    let totalCost = 0;
    if(packagedItems.some(packagedItem => packagedItem.name === item.name))
    {
      totalCost += item.price
    }
    if(disassembledItems.some(disassembledItem => disassembledItem.name === item.name))
    {
      totalCost += item.price
    }
    if(assembledItems.some(assembledItem => assembledItem.name === item.name))
    {
      totalCost += item.price
    }

    return totalCost;
  };

  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-10 bg-blue-200 bg-[#ffffff] rounded-t-md p-2">
        <div className='w-full flex flex-col items-center justify-center'>Total costs</div>
        <div className="col-span-7">
          <h2 className='w-full flex flex-col items-center'>Extras</h2>
          <div className='grid grid-cols-7'>
            <p className='flex flex-col items-center'>store</p>
            <p className='flex flex-col items-center'>crane</p>
            <p className='flex flex-col items-center'>packing</p>
            <p className='flex flex-col items-center'>disassembly</p>
            <p className='flex flex-col items-center'>assembly</p>
            <p className='flex flex-col items-center'>accessibility</p>
            <p className='flex flex-col items-center'>floor</p>
          </div>
        </div>
        <div className='w-full flex flex-col items-center justify-center'>amount of items</div>
        <div className='w-full flex flex-col items-center justify-center'>Description</div>
      </div>
      {items.map((item, index) => (
        <div key={index} className="w-full grid grid-cols-10 bg-transparent p-2 border-[1px] border-gray-500">
          <div className='flex flex-col items-center'>{getTotalCost(item)}</div>
          <div className="col-span-7 grid grid-cols-7 flex">
            <div className='flex flex-col items-center'>s</div>
            <div className='flex flex-col items-center'>c</div>
            <div className='flex flex-col items-center'>{packagedItems.some(packagedItem => packagedItem.name === item.name) ? item.price : 0}</div>
            <div className='flex flex-col items-center'>
              {disassembledItems.some(disassembledItem => disassembledItem.name === item.name) ? item.price : 0}
            </div>
            <div className='flex flex-col items-center'>
              {assembledItems.some(assembledItem => assembledItem.name === item.name) ? item.price : 0}
            </div>
            <div className='flex flex-col items-center'>0</div>
            <div className='flex flex-col items-center'>0</div>
          </div>
          <div className='flex flex-col items-center'>{item.quantity}</div>
          <div className=''>{item.name}</div>
        </div>
      ))}
    </div>
  )
}

export default Table;
