import React from 'react'
import { FOOTER_STYLE } from '../constants'

const Footer = () => {
  return (
    <div className='m-auto w-[90%] flex p-5 h-20 text-[#5c5b5c] justify-between items-center border-t border-gray-700 mt-5'>
      <div className='my-3 py-3 capitalize min-w-[300px]'>© copyright - Shivam Dwivedi</div>
      <div>
      <ul className="flex">
          <li className={FOOTER_STYLE} >Home</li>
          <li className={FOOTER_STYLE}>tech</li>
          <li className={FOOTER_STYLE}>politics</li>
          <li className={FOOTER_STYLE}>entertainment</li>
          <li className={FOOTER_STYLE}>finanace</li>
          <li className={FOOTER_STYLE}>music</li>
          <li className={FOOTER_STYLE}>life</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer