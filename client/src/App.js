import React from 'react';
import {Router,Routes,Route,Link} from 'react-router-dom'

import Name from './Name';
import Contact from './Contact';
import Events from './Events';
import Exhibitors from './Exhibitors';
import Getname from './Getname';
import Getcontact from './Getcontact';
import Getevents from './Getevents';
import Getexhibitors from './Getexhibitors';



import './App.css'




function App () {
  return (
     <>
          
     <ul class="nav nav-tabs justify-content-end sticky-top bg-dark">
      <li class="nav-item">
        <a class="nav-link text-white" href="/">Company Names</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="/contact">Contacts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="/Events">Events</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="/Exhibitors">Exhibitors</a>
      </li>      
    </ul>
   
      {/* <div className='navbar'>
      <a href="/">Company Names</a>
      <a href="/contact">Contacts</a>
      <a href="/Events">Events</a>
      <a href="/Exhibitors">Exhibitors</a>
      </div> */}
      <Routes>
        <Route exact path='/' element={<Name/>}></Route>
        <Route exact path='/Contact' element={<Contact/>}></Route>
        <Route exact path='/Events' element={<Events/>}></Route>
        <Route exact path='/Exhibitors' element={<Exhibitors/>}></Route>
        <Route exact path='/Getname' element={<Getname/>}></Route>
        <Route exact path='/Getcontact' element={<Getcontact/>}></Route>
        <Route exact path='/Getevents' element={<Getevents/>}></Route>
        <Route exact path='/Getexhibitors' element={<Getexhibitors/>}></Route>
        <Route exact path='/Name' element={<Name/>}></Route>
      </Routes>
      
      
      
      
    </>
      
  )
}

export default App;
