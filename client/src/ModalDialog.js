import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";


const ModalDialog =(props)=> {

  console.log("propsdata",props.data)
    
    const comp_id = useRef(null);        /*(can have any name)No need to have corresponding DB table fields names */
    const compname = useRef(null);      /*(can have any name)No need to have corresponding DB table fields names */
    const comp_type = useRef(null);     /*(can have any name)No need to have corresponding DB table fields names */
    const domain_name = useRef(null);   /*(can have any name)No need to have corresponding DB table fields names */
    const comp_size = useRef(null);     /*(can have any name)No need to have corresponding DB table fields names */
    const comp_website = useRef(null);  /*(can have any name)No need to have corresponding DB table fields names */
    const comp_linkedin = useRef(null); /*(can have any name)No need to have corresponding DB table fields names */
   

    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false)};
    const handleShow = () => setShow(true);

    useEffect(()=>{   
      handleShow();
    },[props]);    
/*------------------------------------User update Section-------------------------*/
const UpdateAPI=async()=> {
  let payload={
    'id':props.data.id,     /*This id is - WHERE id='+req.body.id+''; */                     /* id fields must have corresponding DB table fields names */
    'comp_id':((comp_id.current.value=='')?comp_id.current.placeholder:comp_id.current.value),   
    'compname':((compname.current.value=='')?compname.current.placeholder:compname.current.value),   
    'comp_type':((comp_type.current.value=='')?comp_type.current.placeholder:comp_type.current.value),   
    'domain_name':((domain_name.current.value=='')?domain_name.current.placeholder:domain_name.current.value),   
    'comp_size':((comp_size.current.value=='')?comp_size.current.placeholder:comp_size.current.value),   
    'comp_website':((comp_website.current.value=='')?comp_website.current.placeholder:comp_website.current.value),   
    'comp_linkedin':((comp_linkedin.current.value=='')?comp_linkedin.current.placeholder:comp_linkedin.current.value)
  };  
  const service_response=await axios({
      method: 'post',
      url: 'http://localhost:9000/testAPI/updateNameData',
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
const NameUpdate=()=>{ UpdateAPI(); };
/*------------------------------------User update Section-------------------------*/
  return (
    <>
     <Modal show={show} onHide={handleClose} >

        <Modal.Header closeButton style={{backgroundColor:'yellow'}}>
          <Modal.Title>Update Details</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{backgroundColor:'#c7c7c7'}}>  
          <label>Comp ID</label>
          <input type="text" id="comp_id" ref={comp_id} placeholder={props.data.compid}/><br/>
          <label>Comp Name</label>
          <input type="text" id="compname" ref={compname} placeholder={props.data.compname}/><br/>
          <label>Comp type</label>
          <input type="text" id="comp_type" ref={comp_type} placeholder={props.data.comp_type}/><br/>
          <label>Domain Name</label>
          <input type="text" id="domain_name" ref={domain_name} placeholder={props.data.domain_name}/><br/>
          <label>Comp Size</label>
          <input type="text" id="comp_size" ref={comp_size} placeholder={props.data.comp_size}/><br/>
          <label>Comp Website</label>
          <input type="text" id="comp_website" ref={comp_website} placeholder={props.data.comp_website}/><br/>
          <label>LinkedIn</label>
          <input type="text" id="comp_linkedin" ref={comp_linkedin} placeholder={props.data.comp_linkedin}/><br/> 
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={NameUpdate} variant="secondary">
            Update
          </Button>         
        </Modal.Footer> 
      </Modal>
    </>
  );
}
export default ModalDialog