import React, {createContext, useState, useEffect} from 'react';

//create context for global acess
export const ProductContext=createContext();

const ProductProvider= ({children}) => {
  //product state
  const [products, setproducts] = useState([])
  //fetch products
  useEffect(() => {
    const fetchProducts = async ()=>{
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json();
      // console.log(data)
      setproducts(data);
    };
    fetchProducts();
  }, [])
  
  return(
  <ProductContext.Provider value={{products}}>
    {children}
  </ProductContext.Provider>
  )
};

export default ProductProvider;
