import './App.css'
import axios from "axios";
import { useRef,useEffect, useState } from 'react';
import React from 'react'
import { useNavigate } from 'react-router-dom';



const Getevents = () => {
    
    const usereventnameREF = useRef(null);
    const usereventstartdateREF = useRef(null);
    const usereventenddateREF = useRef(null);
    const usereventformatREF = useRef(null);
    const usereventlengthREF = useRef(null);
    const usereventcategoryREF = useRef(null);
    const usercompanynameREF = useRef(null);
    const userorganisingcompidREF = useRef(null);
    const usereventwebsiteREF = useRef(null);
    const usereventbudgetREF = useRef(null);
    const usereventchargeREF = useRef(null);
    const userothervendorsREF = useRef(null);

    const navigate=useNavigate();


    const callEventsAPI=async()=> {
        let payload={
          'usereventname':usereventnameREF.current.value,
          'usereventstartdate':usereventstartdateREF.current.value,
          'usereventenddate':usereventenddateREF.current.value,
          'usereventformat':usereventformatREF.current.value,
          'usereventlength':usereventlengthREF.current.value,
          'usereventcategory':usereventcategoryREF.current.value,
          'usercompanyname':usercompanynameREF.current.value,
          'userorganisingcompid':userorganisingcompidREF.current.value,
          'usereventwebsite':usereventwebsiteREF.current.value,
          'usereventbudget':usereventbudgetREF.current.value,
          'usereventcharge':usereventchargeREF.current.value,
          'userothervendors':userothervendorsREF.current.value,
          
        };
        const service_response=await axios({
            method: 'post',
            url: 'http://localhost:9000/testAPI/createevents',
            data:payload,
          // config: { }
        })
        .then(function (response) {     
            console.log(response?.data);
            alert("New Events Added Successfully!..");
        })
        .catch(function (response) {   
            console.log(response)
        });
        navigate('/Events')

      };
  return (
    <div>
      <header className="App-header">
        <h4>Events</h4>
        <label>Event Name:</label>
        <input ref={usereventnameREF} type="text" id="userid"/> 
        <label>Event Start Date:</label>
        <input ref={usereventstartdateREF} type="text" id="username"/>
        <label>Event End Date:</label>
        <input ref={usereventenddateREF} type="text" id="usertype"/>
        <label>Event Format-Virtual/live:</label>
        <input ref={usereventformatREF} type="text" id="usedomain"/>
        <label>Event Length in Days:</label>
        <input ref={usereventlengthREF} type="text" id="usersize"/>
        <label>Event Category-Seminor/Confer:</label>
        <input ref={usereventcategoryREF} type="text" id="userweb"/>
        <label>Company Name:</label>
        <input ref={usercompanynameREF} type="text" id="userurl"/>
        <label>Organising Company ID:</label>
        <input ref={userorganisingcompidREF} type="text" id="userurl"/>
        <label>Event Website:</label>
        <input ref={usereventwebsiteREF} type="text" id="userurl"/>
        <label>Event Budget:</label>
        <input ref={usereventbudgetREF} type="text" id="userurl"/>
        <label>Event Charge-Free/Paid:</label>
        <input ref={usereventchargeREF} type="text" id="userurl"/>
        <label>Other S/W Vendors:</label>
        <input ref={userothervendorsREF} type="text" id="userurl"/><br/>

        <button type="button" class="btn btn-secondary btn-sm " onClick={callEventsAPI}>Submit</button><br/>
        </header>
      
    </div>
  )
}

export default Getevents
