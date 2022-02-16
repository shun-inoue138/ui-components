import React, { useState, VFC } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const Accordion: VFC<{ title: string; body: string }> = ({ title, body }) => {
  const [isDisplay, setIsDisplay] = useState(false);
  const onClickHandler = () => {
    setIsDisplay(!isDisplay);
  };
  return (
    <div className="w-40">
      <div className=" p-2 bg-blue-400 shadow-md rounded-t-xl font-semibold text-gray-100 flex justify-between ">
        <h3 className=" overflow-hidden">{title}</h3>
        <button onClick={onClickHandler}>
          {isDisplay ? <FaArrowDown /> : <ImCross />}
        </button>
      </div>
      <div
        className={`${
          isDisplay ? 'visible opacity-100' : 'invisible opacity-0'
        } h-40 bg-gray-500 text-white transition duration-200 ease-in-out rounded-b-xl border-t-2 border-gray-500 p-2 overflow-scroll`}
      >
        {body}
      </div>
    </div>
  );
};

export default Accordion;
