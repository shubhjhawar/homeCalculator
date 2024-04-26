import { useState } from 'react';
import { boxes_img, cute_boxes, progress_bar, carousel_arrow } from '../assets';
import Cloud from '../components/Cloud';
import MovingTruck from '../components/MovingTruck';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useSelector, useDispatch } from 'react-redux';
import { addBoxes } from '../slices/slices';


const Boxes = () => {
  const Boxes = useSelector(state => state.items.boxes);
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(Boxes);

  const handleProgressChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setProgress(value);
    }
  };

  return (
    <div>
      <div>
        <img src={progress_bar} className='h-2 mt-4 w-full px-6' />

      </div>
      <div className='text-center'>
        <h1 className='mt-20 font-semibold text-3xl px-3'>הוסף ארגזים למשאית שלך</h1>
        <p className='mt-6'> (; שקיות נחשבות גם ארגזים</p>
        
       {/* Progress bar */}
       <div className="flex justify-center items-center mt-8 px-3">
       <p className='mr-8 font-medium'>  אין לי בכלל</p>
        <div>
          
        </div>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            style={{
              width: '35%', // Adjust width as needed
              background: `linear-gradient(to right, #ff7f0e 0%, #ff7f0e ${progress}%, #868686 ${progress}%, #868686 100%)`, // Orange to grey gradient
              appearance: 'none', // Removes default styles
              height: '13px', // Adjust height as needed
              borderRadius: '5px', // Rounded corners
              outline: 'none', // Removes outline
            }}
          />
          <style>
            {`
              input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 20px; /* Width of the thumb */
                height: 20px; /* Height of the thumb */
                background: #ffffff; /* White color for the thumb */
                border: 1px solid #000000; /* Thin black border */
                border-radius: 50%; /* Circular shape for the thumb */
                cursor: pointer; /* Cursor style */
                margin-top: -6px; /* Adjust vertical alignment */
              }

              input[type="range"]::-moz-range-thumb {
                width: 20px; /* Width of the thumb */
                height: 20px; /* Height of the thumb */
                background: #ffffff; /* White color for the thumb */
                border: 1px solid #000000; /* Thin black border */
                border-radius: 50%; /* Circular shape for the thumb */
                cursor: pointer; /* Cursor style */
                margin-top: -6px; /* Adjust vertical alignment */
              }
            `}
          </style>
        <p className='ml-8 font-medium'>יש לי יותר מידי</p>
        </div>

        <div className="text-center text-2xl mt-4 font-semibold pb-8">
          <p>{progress}</p>
        </div>
      </div>
      
      <div>
        <div className="absolute top-[320px] left-20 max-md:left-[20px] w-24 h-12 md:block hidden">
          <Cloud />
        </div>
        <div onClick={()=>dispatch(addBoxes(progress))}>
          <MovingTruck link="/services" />
        </div>
        {/* Background image */}
        <img src={boxes_img} alt="background" className='absolute bottom-0 w-full h-1/3 z-30' />

        {/* Cute boxes component */}
      <img src={cute_boxes} alt="cute boxes" className='absolute bottom-0 right-36 h-1/2 z-40 mb-16 hidden lg:block' />
        </div>

        {/* Button with right arrow */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 md:block hidden">
       <Link to="/services">
        <img src={carousel_arrow} alt="Button with right arrow" />
      </Link>
      </div>

    </div>
  );
};

export default Boxes;
