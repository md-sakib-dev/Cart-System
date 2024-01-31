import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { increment, decreament, DeleteProduct ,totalPrice} from "./store/Features/cart";

const Cart = () => {
  const { cartItems,subTotal, home_delivery } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleDelete = (item) => {
    dispatch(DeleteProduct(item));
  };
  useEffect(()=>{
    dispatch(totalPrice())
  },[cartItems])
  return (
    <div className="w-full mx-auto py-10 px-5 md:px-20 flex justify-around">
      <div
        className="grid gap-8 shadow-md
    rounded-md  text-black"
      >
        {cartItems?.map((item, index) => {
          return (
            <div
              className="flex justify-between w-[650px]   bg-slate"
              key={index}
            >
              <div className=" w-28 object-contain ">
                <img src={item.pic} alt={item.name} />
              </div>
              <div className="flex flex-col gap-6  mb-5">
                <h1 className="font-semibold ">{item.name}</h1>
                <div className="flex justify-between mb-5">
                  <div className=" w-36  flex justify-between text-black">
                    <h1 className="font-semibold text-black">Qty: </h1>
                    <div className=" ml-2 flex w-30  text-lg font-semibold rounded-md ">
                      <button
                        onClick={() => {
                          dispatch(decreament(item));
                        }}
                        className=" w-8 font-semibold bg-blue-600 duration-700 hover:opacity-80 hover:scale-125 rounded-md"
                      >
                        {" "}
                        -{" "}
                      </button>
                      <p className=" mr-2 w-6 rounded-md text-black">
                        {item.qty}
                      </p>
                      <button
                        onClick={() => {
                          dispatch(increment(item));
                        }}
                        className="w-8 font-semibold bg-blue-600 duration-700 hover:opacity-80 hover:scale-125 rounded-md"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="font-semibold">${item.price}</div>
                </div>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  handleDelete(item);
                }}
              >
                <IoMdClose color="black" size={30} />
              </div>
            </div>
          );
        })}
      </div>
      {cartItems.length === 0 ? (
        <div className="flex justify-center items-center text-2xl md:text-5xl font-semibold text-black lg:ml-[550px] mt-72">
          <h1>Your Cart is Empty</h1>
        </div>
      ) : (
        <div className="w-36  bg-white text-black">
          <div className="flex flex-col justify-between">
            <p>Sub-Total:{subTotal.toFixed(1)}$</p>
            <p>Deleivery Charge:{home_delivery}</p>
            <p>Total:{(subTotal+home_delivery).toFixed(1)}</p>
           
              
            </div>
       </div>
      
      )}
    </div>
  );
};

export default Cart;
