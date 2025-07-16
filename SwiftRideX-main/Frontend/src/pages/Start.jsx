import React from 'react'
import { Link } from 'react-router-dom';
import RideSwiftLogo from '../Images/SwiftRideX.png';
import Bg from '../Images/bg.jpg';

const Start = () => {
  return (
    <div>
      <div className='h-screen pt-8  flex justify-between flex-col w-full  bg-cover bg-center' style={{ backgroundImage: `url(${Bg})` }}>
      <img className='w-75 ml-8 bg-transparent' src={RideSwiftLogo} alt="Logo" />


      <div className='bg-white pd-7 py-4 px-4'>
          <h2 className='text-2xl font-bold'>Get Started with SwiftRideX</h2>
          <Link to='/login'  className=' flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start