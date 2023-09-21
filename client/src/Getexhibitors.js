import './App.css'
import axios from "axios";
import { useRef,useEffect, useState } from 'react';
import React from 'react'
import { useNavigate } from 'react-router-dom';



const Getexhibitors = () => {

    const userexhibitoridREF = useRef(null);
    const userexhibitorcompnameREF = useRef(null);
    const usereventnameREF = useRef(null);
    const userbusinesstypeREF = useRef(null);
    const userdomainnameREF = useRef(null);
    const usercompsizeREF = useRef(null);
    const usercompwebsiteREF = useRef(null);
    const userlinkedinREF = useRef(null);

    const navigate=useNavigate();


    const callExhibitorsAPI=async()=> {
        let payload={
          'userexhibitorsid':userexhibitoridREF.current.value,
          'userexhibitorscompname':userexhibitorcompnameREF.current.value,
          'usereventname':usereventnameREF.current.value,
          'userbusinesstype':userbusinesstypeREF.current.value,
          'userdomainname':userdomainnameREF.current.value,
          'usercompsize':usercompsizeREF.current.value,
          'usercompwebsite':usercompwebsiteREF.current.value,
          'userlinkedin':userlinkedinREF.current.value,   
        };
        const service_response=await axios({
            method: 'post',
            url: 'http://localhost:9000/testAPI/createxhibitors',
            data:payload,
          // config: { }
        })
        .then(function (response) {     
            console.log(response?.data);
            alert("New Exhibitors Added Successfully!..");      
        })
        .catch(function (response) {   
            console.log(response)
        });
        navigate('/Exhibitors')

      };


  return (
    <div>
        <header className="App-header">
        <h4>Exhibitors</h4>
        <label>Exhibitors ID:</label>
        <input ref={userexhibitoridREF} type="text" id="username"/>
        <label>Exhibitors Comp Name:</label>
        <input ref={userexhibitorcompnameREF} type="text" id="usertype"/>
        <label>Event Name-Housing/Gardening:</label>
        <input ref={usereventnameREF} type="text" id="userid"/> 
        <label>Business Type-Corp/comp:</label>
        <input ref={userbusinesstypeREF} type="text" id="usedomain"/>
        <label>Domain Name:</label>
        <input ref={userdomainnameREF} type="text" id="usersize"/>
        <label>Comp Size:</label>
        <input ref={usercompsizeREF} type="text" id="userweb"/>
        <label>Comp Website:</label>
        <input ref={usercompwebsiteREF} type="text" id="userurl"/>
        <label>Comp Linkedin URL:</label>
        <input ref={userlinkedinREF} type="text" id="userurl"/><br/>
        <button type="button" class="btn btn-secondary btn-sm " onClick={callExhibitorsAPI}>Submit</button><br/>
        </header>
      
    </div>
  )
}

export default Getexhibitors
