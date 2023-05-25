import React from "react";
import { BUTTON_STYLES } from "../constants";
import fb from '../utils/fb.png';
import Ln from '../utils/ln.png';
import twitter from '../utils/twitter.png';

const Header = () => {
  return (
    <div className="flex justify-between items-center m-auto w-[90%]">
      <div className="p-3 m-3">
        <p className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-gray-200 via-gray-400 to-gray-600 animate-text">Dark</p>
        <p className="text-sm bg-gradient-to-r bg-clip-text text-transparent from-gray-200 via-gray-400 to-gray-600 animate-text min-w-[5.5rem]">version pro </p>
      </div>
      <div>
        <ul className="flex">
          <li className={BUTTON_STYLES}>Home</li>
          <li className={BUTTON_STYLES}>tech</li>
          <li className={BUTTON_STYLES}>politics</li>
          <li className={BUTTON_STYLES}>entertainment</li>
          <li className={BUTTON_STYLES}>finanace</li>
          <li className={BUTTON_STYLES}>music</li>
          <li className={BUTTON_STYLES}>life</li>
        </ul>
      </div>
      <div>
        <div className="flex">
          <img className="h-10 w-10 m-5 p-1" alt='fb' src={fb} />
          <img className="h-10 w-10 m-5 p-1" alt='fb' src={Ln} />
          <img className="h-10 w-10 m-5 p-1" alt='fb' src={twitter} />
          </div>
      </div>
    </div>
  );
};

export default Header;
