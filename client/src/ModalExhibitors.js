import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

const ModalExhibitors =(props)=> {

  console.log("propsdata",props.data)
    
    const exid = useRef(null);        /*(can have any name)No need to have corresponding DB table fields names */
    const compname = useRef(null);      /*(can have any name)No need to have corresponding DB table fields names */
    const eventname = useRef(null);     /*(can have any name)No need to have corresponding DB table fields names */
    const businesstype = useRef(null);   /*(can have any name)No need to have corresponding DB table fields names */
    const domainname = useRef(null);     /*(can have any name)No need to have corresponding DB table fields names */
    const compsize = useRef(null);  /*(can have any name)No need to have corresponding DB table fields names */
    const compwebsite = useRef(null); /*(can have any name)No need to have corresponding DB table fields names */
    const linkedin = useRef(null); /*(can have any name)No need to have corresponding DB table fields names */


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
    'exid':((exid.current.value=='')?exid.current.placeholder:exid.current.value),   
    'compname':((compname.current.value=='')?compname.current.placeholder:compname.current.value),   
    'eventname':((eventname.current.value=='')?eventname.current.placeholder:eventname.current.value),   
    'businesstype':((businesstype.current.value=='')?businesstype.current.placeholder:businesstype.current.value),   
    'domainname':((domainname.current.value=='')?domainname.current.placeholder:domainname.current.value),   
    'compsize':((compsize.current.value=='')?compsize.current.placeholder:compsize.current.value),   
    'compwebsite':((compwebsite.current.value=='')?compwebsite.current.placeholder:compwebsite.current.value),
    'linkedin':((linkedin.current.value=='')?linkedin.current.placeholder:linkedin.current.value)

  };  
  const service_response=await axios({
      method: 'post',
      url: 'http://localhost:9000/testAPI/updateExhibitorsData',
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
const ExhibitorsUpdate=()=>{ UpdateAPI(); };
/*------------------------------------User update Section-------------------------*/
  return (
    <>
     <Modal show={show} onHide={handleClose} >

        <Modal.Header closeButton style={{backgroundColor:'yellow'}}>
          <Modal.Title>Update Details</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{backgroundColor:'#c7c7c7'}}>  
          <label>Exhibi ID</label>
          <input type="text" id="exid" ref={exid} placeholder={props.data.exid}/><br/>
          <label>Comp Name</label>
          <input type="text" id="compname" ref={compname} placeholder={props.data.compname}/><br/>
          <label>Event Name</label>
          <input type="text" id="eventname" ref={eventname} placeholder={props.data.eventname}/><br/>
          <label>Business Type</label>
          <input type="text" id="businesstype" ref={businesstype} placeholder={props.data.businesstype}/><br/>
          <label>Domain Name</label>
          <input type="text" id="domainname" ref={domainname} placeholder={props.data.domainname}/><br/>
          <label>Comp Size</label>
          <input type="text" id="compsize" ref={compsize} placeholder={props.data.compsize}/><br/>
          <label>Website</label>
          <input type="text" id="compwebsite" ref={compwebsite} placeholder={props.data.compwebsite}/><br/>
          <label>LinkedIn</label>
          <input type="text" id="linkedin" ref={linkedin} placeholder={props.data.linkedin}/><br/> 
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={ExhibitorsUpdate} variant="secondary">
            Update
          </Button>         
        </Modal.Footer> 
      </Modal>
    </>
  );
}
export default ModalExhibitors;