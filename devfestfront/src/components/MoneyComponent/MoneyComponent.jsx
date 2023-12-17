import React, { useState } from "react";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { IoAddCircleSharp } from "react-icons/io5";
import { IoRemoveCircleOutline } from "react-icons/io5";
function MoneyComponent() {
  const [money, setMoney] = useState(0);
  const handleIncress=()=>{
    if(money>99999)
    setMoney(prev=>prev+10)
  }
  const handleDecress=()=>{
    if(money<=0)
    setMoney(prev=>prev-10)
  }
  return (
    <div className="relative w-[15rem] h-[20rem] rounded-xl border-solid border-gray-300 border-r-[1px] border-b-[1px] border-l-[0.5px] shadow-md">
      <div className="bg-red-500 w-full h-[10rem] rounded-tl-xl rounded-tr-xl" />

      <div className="rounded-full w-20 h-20 bg-white absolute top-1/3 left-1/3  shadow-lg flex items-center justify-center">
        <FaCircleDollarToSlot size={50} color="red" />
      </div>
      <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mt-5">donate money</h2>
          <h4 className="text-2xl font-bold ">{money}$</h4>
        <div className="flex items-center gap-1">
          <IoAddCircleSharp size={30} onClick={handleIncress}/>
          <IoRemoveCircleOutline size={30} onClick={handleDecress}/>
        </div>
      </div>
    </div>
  );
}

export default MoneyComponent;
