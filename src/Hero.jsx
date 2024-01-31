import React from "react";
import { Item } from "./Item";
import {addToCart} from "./store/Features/cart"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Hero = () => {
  // const ok=Item;
  const dispatch=useDispatch({})
  return (
    <div className="px-5 w-full mx-auto py-10 text-black">
      <div>
        <h1 className="text-center text-4xl font-bold">
          These are Our Products
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-5">
        {Item?.map(({id,name,pic,price},index) => {
          return (
            <div
              key={index}
              className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300"
            >
              <img
                className="w-[245px] h-[290px] mx-auto pb-6"
                src={pic}
                alt=""
              />
              <h1 className="font-bold text-sm text-center pb-2">{name}</h1>
              <p className="text-sm text-center pb-2">Price:${price}</p>
              <div className="flex justify-center items-center gap-3">
                <button onClick={()=>{dispatch(addToCart({id,pic,name,price,qty:1}))}}className="text-white w-[200px] mx-auto rounded-md my-6 font-medium py-3 px-6 bg-black">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
