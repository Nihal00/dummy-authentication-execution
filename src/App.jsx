import React, { useEffect, useState } from 'react'
import SignIn from "./components/SignIn"
import Profile from "./components/Profile"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
