import './App.css'
import axios from "axios";
import { useRef,useEffect, useState } from 'react';
import React from 'react'
import Contact from './Contact';
import { useNavigate } from 'react-router-dom';



const Getcontact = () => {
    const usercontactidREF = useRef(null);
    const usercompanynameREF = useRef(null);
    const userfirstnameREF = useRef(null);
    const userlastnameREF = useRef(null);
    const userdesignationREF = useRef(null);
    const userofficemailREF = useRef(null);
    const userpersonalmailREF = useRef(null);
    const usercountryREF = useRef(null);
    const userofficenumberREF = useRef(null);
    const userpersonalnumberREF = useRef(null);
    const userlinkedinREF = useRef(null);
    const usercurrentcompanyREF = useRef(null);
    const userpastcompanyREF = useRef(null);

    const navigate=useNavigate();

// ----------------------------------------------------------POST DATAS------------------------------------------------------------------
    const callContactAPI=async()=> {
        let payload={
          'usercontactid':usercontactidREF.current.value,
          'usercompanyname':usercompanynameREF.current.value,
          'userfirstname':userfirstnameREF.current.value,
          'userlastname':userlastnameREF.current.value,
          'userdesignation':userdesignationREF.current.value,
          'userofficemail':userofficemailREF.current.value,
          'userpersonalmail':userpersonalmailREF.current.value,
          'usercountry':usercountryREF.current.value,
          'userofficenumber':userofficenumberREF.current.value,
          'userpersonalnumber':userpersonalnumberREF.current.value,
          'userlinkedin':userlinkedinREF.current.value,
          'usercurrentcompany':usercurrentcompanyREF.current.value,
          'userpastcompany':userpastcompanyREF.current.value,          
        };
        const service_response=await axios({
            method: 'post',
            url: 'http://localhost:9000/testAPI/createcontact',
            data:payload,
          // config: { }
        })
        .then(function (response) {     
            console.log(response?.data);
            alert("New Contact Added Successfully!..");
        })
        .catch(function (response) {   
            console.log(response) 
        });
        navigate('/Contact')
      };


  return (
    <div>
        <div className="App">
        <header className="App-header">
        <h4>Contacts</h4>
        <label>Contact ID:</label>
        <input ref={usercontactidREF} type="text" id="userid"/> 
        <label>Company Name:</label>
        <input ref={usercompanynameREF} type="text" id="username"/>
        <label>Contact First Name:</label>
        <input ref={userfirstnameREF} type="text" id="usertype"/>
        <label>Contact Last Name:</label>
        <input ref={userlastnameREF} type="text" id="usedomain"/>
        <label>Designation:</label>
        <input ref={userdesignationREF} type="text" id="usersize"/>
        <label>Office e-mail Address:</label>
        <input ref={userofficemailREF} type="text" id="userweb"/>
        <label>Personal e-mail Address:</label>
        <input ref={userpersonalmailREF} type="text" id="userurl"/>
        <label>Country:</label>
        <input ref={usercountryREF} type="text" id="userurl"/>
        <label>Office Phone Number:</label>
        <input ref={userofficenumberREF} type="text" id="userurl"/>
        <label>Personal Phone Number:</label>
        <input ref={userpersonalnumberREF} type="text" id="userurl"/>
        <label>Linkdin URL:</label>
        <input ref={userlinkedinREF} type="text" id="userurl"/>
        <label>Current Company:</label>
        <input ref={usercurrentcompanyREF} type="text" id="userurl"/>
        <label>Past Company:</label>
        <input ref={userpastcompanyREF} type="text" id="userurl"/><br/>
        <button type="button" class="btn btn-secondary btn-sm" onClick={callContactAPI}>Submit</button><br/>
        </header>
        </div>
    </div>
  )
}

export default Getcontact
