import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profile from './components/Profile'
import Expense from './components/Expense'
import Login from './components/Login'
import SignIn from './components/Sign'


export const Context = React.createContext();
function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/expense' element={<Expense />} />
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignIn />} />



      </Routes>
    </BrowserRouter>


  )
}

export default App