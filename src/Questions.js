import React, { useState } from 'react';
import images from './assets/images';

const Questions = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="mt-2 mb-8 lg: w-11/12 lg:text-left mx-auto  tracking-wide">
      <h1
        className="text-xl h1 flex justify-between"
        style={
          showInfo ? { fontWeight: '600', color: '#000' } : { fontWeight: '' }
        }
      >
        {title}
        <button className="" onClick={() => setShowInfo(!showInfo)}>
          <img className="w-4 -mt-5 lg:m-0" src={images.icon} alt="" />
        </button>
      </h1>

      {showInfo && <p className="text-tiny text-zinc-500 ">{info}</p>}
      <div
        className="mt-5 border-solid border-b-2
    border-y-gray-300 "
      ></div>
    </div>
  );
};

export default Questions;
