import React, { useEffect, useState, lazy } from 'react'
import bgImg from "../../assets/Sign In Page Desktop.png"
import { useNavigate } from 'react-router-dom';


const LazyProfile = lazy(() => import("../../Skeleton/ProfileSkeleton"))

const index = () => {

  const [userData, setUserData] = useState({})

  let userId = localStorage.getItem("id");
  const navigate = useNavigate();

  useEffect(() => {

    if(!localStorage.getItem("id")){
      navigate("/")
    }

    fetch(`https://dummyjson.com/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("data", JSON.stringify(data));
        setUserData(data);
      })
      .catch(err => {
        console.log('error', err);
      })
  }, [])


  return (
    <React.Suspense fallback={<LazyProfile />}>
      <div className='flex items-center justify-center my-3' >
        <div className="flex flex-col border gap-4 items-center p-4 card-shadow z-10 bg-white">
          <div className="border w-[300px] h-[300px]">
            <img src="https://robohash.org/consequunturautconsequatur.png" alt="profile" />
          </div>
          <div className="py-5 w-full pl-4">
            <h1 className="text-xl font-bold">Profile</h1>
            <h2>First Name:- <span className="pl-3">{userData.firstName}</span></h2>
            <h2>Maiden Name:- <span className="pl-3">{userData.maidenName}</span></h2>
            <h2>Last Name:- <span className="pl-3">{userData.lastName}</span></h2>
            <h2>Age:- <span className="pl-3">{userData.age}</span></h2>
            <h2>birthDate:- <span className="pl-3">{userData.birthDate}</span></h2>
            <h2>bloodGroup:- <span className="pl-3">{userData.bloodGroup}</span></h2>
            <h2>Weight:- <span className="pl-3">{userData.weight}</span></h2>
            <h2>Gender:- <span className="pl-3">{userData.gender}</span></h2>
            <h2>Email:- <span className="pl-3">{userData.email}</span></h2>
            <h2>User Name:- <span className="pl-3">{userData.username}</span></h2>
            <h2>Password:- <span className="pl-3">{userData.password}</span></h2>
            <h2>Phone:- <span className="pl-3">{userData.phone}</span></h2>
            <h2>Domain:- <span className="pl-3">{userData.domain}</span></h2>
            <h2>EIN:- <span className="pl-3">{userData.ein}</span></h2>
            <h2>IP Adress:- <span className="pl-3">{userData.ip}</span></h2>
            <h2>MAC Adress:- <span className="pl-3">{userData.macAddress}</span></h2>
            <h2>SSN:- <span className="pl-3">{userData.ssn}</span></h2>
            <h2>University:- <span className="pl-3">{userData.university}</span></h2>
          </div>
        </div>
        <div className="absolute top-0">
          <img src={bgImg} alt="background Image" className="h-screen w-screen" />
        </div>
      </div>
    </React.Suspense>
  )
}

export default index
