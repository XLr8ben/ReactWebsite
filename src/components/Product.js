import React, {useContext} from 'react';
//import link
import {Link} from 'react-router-dom'
//import icons
import {BsPlus, BsEyeFill} from 'react-icons/bs'
//import cart context
import { CartContext } from '../contexts/CartContext';
import { useAuth0 } from "@auth0/auth0-react";
import Login from './Login';

const Product = ({param}) => {
  const {addToCart}=useContext(CartContext);

  // console.log(param)
  //desturcture products
  const {id,image,category,title,price,}=param;
  const {isAuthenticated} = useAuth0();
  return(
  <div>
    <div className='border border-[grey] h-80 mb-4 relative overflow-hidden group transition'>
      <div className='w-full h-full flex justify-center items-center'>
        {/* <div className=' w-52 mx-auto flex justify-center items-center'> */}
          <img className=' max-h-40 group-hover:scale-110 transition duration-100' src={image} alt=''/>
        {/* </div> */}
      </div>
      {/* buttons */}
      <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
        <button onClick={() => {
              if (isAuthenticated) {
                addToCart(param, id);
                
              } else {
                alert('You need to be logged in to add items to the cart.');
              }
            }}>
          <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'><BsPlus className='text-3xl'/></div>
        </button>
        <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
          <BsEyeFill/>
        </Link>
      </div>
    </div>
    {/* category and title and price */}
    <div>
      <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
      <Link to={`/product/${id}`}>
      <h2 className=' font-semibold mb-1'>{title}</h2>
      </Link>
      <div className='font-semibold'>$ {price}</div>
    </div>
  </div>
  )
};

export default Product;
