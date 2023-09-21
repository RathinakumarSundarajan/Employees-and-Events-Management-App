import React from 'react'
import './App.css'
import axios from "axios";
import { useRef,useState,useEffect } from 'react';
import DataTable from "react-data-table-component";


//MODAL DIALOG
import ModalExhibitors from './ModalExhibitors';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Exhibitors =()=>{

// const ExhibitorsTableREF = useRef(null);

const [exhibitInfo,setexhibitInfo] = useState();
const [exhibitSpecificInfo,setexhibitSpecificInfo] = useState(null);
const [updateExhibitorsModal, setupdateExhibitorsModal] = useState(null);


// ------------------------------------------------------GET METHOD------------------------------------------------------------

const fetexhibitAPI=async()=> {
  let payload={};
  const service_response=await axios({
      method: 'post',
      url: 'http://localhost:9000/testAPI/getexhibitData',
      data:payload,
    // config: { }
  })
  .then(function (response) {     
      console.log(response?.data?.data);
      setexhibitInfo(response?.data?.data);
  })
  .catch(function (response) {   
      console.log(response)
  });
};

useEffect(() => {
  fetexhibitAPI();
},[]);

// --------------------------------------------------DELETE METHOD------------------------------------------------------------------

const deleteAPI=async(xyz)=> {
  let payload={
    'userID':xyz,
  };
  const service_response=await axios({
      method: 'post',
      url: 'http://localhost:9000/testAPI/deleteExhibitorsData',
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
  // let delete_id=object.target.attributes['data-deleteId'].value;
  deleteAPI(id);
  e.target.parentElement.parentElement.parentElement.remove();
};

// -----------------------------------------------UPDATE METHOD-----------------------------------------------//
/*---------------------------------------GetData from DB for Update----------------------------------*/
const GetUpdateDataAPI=async(abc)=> {
  let payload={
    'exhibitorsID':abc,
  };  
  const service_response=await axios({
      method: 'post',
      url: 'http://localhost:9000/testAPI/getParticularExhibitorsData',
      data:payload,
      // config: { }
  })
  .then(function (response) {    
    setexhibitSpecificInfo(response.data.data[0]);
  })
  .catch(function (response) {    
      console.log(response)
  });
};

// /*-----------------------------------------------------------------------------------------------------------------*/

useEffect(() => {
  if(exhibitSpecificInfo!=null)
  { 
    setupdateExhibitorsModal(exhibitSpecificInfo);    
  }
},[exhibitSpecificInfo]);

 /*------------------------------------------Mapping the corresponding DB ID------------------------------------- */

const ExhibitorsUpdate = (e,id) =>{
  // let update_id=object.target.attributes['data-updateId'].value;
  GetUpdateDataAPI(id); 
};

//-------------------------------to display the datas with corresponding table columns--------------------------------------------------------------------

const columns = [
  {
    id: 1,
    name: "Exhibitors ID",
    selector: (row) => row.exid,
    sortable: true,
    reorder: true
  },
  {
    id: 2,
    name: "Company Name",
    selector: (row) => row.compname,
    sortable: true,
    reorder: true
  },
  {
    id: 3,
    name: "Event Name",
    selector: (row) => row.eventname,
    sortable: true,
    reorder: true
  },
  {
    id: 4,
    name: "Bussiness Type",
    selector: (row) => row.businesstype,
    sortable: true,
    reorder: true
  },
  {
    id: 5,
    name: "Domain Name",
    selector: (row) => row.domainname,
    sortable: true,
    reorder: true
  },
  {
    id: 6,
    name: "Company Size",
    selector: (row) => row.compsize,
    sortable: true,
    reorder: true
  },
  {
    id: 7,
    name: "Website",
    selector: (row) => row.compwebsite,
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
    id: 8,
    name: "Actions",
    selector: (row) => (<>
    <button
      className="btn btn-outline-secondary btn-sm"
      onClick={(e) => ExhibitorsUpdate(e, row.id)}
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
        title="Exhibitors"
        columns={columns}
        data={exhibitInfo}
        defaultSortFieldId={1}
        // sortIcon={<SortIcon />}
        pagination
        paginationComponentOptions={paginationComponentOptions}
        selectableRows
        />
        <button type='button' class="btn btn-outline-primary btn-sm" ><a  class=' text-dark' href="/Getexhibitors">Add New Exhibitors</a></button>
        </div>

        <div>
          {(updateExhibitorsModal!=null)?(
           <div className="container mt-3">
           <ModalExhibitors data={exhibitSpecificInfo}/>
           </div>
           ):(null)}
        </div>

    </> 
  );
};

export default Exhibitors;


// return (
//     <div className="App">
      {/* <header className="App-header">
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
        </header> */}
//          <div className='tab'>
//           <h5>Exhibitors</h5>
//           <button type='button' class="btn btn-warning btn-sm"><a class="btn btn-primary" href="/Getexhibitors" type='button'>Add New Exhibitors</a></button>
//         <div class="table table-bordered">
//         <table class="container" border={2} ref={ExhibitorsTableREF} >
//           <thead>
//             <tr>
//             <th>Exhibitors ID</th>
//             <th>Exhibitors Comp Name</th>
//             <th>Event Name-Housing/Gardening</th>
//             <th>Business Type-Corp/comp</th>
//             <th>Domain Name</th>
//             <th>Comp Size</th>
//             <th>Comp Website</th>
//             <th>Comp Linkedin URL</th>
//             <th>Update</th> 
//             <th>Delete</th>            
//             </tr>
//           </thead>

//           <tbody>
//           {(exhibitInfo!=null)?(
//               <>
//           {exhibitInfo.map((data,index) =>
//               <>
//                 <tr key={data}>
//                  <td>{data.exid}</td>
//                  <td>{data.compname}</td>
//                  <td>{data.eventname}</td>
//                  <td>{data.businesstype}</td>
//                  <td>{data.domainname}</td>
//                  <td>{data.compsize}</td>
//                  <td>{data.compwebsite}</td>
//                  <td>{data.linkedin}</td>
//                  <td><button type='button' class="btn btn-success btn-sm" data-updateId={data.id} onClick={ExhibitorsUpdate}>Update</button></td>
//                  <td><button type='button' class="btn btn-danger btn-sm" data-deleteId={data.id} onClick={Delete_fn}>DELETE</button></td>
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
//             {(updateExhibitorsModal!=null)?(
//               <div className="container mt-3">
//                 <ModalExhibitors data={exhibitSpecificInfo}/>
//               </div>
//             ):(null)}
//             </div>
//     </div>
//   );
// }
// export default Exhibitors;
