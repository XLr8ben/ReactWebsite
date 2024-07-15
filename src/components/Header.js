import React, { useContext, useEffect, useState } from "react";
//sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
//cart context
import { CartContext } from "../contexts/CartContext";
//import icons
import { BsBag } from "react-icons/bs";
//import link
import { Link } from "react-router-dom";
//import logo
import Logo from "../img/Amazon_logo.svg";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  //header state
  const [isActive, setIsActive] = useState(false);

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  
  //event listener
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <header className={`${isActive ? 'bg-gray-100 py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* logo */}
        <Link to={"/"}>
          <div className="w-[100px]">
            <img src={Logo} alt="Amazon logo" />
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          {/* user info */}
          {isAuthenticated && (
            <div className="flex items-center space-x-2">
              <img className="w-8 h-8 rounded-full" src={user.picture} alt={user.name} />
              <div className="hidden md:block">
                <p className="text-xs">Welcome</p>
                <h2 className="text-sm">{user.name}</h2>
              </div>
            </div>
          )}
          {/* login/logout */}
          {isAuthenticated ? <Logout /> : <Login />}
          {/* cart */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-2xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
