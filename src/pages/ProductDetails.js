import React, { useContext } from 'react';
//import useParam
import { useParams } from 'react-router-dom';
//import cart context
import { CartContext } from '../contexts/CartContext';
//import product context 
import { ProductContext } from '../contexts/ProductContext';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  //get the product id from url
  const {id}=useParams();
  const {products}=useContext(ProductContext);
  const {addToCart}=useContext(CartContext);
  const {isAuthenticated} = useAuth0();

  //get the single product based on the id
  const product=products.find((item)=>{
    return item.id===parseInt(id);
  })

  //if product is not found
  if(!product){
    return(
      <section className='h-screen flex justify-center items-center'>Loading...</section>
    )
  }

  // console.log(product)

  //destructure products
  const {title,price,description,image} =product;

  return(
    <section className=' pt-24 pb-12 lg:py-32 h-screen flex items-center'>
      <div className=' container mx-auto'>
        {/* image and text wrapper */}
        <div className='flex flex-col lg:flex-row items-center'>
        {/* image */}
        <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
          <img className='max-w-[170px] lg:max-w-xs' src={image} alt=''/>
        </div>
        {/* text */}
        <div className='flex-1 text-center lg:text-left'>
          <h1 className='text-[27px] font-medium mb-1 max-w-[450px] mx-auto lg:mx-0' >{title}</h1>
          <div className='text-xl text-red-600 font-medium mb-4'>$ {price}</div>
          <p className=' mb-8 text-sm'>{description}</p>
          <button onClick={() => {
              if (isAuthenticated) {
                addToCart(product,product.id);                
              } else {
                alert('You need to be logged in to add items to the cart.');
              }
            }} className=' bg-primary py-4 px-8 text-white rounded-3xl hover:bg-gray-700'>
            Add to cart
          </button>
          {/* back to home button */}
          <div className='mt-4'>
              <Link to="/" className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full'>
                Back to Home
              </Link>
            </div>
        </div>
        </div>
      </div>
    </section>
  )
};

export default ProductDetails;
