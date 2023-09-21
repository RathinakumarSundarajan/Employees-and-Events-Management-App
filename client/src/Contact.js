import React from 'react'
import './App.css'
import axios from "axios";
import { useRef,useState,useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Getcontact from './Getcontact';
import DataTable from "react-data-table-component";

import ModalContact from './ModalContact';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Contact =()=>{

// const ContactTableREF = useRef(null);
const [contactInfo, setContactInfo] = useState();
const [contactSpecificInfo, setContactSpecificInfo] = useState(null);
const [contactUpdateModal, setcontactUpdateModal] = useState(null);


// -----------------------------------------------------GET METHOD-----------------------------------------------------//
const fetchContctAPI=async()=> {
  let payload={};
  const service_response=await axios({
      method: 'post',
      url: 'http://localhost:9000/testAPI/getcontactData',
      data:payload,
    // config: { }
  })
  .then(function (response) {     
      console.log(response?.data?.data);
      setContactInfo(response?.data?.data);
  })
  .catch(function (response) {   
      console.log(response)
  });
};

useEffect(() => {
  fetchContctAPI();
},[]);

// ---------------------------------------------DELETE METHOD--------------------------------------------------------------

const deleteAPI=async(abc)=> {
  let payload={
    'userID':abc,
  };
  const service_response=await axios({
      method: 'post',
      url: 'http://localhost:9000/testAPI/deleteContactData',
      data:payload,
    // config: { }
  })
  .then(function (response) {  
    alert("Data Deleted Successfully!..");
   })
  .catch(function (response) {   
      console.log(response)
  });  
};
const Delete_fn = (e,id) =>{
  // let delete_id=object.target.attributes['data-DeleteId'].value;
  deleteAPI(id);
  e.target.parentElement.parentElement.parentElement.remove();
};

// ------------------------------------------------UPDATE METHOD-------------------------------------------------------//
const GetUpdateDataAPI=async(xyz)=> {
  let payload={
    'contactID':xyz,
  };  
  const service_response=await axios({
      method: 'post',
      url: 'http://localhost:9000/testAPI/getParticularContactData',
      data:payload,
      // config: { }
  })
  .then(function (response) {    
    setContactSpecificInfo(response.data.data[0]);
  })
  .catch(function (response) {    
      console.log(response)
  });
};
/*--------------------------------------------------------------------------------------------------------------------*/

useEffect(() => {
  if(contactSpecificInfo!=null)
  { 
    setcontactUpdateModal(contactSpecificInfo);    
  }
},[contactSpecificInfo]);

/*--------------------------------------------------------------------------------------------------------------------*/
const contactUpdate = (e,id) =>{
  // let update_id=object.target.attributes['date-UpdateId'].value;
  GetUpdateDataAPI(id)
};

//-------------------------------to display the datas with corresponding table columns--------------------------------------------------------------------

const columns = [
  {
    id: 1,
    name: "Contact ID",
    selector: (row) => row.contid,
    sortable: true,
    reorder: true
  },
  {
    id: 2,
    name: "Company Name",
    selector: (row) => row.comp_name,
    sortable: true,
    reorder: true
  },
  {
    id: 3,
    name: "First Name",
    selector: (row) => row.firstname,
    sortable: true,
    reorder: true
  },
  {
    id: 4,
    name: "Last Name",
    selector: (row) => row.lastname,
    sortable: true,
    reorder: true
  },
  {
    id: 5,
    name: "Designation",
    selector: (row) => row.designation,
    sortable: true,
    reorder: true
  },
  {
    id: 6,
    name: "Office Mail",
    selector: (row) => row.officemail,
    sortable: true,
    reorder: true
  },
  {
    id: 7,
    name: "Personal Mail",
    selector: (row) => row.personalmail,
    sortable: true,
    reorder: true
  },
  {
    id: 7,
    name: "Country",
    selector: (row) => row.country,
    sortable: true,
    reorder: true
  },
  {
    id: 7,
    name: "Office Number",
    selector: (row) => row.officenumber,
    sortable: true,
    reorder: true
  },
  {
    id: 7,
    name: "Personal Number",
    selector: (row) => row.personalnumber,
    sortable: true,
    reorder: true
  },
  {
    id: 7,
    name: "Linkedin URL",
    selector: (row) => row.linkedin,
    sortable: true,
    reorder: true
  },
  {
    id: 7,
    name: "Current Company",
    selector: (row) => row.currentcomp,
    sortable: true,
    reorder: true
  },
  {
    id: 7,
    name: "Past Company",
    selector: (row) => row.pastcomp,
    sortable: true,
    reorder: true
  },
  {
    id: 8,
    name: "Actions",
    selector: (row) => (<>
    <button
      className="btn btn-outline-secondary btn-sm"
      onClick={(e) => contactUpdate(e, row.id)}
  >
      Edit
  </button>

<button
className="btn btn-outline-secondary btn-sm" 
onClick={(e) => Delete_fn(e, row.id)}
>
Delete
</button>
  </>),
    sortable: true,
    right: true,
    reorder: true
  }
];

const paginationComponentOptions = {
  selectAllRowsItem: true,
  selectAllRowsItemText: "ALL"
};

// const handleButtonClick = (e,id) =>{
// alert(id)
// };

return (       
         <>
         
        <div className="App">
        <DataTable
        title="Companies Contacts"
        columns={columns}
        data={contactInfo}
        defaultSortFieldId={1}
        // sortIcon={<SortIcon />}
        pagination
        paginationComponentOptions={paginationComponentOptions}
        selectableRows
        />
        <button type='button' class="btn btn-outline-primary btn-sm"> <a class=' text-dark' href="/Getcontact">Add New Contact</a> </button>
        </div>

        {(contactUpdateModal!=null)?(
              <div className="container mt-3">
                <ModalContact data={contactSpecificInfo}/>
              </div>
            ):(null)}

    </> 
  );
};

export default Contact;

// ---------------------------------------------DELETE METHOD--------------------------------------------------------------

// const deleteAPI=async(delete_id)=> {
//   let payload={
//     'userID':delete_id,
//   };
//   const service_response=await axios({
//       method: 'post',
//       url: 'http://localhost:9000/testAPI/deleteContactData',
//       data:payload,
//     // config: { }
//   })
//   .then(function (response) {  
//     alert("Data Deleted Successfully!..");
//    })
//   .catch(function (response) {   
//       console.log(response)
//   });  
// };
// const Delete_fn = (object) =>{
//   let delete_id=object.target.attributes['data-DeleteId'].value;
//   deleteAPI(delete_id);
//   object.target.parentElement.parentElement.remove();
// };

// ------------------------------------------------UPDATE METHOD-------------------------------------------------------//
// const GetUpdateDataAPI=async(update_id)=> {
//   let payload={
//     'contactID':update_id,
//   };  
//   const service_response=await axios({
//       method: 'post',
//       url: 'http://localhost:9000/testAPI/getParticularContactData',
//       data:payload,
//       // config: { }
//   })
//   .then(function (response) {    
//     setContactSpecificInfo(response.data.data[0]);
//   })
//   .catch(function (response) {    
//       console.log(response)
//   });
// };
// /*--------------------------------------------------------------------------------------------------------------------*/
// useEffect(() => {
//   if(contactSpecificInfo!=null)
//   { 
//     setcontactUpdateModal(contactSpecificInfo);    
//   }
// },[contactSpecificInfo]);

// /*--------------------------------------------------------------------------------------------------------------------*/
// const contactUpdate = (object) =>{
//   let update_id=object.target.attributes['date-UpdateId'].value;
//   GetUpdateDataAPI(update_id)
// };


// return (
    
//     <div className ="App">
      {/* <header className ="App-header">
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
        </header> */}
                {/* <a class="btn btn-primary" href="#" role="button">Link</a> */}
        {/* <div className='tab'>
        <h5>Contacts</h5>
        <button type='button' class="btn btn-warning btn-sm justify-content-end "><a class="btn btn-primary" href="/Getcontact" role="button">Add New Contact</a></button>
        <div class="table table-bordered">
        <table class="container"  border={2}  ref={ContactTableREF}>
          <thead>
            <tr>
            <th>Contact ID</th>
            <th>Company Name</th>
            <th>Contact First Name</th>
            <th>Contact Last Name</th>
            <th>Designation</th>
            <th>Office e-mail Address</th>
            <th>Personal e-mail Address</th>
            <th>Country</th>
            <th>Office Phone Number</th>
            <th>Personal Phone Number</th>
            <th>Linkdin URL</th>
            <th>Current Company</th>
            <th>Past Company</th>
            <th>Update</th>
            <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {(contactInfo!=null)?(
              <>
          {contactInfo.map((data,index) =>
              <>
                <tr key={data}>
                 <td>{data.contid}</td>
                 <td>{data.comp_name}</td>
                 <td>{data.firstname}</td>
                 <td>{data.lastname}</td>
                 <td>{data.designation}</td>
                 <td>{data.officemail}</td>
                 <td>{data.personalmail}</td>
                 <td>{data.country}</td>
                 <td>{data.officenumber}</td>
                 <td>{data.personalnumber}</td>
                 <td>{data.linkedin}</td>
                 <td>{data.currentcomp}</td>
                 <td>{data.pastcomp}</td>
                 <td><button type='button' class="btn btn-success btn-sm" date-UpdateId={data.id} onClick={contactUpdate}>Update</button></td>
                 <td><button type='button' class="btn btn-danger btn-sm" data-DeleteId={data.id} onClick={Delete_fn}>DELETE</button></td>
                </tr>         
              </>
              )}               
              </>
              ):(null)}
              </tbody>
          </table>
          </div>
          </div>
            {(contactUpdateModal!=null)?(
              <div className="container mt-3">
                <ModalContact data={contactSpecificInfo}/>
              </div>
            ):(null)}
            
    </div>
  );
}
export default Contact; */}