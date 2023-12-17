import React from 'react'
import { FaCircleDollarToSlot } from "react-icons/fa6";

function ProductComponent({product}) {
    
  return (
    <div className="relative w-[15rem] h-[20rem] rounded-xl border-solid border-gray-300 border-r-[1px] border-b-[1px] border-l-[0.5px] shadow-md">
    <div className="bg-red-500 w-full h-[10rem] rounded-tl-xl rounded-tr-xl" />

    <div className="rounded-full w-20 h-20 bg-white absolute top-1/3 left-1/3  shadow-lg flex items-center justify-center">
      {product.imageIcon}
    </div>
    <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mt-5">{product.productName}</h2>
        <h4 className="text-2xl font-bold ">{product.price}$</h4>
      <div className="flex items-center gap-1">
        <button className='text-white bg-red-500 p-2 rounded-lg mt-3'>Buy now</button>
      </div>
    </div>
  </div>
  )
}

export default ProductComponent