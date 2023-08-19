import React, { useEffect, useState } from 'react';
import Form from './Form';
import style from '../../style';
import bgImg from "../../assets/Sign In Page Desktop.png"
import Hai from "../../assets/hai.png"

const index = () => {


  return (
    <div className={`${style.centerDiv} bg-bgColor relative`} >
      <div className="flex flex-col items-center gap-10 z-10 bg-white">
        <div className="flex flex-col items-center gap-5 card-shadow px-8 py-12">
          <div>
            <div className="flex flex-row gap-1 items-center">
              <p className="text-sm">Welcome back!</p>
              <img src={Hai} alt="hai" />
            </div>
            <h1 className=" font-bold text-2xl">Sign in to your account</h1>
          </div>
          <Form />
          <p className="text-xs text-primary font-bold cursor-pointer">Forget your password?</p>
        </div>
        <p className="text-sm">Don't have an account? <span className="text-primary cursor-pointer">Sign up</span></p>
      </div>
      <div className="absolute">
        <img src={bgImg} alt="background Image" className="h-screen w-screen" />
      </div>
    </div>
  )
}

export default index
