import React from 'react'
import './App.css'
import axios from "axios";
import { useRef,useState,useEffect } from 'react';
import Getevents from './Getevents';
import DataTable from "react-data-table-component";


import ModalEvents from './ModalEvents';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Events =()=>{

// const EventsTableREF = useRef(null);
const [eventsInfo, seteventsInfo] = useState();
const [eventsSpecificInfo, setEventsSpecificInfo] = useState(null);
const [eventsUpdateModal, seteventsUpdateModal] = useState(null);

// -------------------------------------------------------GET METHOD-----------------------------------------------------------
const fetcheventsAPI=async()=> {
  let payload={};
  const service_response=await axios({
      method: 'post',
      url: 'http://localhost:9000/testAPI/geteventsData',
      data:payload,
    // config: { }
  })
  .then(function (response) {     
      console.log(response?.data?.data);
      seteventsInfo(response?.data?.data);
  })
  .catch(function (response) {   
      console.log(response)
  });
};

useEffect(() => {
  fetcheventsAPI();
},[]);

//------------------------------------------------------DELETE METHOD-----------------------------------------------------------

const deleteAPI=async(xyz)=> {
  let payload={
    'userID':xyz,
  };
  const service_response=await axios({
      method: 'post',
      url: 'http://localhost:9000/testAPI/deleteEventsData',
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

//------------------------------------------------------UPDATE METHOD-----------------------------------------------------------
const GetUpdateDataAPI=async(abc)=> {
  let payload={
    'eventsID':abc,
  };  
  const service_response=await axios({
      method: 'post',
      url: 'http://localhost:9000/testAPI/getParticularEventsData',
      data:payload,
      // config: { }
  })
  .then(function (response) {    
    setEventsSpecificInfo(response.data.data[0]);
  })
  .catch(function (response) {    
      console.log(response)
  });
};
/*--------------------------------------------------------------------------------------------------------------------*/
useEffect(() => {
  if(eventsSpecificInfo!=null)
  { 
    seteventsUpdateModal(eventsSpecificInfo);    
  }
},[eventsSpecificInfo]);
// --------------------------------------------------------------------------------------------------
const eventsUpdate = (e,id) =>{
  // let update_id=object.target.attributes['data-UpdateId'].value;
  GetUpdateDataAPI(id)
};

//-------------------------------to display the datas with corresponding table columns--------------------------------------------------------------------

const columns = [
  {
    id: 1,
    name: "Events Name",
    selector: (row) => row.eventname,
    sortable: true,
    reorder: true
  },
  {
    id: 2,
    name: "Start Date",
    selector: (row) => row.startdate,
    sortable: true,
    reorder: true
  },
  {
    id: 3,
    name: "End Date",
    selector: (row) => row.enddate,
    sortable: true,
    reorder: true
  },
  {
    id: 4,
    name: "Format(On/Offline)",
    selector: (row) => row.format,
    sortable: true,
    reorder: true
  },
  {
    id: 5,
    name: "Total Days",
    selector: (row) => row.totaldays,
    sortable: true,
    reorder: true
  },
  {
    id: 6,
    name: "Category",
    selector: (row) => row.category,
    sortable: true,
    reorder: true
  },
  {
    id: 7,
    name: "Company Name",
    selector: (row) => row.compname,
    sortable: true,
    reorder: true
  },
  {
    id: 7,
    name: "Organiser ID",
    selector: (row) => row.organiserid,
    sortable: true,
    reorder: true
  },
  {
    id: 7,
    name: "Website",
    selector: (row) => row.website,
    sortable: true,
    reorder: true
  },
  {
    id: 7,
    name: "Budget",
    selector: (row) => row.budget,
    sortable: true,
    reorder: true
  },
  {
    id: 7,
    name: "Charge-Free/Paid",
    selector: (row) => row.freeorpaid,
    sortable: true,
    reorder: true
  },
  {
    id: 7,
    name: "Other s/w vendors",
    selector: (row) => row.othervendors,
    sortable: true,
    reorder: true
  },
  {
    id: 8,
    name: "Actions",
    selector: (row) => (<>
    <button
      className="btn btn-outline-secondary btn-sm"
      onClick={(e) => eventsUpdate(e, row.id)}
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

const handleButtonClick = (e,id) =>{
alert(id)
};

return (       
         <>
         
        <div className="App">
        <DataTable
        title="Companies Events"
        columns={columns}
        data={eventsInfo}
        defaultSortFieldId={1}
        // sortIcon={<SortIcon />}
        pagination
        paginationComponentOptions={paginationComponentOptions}
        selectableRows
        />
        <button type='button' class="btn btn-outline-primary btn-sm"> <a class=' text-dark' href="/Getevents">Add New Events</a> </button>
        </div>

        <div>
            {(eventsUpdateModal!=null)?(
             <div className="container mt-3">
               <ModalEvents data={eventsSpecificInfo}/>
              </div>
            ):(null)}
            </div>

    </> 
  );
};

export default Events;

//------------------------------------------------------DELETE METHOD-----------------------------------------------------------

// const deleteAPI=async(delete_id)=> {
//   let payload={
//     'userID':delete_id,
//   };
//   const service_response=await axios({
//       method: 'post',
//       url: 'http://localhost:9000/testAPI/deleteEventsData',
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

//------------------------------------------------------UPDATE METHOD-----------------------------------------------------------
// const GetUpdateDataAPI=async(update_id)=> {
//   let payload={
//     'eventsID':update_id,
//   };  
//   const service_response=await axios({
//       method: 'post',
//       url: 'http://localhost:9000/testAPI/getParticularEventsData',
//       data:payload,
//       // config: { }
//   })
//   .then(function (response) {    
//     setEventsSpecificInfo(response.data.data[0]);
//   })
//   .catch(function (response) {    
//       console.log(response)
//   });
// };
// /*--------------------------------------------------------------------------------------------------------------------*/
// useEffect(() => {
//   if(eventsSpecificInfo!=null)
//   { 
//     seteventsUpdateModal(eventsSpecificInfo);    
//   }
// },[eventsSpecificInfo]);
// // --------------------------------------------------------------------------------------------------
// const eventsUpdate = (object) =>{
//   let update_id=object.target.attributes['data-UpdateId'].value;
//   GetUpdateDataAPI(update_id)
// };


// return (
//     <div className="App">
      {/* <header className="App-header">
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
        </header> */}
//         <div className='tab'>
//         <h5>Events</h5>
//         <button type='button' class="btn btn-warning btn-sm"><a class="btn btn-primary" href="/Getevents" type='button'>Add New Events</a></button>
//         <div class="table table-bordered">
//         <table class="container" border={2} ref={EventsTableREF}>
//           <thead>
//             <tr>
//             <th>Event Name</th>
//             <th>Event Start Date</th>
//             <th>Event End Date</th>
//             <th>Event Format-Virtual/live</th>
//             <th>Event Length in Days</th>
//             <th>Event Category-Seminor/Confer</th>
//             <th>Company Name</th>
//             <th>Organising Company ID</th>
//             <th>Event Website</th>
//             <th>Event Budget</th>
//             <th>Event Charge-Free/Paid</th>
//             <th>Other S/W Vendors</th>
//             <th>Update</th>
//             <th>Delete</th>    
//             </tr>
//           </thead>
          
//           <tbody>
//           {(eventsInfo!=null)?(
//               <>
//           {eventsInfo.map((data,index) =>
//               <>
//                 <tr key={data}>
//                  <td>{data.eventname}</td>
//                  <td>{data.startdate}</td>
//                  <td>{data.enddate}</td>
//                  <td>{data.format}</td>
//                  <td>{data.totaldays}</td>
//                  <td>{data.category}</td>
//                  <td>{data.compname}</td>
//                  <td>{data.organiserid}</td>
//                  <td>{data.website}</td>
//                  <td>{data.budget}</td>
//                  <td>{data.freeorpaid}</td>
//                  <td>{data.othervendors}</td>
//                  <td><button type='button' class="btn btn-success btn-sm" data-UpdateId={data.id} onClick={eventsUpdate}>Update</button></td>
//                  <td><button type='button' class="btn btn-danger btn-sm" data-DeleteId={data.id} onClick={Delete_fn}>DELETE</button></td>
//                 </tr>         
//               </>
//               )}               
//               </>
//               ):(null)} 
//               </tbody>
//           </table>
//           </div>
//           </div>
//           <div>
//             {(eventsUpdateModal!=null)?(
//               <div className="container mt-3">
//                 <ModalEvents data={eventsSpecificInfo}/>
//               </div>
//             ):(null)}
//             </div>
//     </div>
//   );
// }
// export default Events;