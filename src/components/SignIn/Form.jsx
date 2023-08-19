import React, { useState, } from 'react'
import { useNavigate } from 'react-router-dom';
import style from "../../style";

const Form = () => {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    userpassword: ""
  })

  const [err, setErr] = useState({
    emptyErr: false,
    msg: "Please fill all fields",
    dataErr: false,
    dataErrMsg: ""
  })


  function searchData(e) {
    e.preventDefault()
    if (userData.username.trim() === "" || userData.userpassword.trim() === "") {
      return setErr({ ...err, emptyErr: true });
    } else {
      setErr({ ...err, emptyErr: false, dataErr: false, dataErrMsg: ""});

      fetch("https://dummyjson.com/auth/login", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body : JSON.stringify({
          username: userData.username,
          password: userData.userpassword
        })
      })
      .then(res => {
        if(res.ok){
          return res.json();
        } else {
          throw new Error('Invalid credentials');
        }
      })
      .then((data) =>{
        console.log('data', data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("id", data.id);
        navigate('/profile');
      })
      .catch(error => {
        setErr({...err, dataErr: true, dataErrMsg: error.message});
        console.log(error.message);
      })
    }
  }

return (
  <form onSubmit={ (e) => searchData(e) } className="flex flex-col gap-5 w-full">
    <div className={`${style.inputDiv}`}>
      <label htmlFor="name" className="text-sm">Your email</label>
      <input type="text" name="name" id="name" className={`${style.input}`} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
    </div>
    <div className={`${style.inputDiv}`}>
      <label htmlFor="password" className="text-sm">Password</label>
      <input type="password" name="password" id="password" className={`${style.input}`} onChange={(e) => setUserData({ ...userData, userpassword: e.target.value })} />
    </div>
    {
      err && err?.emptyErr ? (<p className="self-center text-errorMsg">{err.msg}</p>) : err && err?.dataErr ? (<p className="self-center text-errorMsg">{err.dataErrMsg}</p>) : ""
    }
    <button type="submit" className={`${style.btn}`}>CONTINUE</button>
  </form>
)
}

export default Form
