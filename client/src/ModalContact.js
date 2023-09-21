import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

const ModalContact =(props)=> {

  console.log("propsdata",props.data)
    
    const contid = useRef(null);        /*(can have any name)No need to have corresponding DB table fields names */
    const comp_name = useRef(null);      /*(can have any name)No need to have corresponding DB table fields names */
    const firstname = useRef(null);     /*(can have any name)No need to have corresponding DB table fields names */
    const lastname = useRef(null);   /*(can have any name)No need to have corresponding DB table fields names */
    const designation = useRef(null);     /*(can have any name)No need to have corresponding DB table fields names */
    const officemail = useRef(null);  /*(can have any name)No need to have corresponding DB table fields names */
    const personalmail = useRef(null); /*(can have any name)No need to have corresponding DB table fields names */
    const country = useRef(null); /*(can have any name)No need to have corresponding DB table fields names */
    const officenumber = useRef(null);        /*(can have any name)No need to have corresponding DB table fields names */
    const personalnumber = useRef(null);        /*(can have any name)No need to have corresponding DB table fields names */
    const linkedin = useRef(null);        /*(can have any name)No need to have corresponding DB table fields names */
    const currentcomp = useRef(null);        /*(can have any name)No need to have corresponding DB table fields names */
    const pastcomp = useRef(null);        /*(can have any name)No need to have corresponding DB table fields names */



    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false)};
    const handleShow = () => setShow(true);

    useEffect(()=>{   
      handleShow();
    },[props]);    
/*------------------------------------User update Section-------------------------*/
const UpdateAPI=async()=> {
  let payload={
    'id':props.data.id,   
     /* id fields must have corresponding DB table fields names */
    'contid':((contid.current.value=='')?contid.current.placeholder:contid.current.value),   
    'comp_name':((comp_name.current.value=='')?comp_name.current.placeholder:comp_name.current.value),   
    'firstname':((firstname.current.value=='')?firstname.current.placeholder:firstname.current.value),   
    'lastname':((lastname.current.value=='')?lastname.current.placeholder:lastname.current.value),   
    'designation':((designation.current.value=='')?designation.current.placeholder:designation.current.value),   
    'officemail':((officemail.current.value=='')?officemail.current.placeholder:officemail.current.value),   
    'personalmail':((personalmail.current.value=='')?personalmail.current.placeholder:personalmail.current.value),
    'country':((country.current.value=='')?country.current.placeholder:country.current.value),
    'officenumber':((officenumber.current.value=='')?officenumber.current.placeholder:officenumber.current.value),
    'personalnumber':((personalnumber.current.value=='')?personalnumber.current.placeholder:personalnumber.current.value),
    'linkedin':((linkedin.current.value=='')?linkedin.current.placeholder:linkedin.current.value),
    'currentcomp':((currentcomp.current.value=='')?currentcomp.current.placeholder:currentcomp.current.value),
    'pastcomp':((pastcomp.current.value=='')?pastcomp.current.placeholder:pastcomp.current.value),

  };  
  const service_response=await axios({
      method: 'post',
      url: 'http://localhost:9000/testAPI/updateContactData',
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
const ContactUpdate=()=>{ UpdateAPI(); };
/*------------------------------------User update Section-------------------------*/
  return (
    <>
     <Modal show={show} onHide={handleClose} >

        <Modal.Header closeButton style={{backgroundColor:'yellow'}}>
          <Modal.Title>Update Details</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{backgroundColor:'#c7c7c7'}}>  
          <label>Contact ID</label>
          <input type="text" id="contid" ref={contid} placeholder={props.data.contid}/><br/>
          <label>Comp Name</label>
          <input type="text" id="comp_name" ref={comp_name} placeholder={props.data.comp_name}/><br/>
          <label>First Name</label>
          <input type="text" id="firstname" ref={firstname} placeholder={props.data.firstname}/><br/>
          <label>Last Name</label>
          <input type="text" id="lastname" ref={lastname} placeholder={props.data.lastname}/><br/>
          <label>Designation</label>
          <input type="text" id="designation" ref={designation} placeholder={props.data.designation}/><br/>
          <label>Office email</label>
          <input type="text" id="officemail" ref={officemail} placeholder={props.data.officemail}/><br/>
          <label>Personal email</label>
          <input type="text" id="personalmail" ref={personalmail} placeholder={props.data.personalmail}/><br/>
          <label>Country</label>
          <input type="text" id="country" ref={country} placeholder={props.data.country}/><br/>
          <label>Office Number</label>
          <input type="text" id="officenumber" ref={officenumber} placeholder={props.data.officenumber}/><br/>
          <label>Personal Number</label>
          <input type="text" id="personalnumber" ref={personalnumber} placeholder={props.data.personalnumber}/><br/>
          <label>LinkedIn</label>
          <input type="text" id="linkedin" ref={linkedin} placeholder={props.data.linkedin}/><br/>
          <label>Current Company</label>
          <input type="text" id="currentcomp" ref={currentcomp} placeholder={props.data.currentcomp}/><br/>
          <label>Past Company</label>
          <input type="text" id="pastcomp" ref={pastcomp} placeholder={props.data.pastcomp}/><br/> 
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={ContactUpdate} variant="secondary">
            Update
          </Button>         
        </Modal.Footer> 
      </Modal>
    </>
  );
}
export default ModalContact;