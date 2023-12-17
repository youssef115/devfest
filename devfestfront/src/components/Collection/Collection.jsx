import React,{useEffect, useState} from "react";
import MoneyComponent from "../MoneyComponent/MoneyComponent";
import ProductComponent from "../ProductComponent/ProductComponent";
import { listOfProducts } from "../../utils/Utils";
function Collection() {

  const [productData,setProductData] =useState([])
   useEffect(()=>{
     
   },[])
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <>
          <h1 className="text-4xl font-bold">Donate now and be one of the most generase people in world</h1>
          <div className=" flex gap-10 mt-20">
          <MoneyComponent />
            {listOfProducts.map(product=>(

                <ProductComponent product={product}/>
            ))}

          </div>
        </>
      </div>
    </>
  );
}

export default Collection;
