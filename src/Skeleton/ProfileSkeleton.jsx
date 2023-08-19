import React from 'react'
import style from '../style'

const ProfileSkeleton = () => {
    return (
        <div className='flex items-center justify-center my-3' >
            <div className="flex flex-col border gap-4 items-center p-4 card-shadow bg-white ">
                <div className="border w-[300px] h-[300px] bg-slate-400">
                </div>

                <div className="py-5 border-b-2 w-full pl-4">
                    <h1 className="text-xl font-bold w-20 mb-1 h-4 bg-slate-500"></h1>
                    <h2 className={`${style.skeleton}`}></h2>
                    <h2 className={`${style.skeleton}`}></h2>
                    <h2 className={`${style.skeleton}`}></h2>
                    <h2 className={`${style.skeleton}`}></h2>
                    <h2 className={`${style.skeleton}`}></h2>
                    <h2 className={`${style.skeleton}`}></h2>
                    <h2 className={`${style.skeleton}`}></h2>
                    <h2 className={`${style.skeleton}`}></h2>
                    <h2 className={`${style.skeleton}`}></h2>
                    <h2 className={`${style.skeleton}`}></h2>
                    <h2 className={`${style.skeleton}`}></h2>
                    <h2 className={`${style.skeleton}`}></h2>
                    <h2 className={`${style.skeleton}`}></h2>
                </div>

            </div>
            <div className="absolute top-0">
                <img src={bgImg} alt="background Image" className="h-screen w-screen" />
            </div>
        </div>
    )
}

export default ProfileSkeleton
