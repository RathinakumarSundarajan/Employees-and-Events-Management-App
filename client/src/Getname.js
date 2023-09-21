import './App.css'
import axios from "axios";
import { useRef,useEffect, useState } from 'react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Name from './Name';



const Getname = () => {
  const usercompanyidREF = useRef(null);
  const usercompanynameREF = useRef(null);
  const userbusinesstypeREF = useRef(null);
  const userdomainnameREF = useRef(null);
  const usercompanysizeREF = useRef(null);
  const usercompanywebsiteREF = useRef(null);
  const usercompanylinkedinurlREF = useRef(null);
  const navigate=useNavigate();
  
  const callAPI=async()=> {
    let payload={
      'usercompanyid':usercompanyidREF.current.value,
      'usercompanyname':usercompanynameREF.current.value,
      'userbusinesstype':userbusinesstypeREF.current.value,
      'userdomainname':userdomainnameREF.current.value,
      'usercompanysize':usercompanysizeREF.current.value,
      'usercompanywebsite':usercompanywebsiteREF.current.value,
      'usercompanylinkedinurl':usercompanylinkedinurlREF.current.value,
      
    };
    const service_response=await axios({
        method: 'post',
        url: 'http://localhost:9000/testAPI/createcomp',
        data:payload,
      // config: { }
    })
    .then(function (response) {     
        console.log(response?.data);
        alert("New Comp Name Added Successfully!..");
    })
    .catch(function (response) {   
        console.log(response)
    });
    navigate('/Name')
  };

  return (
    <div>
      <div className="App">
      <header className="App-header">
        <h4>Company Names</h4>
        <label>Company ID:</label>
        <input ref={usercompanyidREF} type="text" id="userid"/> 
        <label>Company Name:</label>
        <input ref={usercompanynameREF} type="text" id="username"/>
        <label>Company Business Type:</label>
        <input ref={userbusinesstypeREF} type="text" id="usertype"/>
        <label>Company Domain Name:</label>
        <input ref={userdomainnameREF} type="text" id="usedomain"/>
        <label>Company Emp Size:</label>
        <input ref={usercompanysizeREF} type="text" id="usersize"/>
        <label>Company Website:</label>
        <input ref={usercompanywebsiteREF} type="text" id="userweb"/>
        <label>Company Linkdin URL:</label>
        <input ref={usercompanylinkedinurlREF} type="text" id="userurl"/> <br/>
        <button type="button" class="btn btn-secondary btn-sm " onClick={callAPI}>Submit</button><br/>
        </header>
    
    </div>
    </div>
  )
}

export default Getname
