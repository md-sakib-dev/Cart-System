import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Item } from './Item';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export const Home = () => {
  const cartItems=useSelector((state)=>state.cart);
  // const length= cartItems?.cartItems?.length;
  return (
    <div className='w-full mx-auto h-20 flex justify-around items-center bg-orange-500 sticky top-0'>
        <Link to="/" className='text-black'>
            <h1 className='text-4xl'>Shathe Achi Dot Com </h1>
        </Link>
        <div className='rounded-md border-2 w-30 text-black'>
            <input type="text" placeholder='Search Here' />
        </div>
        <div className='flex  justify-center gap-2 item-center'>
         <Link to="/cart">

         <FaShoppingCart size={30} />
         </Link>
        <div className='font-bold text-xl'>
        <p>{cartItems?.cartItems?.length}</p>
        </div>
        </div>

        </div>
        
  )
}
