import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";


const ModalEvents =(props)=> {

  console.log("propsdata",props.data)
    
    const eventname = useRef(null);        /*(can have any name)No need to have corresponding DB table fields names */
    const startdate = useRef(null);      /*(can have any name)No need to have corresponding DB table fields names */
    const enddate = useRef(null);     /*(can have any name)No need to have corresponding DB table fields names */
    const format = useRef(null);   /*(can have any name)No need to have corresponding DB table fields names */
    const totaldays = useRef(null);     /*(can have any name)No need to have corresponding DB table fields names */
    const category = useRef(null);  /*(can have any name)No need to have corresponding DB table fields names */
    const compname = useRef(null); /*(can have any name)No need to have corresponding DB table fields names */
    const organiserid = useRef(null); /*(can have any name)No need to have corresponding DB table fields names */
    const website = useRef(null);        /*(can have any name)No need to have corresponding DB table fields names */
    const budget = useRef(null);        /*(can have any name)No need to have corresponding DB table fields names */
    const freeorpaid = useRef(null);        /*(can have any name)No need to have corresponding DB table fields names */
    const othervendors = useRef(null);        /*(can have any name)No need to have corresponding DB table fields names */



    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false)};
    const handleShow = () => setShow(true);


    useEffect(()=>{   
      handleShow();
    },[props]);    
/*------------------------------------User update Section-------------------------*/
const UpdateAPI=async()=> {
  let payload={
    'id':props.data.id,                          /* id fields must have corresponding DB table fields names */
    'eventname':((eventname.current.value=='')?eventname.current.placeholder:eventname.current.value),   
    'startdate':((startdate.current.value=='')?startdate.current.placeholder:startdate.current.value),   
    'enddate':((enddate.current.value=='')?enddate.current.placeholder:enddate.current.value),   
    'format':((format.current.value=='')?format.current.placeholder:format.current.value),   
    'totaldays':((totaldays.current.value=='')?totaldays.current.placeholder:totaldays.current.value),   
    'category':((category.current.value=='')?category.current.placeholder:category.current.value),   
    'compname':((compname.current.value=='')?compname.current.placeholder:compname.current.value),
    'organiserid':((organiserid.current.value=='')?organiserid.current.placeholder:organiserid.current.value),
    'website':((website.current.value=='')?website.current.placeholder:website.current.value),
    'budget':((budget.current.value=='')?budget.current.placeholder:budget.current.value),
    'freeorpaid':((freeorpaid.current.value=='')?freeorpaid.current.placeholder:freeorpaid.current.value),
    'othervendors':((othervendors.current.value=='')?othervendors.current.placeholder:othervendors.current.value),

  };  
  const service_response=await axios({
      method: 'post',
      url: 'http://localhost:9000/testAPI/updateEventsData',
      data:payload,
    // config: { }
  })
  .then(function (response) {    
     alert(response.data.message);    
  })
  .catch(function (response) {   
      console.log(response)
  });
};
const EventsUpdate=()=>{ UpdateAPI(); };
/*------------------------------------User update Section-------------------------*/
  return (
    <>
     <Modal show={show} onHide={handleClose} >

        <Modal.Header closeButton style={{backgroundColor:'yellow'}}>
          <Modal.Title>Update Details</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{backgroundColor:'#c7c7c7'}}>  
          <label>Event Name</label>
          <input type="text" id="eventname" ref={eventname} placeholder={props.data.eventname}/><br/>
          <label>Start Date</label>
          <input type="text" id="startdate" ref={startdate} placeholder={props.data.startdate}/><br/>
          <label>End Date</label>
          <input type="text" id="enddate" ref={enddate} placeholder={props.data.enddate}/><br/>
          <label>Format</label>
          <input type="text" id="format" ref={format} placeholder={props.data.format}/><br/>
          <label>Total Days</label>
          <input type="text" id="totaldays" ref={totaldays} placeholder={props.data.totaldays}/><br/>
          <label>Category</label>
          <input type="text" id="category" ref={category} placeholder={props.data.category}/><br/>
          <label>Comp Name</label>
          <input type="text" id="compname" ref={compname} placeholder={props.data.compname}/><br/>
          <label>Organiser ID</label>
          <input type="text" id="organiserid" ref={organiserid} placeholder={props.data.organiserid}/><br/>
          <label>Website</label>
          <input type="text" id="website" ref={website} placeholder={props.data.website}/><br/>
          <label>Budget</label>
          <input type="text" id="budget" ref={budget} placeholder={props.data.budget}/><br/>
          <label>Free or Paid</label>
          <input type="text" id="freeorpaid" ref={freeorpaid} placeholder={props.data.freeorpaid}/><br/>
          <label>Other Vendors</label>
          <input type="text" id="othervendors" ref={othervendors} placeholder={props.data.othervendors}/><br/>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={EventsUpdate} variant="secondary">
            Update
          </Button>         
        </Modal.Footer> 
      </Modal>
    </>
  );
}
export default ModalEvents;