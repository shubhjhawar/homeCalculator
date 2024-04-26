import React from 'react'
import { useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa6";
import { sum1, sum2, sum3, sum4, sum5, arrow1} from '../assets';



const Final = () => {
  const price = useSelector(state => state.items.totalPrice)

  return (
    <div className='flex flex-col items-center justify-center gap-3 mt-10'>
          <div className='py-5 text-3xl font-semibold'>סה"כ עלויות הובלה</div>
          <div className='text-7xl font-semibold'>{price} ₪</div>

          {/* Dotted grey box */}
          <div className="mt-6 p-4 max-w-2xl w-1/2 flex flex-col items-center text-center">
            <h3 className='flex items-center gap-1'>
              <span><FaHeart className='text-red-600'/></span>
              שימו לב
            </h3>
            <h2>המחיר המוצג הוא רק התחלה! חסכו עד 30% על ידי יצירת מכרז בין חברות הובלה מובילות.</h2>
          </div>

          <h4 className='underline'>איך זה עובד?</h4>
          <div className="w-full flex flex-col gap-4 md:flex-row md:flex-wrap items-center justify-content mb-5">
            <div className='bg-white rounded-md p-4 w-[150px] flex flex-col items-center gap-4'>
              <img src={sum1} alt="sum1" />
              <p className='text-sm text-center'>מבצעים את ההובלה ומשאירים ביקורת על החוויה :)</p>
            </div>

            <img src={arrow1} alt="arrow" className="md:block hidden"/>
  
            <div className='bg-white rounded-md p-4 w-[150px] flex flex-col items-center gap-4'>
              <img src={sum2} alt="sum2" />
              <p className='text-sm text-center'>מבצעים את ההובלה ומשאירים ביקורת על החוויה :)</p>
            </div>

            <img src={arrow1} alt="arrow" className="md:block hidden"/>

            <div className='bg-white rounded-md p-4 w-[150px] flex flex-col items-center gap-4'>
              <img src={sum3} alt="sum3" />
              <p className='text-sm text-center'>מבצעים את ההובלה ומשאירים ביקורת על החוויה :)</p>
            </div>

            <img src={arrow1} alt="arrow" className="md:block hidden"/>

            <div className='bg-white rounded-md p-4 w-[150px] flex flex-col items-center gap-4'>
              <img src={sum4} alt="sum4" />
              <p className='text-sm text-center'>מבצעים את ההובלה ומשאירים ביקורת על החוויה :)</p>
            </div>

            <img src={arrow1} alt="arrow" className="md:block hidden"/>

            <div className='bg-white rounded-md p-4 w-[150px] flex flex-col items-center gap-4'>
              <img src={sum5} alt="sum5" />
              <p className='text-sm text-center'>מבצעים את ההובלה ומשאירים ביקורת על החוויה :)</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="flex flex-col items-center underline">למה כדאי להשתמש במכרז?</h3>
            <div className='flex flex-col items-center gap-1 mb-2'>
              <p className='text-2xl'>1</p>
              <p className='font-semibold'>הוזלה משמעותית</p>
              <p>חסכו מאות שקלים על הובלת הדירה</p>
            </div>
            <div className='flex flex-col items-center gap-1 mb-2'>
              <p className='text-2xl'>2</p>
              <p className='font-semibold'>תחרותיות</p>
              <p>חברות הובלה יתחרו על המחיר הטוב ביותר</p>
            </div>
            <div className='flex flex-col items-center gap-1 mb-2'>
              <p className='text-2xl'>3</p>
              <p className='font-semibold'>שקיפות</p>
              <p>בחרו את ההצעה המתאימה לכם ביותר</p>
            </div>
            <div className='flex flex-col items-center gap-1 mb-2'>
              <p className='text-2xl'>4</p>
              <p className='font-semibold'>נוחות</p>
              <p>קבלו את כל ההצעות במקום אחד</p>
            </div>
          </div>
        </div>
  )
}

export default Final
