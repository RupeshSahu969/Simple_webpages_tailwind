import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#2699fb] p-4 md:postion-fixed">
      <div className="max-w-[1240px] py-[15px] item-center flex justify-between  mx-auto ">
        <div className="text-3xl fornt-bold">WsCube tech</div>
{
    toggle ? <IoCloseOutline onClick={() =>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
    :
    <IoIosMenu onClick={() =>setToggle(!toggle)} className="text-white text-2xl md:hidden block" /> 
}

     
        
        <ul className="hidden md:flex text-white gap-10">
          <li>Home</li>
          <li>Comapy</li>
          <li>Resourcas</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* Responsive */}
        <ul className={`duration-300 md:hidden w-full h-screen  text-white fixed bg-black  top-[92px] 
            ${toggle ? 'left-[0%]' :
            'left-[-100%] '} `}>
          <li className="p-5">Home</li>
          <li className="p-5">Comapy</li>
          <li className="p-5">Resourcas</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
