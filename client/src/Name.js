import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css'
import axios from "axios";
import { useRef,useEffect, useState } from 'react';
import { Pagination, Table } from 'react-bootstrap';
import Getname from './Getname';
// import NameTable from './NameTable';
import DataTable from "react-data-table-component";
// import SortIcon from "@material-ui/icons/ArrowDownward";
import movies from "./movies";

//MODAL DIALOG
import ModalDialog from './ModalDialog';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Name=()=>{

// const NameTableREF = useRef(null);       /*--------for delete through table-------------- */
  const [nameInfo, setNameInfo] = useState();                /*------for GETING data by MAP through table------ */
  const [specificNameInfo, setSpecificNameInfo] = useState(null); /*------for GETING data for updation-------- */
  const [updateModal, setUpdateModal] = useState(null);

  

// ----------------------------------------------------GET METHOD-----------------------------------------------------------

const fetchNameAPI=async()=> {
  let payload={};
  const service_response=await axios({
      method: 'post',
      url: 'http://localhost:9000/testAPI/getData',
      data:payload,
    // config: { }
  })
  .then(function (response) {     
      console.log(response?.data?.data);
      setNameInfo(response?.data?.data);
      console.log(setNameInfo)
      
  })
  .catch(function (response) {   
      console.log(response)
  });
};
useEffect(() => {
  fetchNameAPI();                   
},[]);

//--------------------------------------------------------Delete Method--------------------------------------------------------
const deleteAPI=async(xyz)=> {
  let payload={
    'userID':xyz,
  };
  const service_response=await axios({
      method: 'post',
      url: 'http://localhost:9000/testAPI/deleteNameData',
      data:payload,
  })
  .then(function (response) {  
    alert("Data Deleted Successfully!..");
   })
  .catch(function (response) {   
      console.log(response)
  });  
};
const Delete_fn = (e,id) =>{
  deleteAPI(id);
  e.target.parentElement.parentElement.parentElement.remove();
};
// ---------------------------------------------------UPDATE METHOD-------------------------------------------------------------//

/*----------------------------------------------GetData from DB for Update------------------------------------------------*/
const GetUpdateDataAPI=async(abc)=> {
  let payload={
    'nameID':abc,
  };  
  const service_response=await axios({
      method: 'post',
      url: 'http://localhost:9000/testAPI/getParticularNameData',
      data:payload,
      // config: { }
  })
  .then(function (response) {    
    setSpecificNameInfo(response.data.data[0]);
    console.log(setSpecificNameInfo)
  })
  .catch(function (response) {    
      console.log(response)
  });
};
/*---------------------------------------GetData from DB for Update---------------------------------------*/
useEffect(() => {
  if(specificNameInfo!=null)
  { 
    setUpdateModal(specificNameInfo);    
  }
},[specificNameInfo]);

/*------------------------------------------Mapping the corresponding DB ID------------------------------------- */
const UserUpdate = (e,id) => {
  // let update_id=object.target.attributes['data-UpdateId'].value;
  GetUpdateDataAPI(id); 
};

//-------------------------------to display the datas with corresponding table columns--------------------------------------------------------------------

const columns = [
  {
    id: 1,
    name: "Company ID",
    selector: (row) => row.comp_id,
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
    name: "Business Type",
    selector: (row) => row.comp_type,
    sortable: true,
    reorder: true
  },
  {
    id: 4,
    name: "Domain Name",
    selector: (row) => row.domain_name,
    sortable: true,
    reorder: true
  },
  {
    id: 5,
    name: "Employers Size",
    selector: (row) => row.comp_size,
    sortable: true,
    reorder: true
  },
  {
    id: 6,
    name: "Website",
    selector: (row) => row.comp_website,
    sortable: true,
    reorder: true
  },
  {
    id: 7,
    name: "Linkedin URL",
    selector: (row) => row.comp_linkedin,
    sortable: true,
    reorder: true
  },
  {
    id: 8,
    name: "Actions",
    selector: (row) => (<>
    <button
      className="btn btn-outline-secondary btn-sm"
      onClick={(e) => UserUpdate(e, row.id)}
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
//   alert(id)
//   };


return (       
         <>
         
        <div className="App">
        <DataTable
        title="Companies Names"
        columns={columns}
        data={nameInfo}
        defaultSortFieldId={1}
        // sortIcon={<SortIcon />}
        pagination
        paginationComponentOptions={paginationComponentOptions}
        selectableRows
        />
        <button type='button' class="btn btn-outline-primary btn-sm" ><a  class=' text-dark' href="/Getname">Add New Name</a></button>
        </div>

        {(updateModal!=null)?(
              <div className="container mt-3">
                <ModalDialog data={specificNameInfo}/>
              </div>
            ):(null)}

    </> 
  );
};

export default Name;



// -----------------------------------------------------DELETE METHOD----------------------------------------------

// const deleteAPI=async(delete_id)=> {
//   let payload={
//     'userID':delete_id,
//   };
//   const service_response=await axios({
//       method: 'post',
//       url: 'http://localhost:9000/testAPI/deleteNameData',
//       data:payload,
//     // config: { }
//   })
//   .then(function (response) {  
//     alert("Data Deleted Successfully!..");/ const Delete_fn = (object) =>{
//   let delete_id=object.target.attributes['data-DeleteId'].value;
//   deleteAPI(delete_id);
//   object.target.parentElement.parentElement.remove();
// };
//    })
//   .catch(function (response) {   
//       console.log(response)
//   });  
// };

// --------------------------------------used to display the datas through map methods-------------------------------//


        {/* <div className='tab'>
        <h5>Company Names</h5>
        <div class="table table-bordered">
        <table class="container"  border={2}  ref={NameTableREF}>
          <thead>
            <tr>          
            <th>Company ID</th>
            <th>Company Name</th>
            <th>Company Business Type</th>
            <th>Company Domain Name</th>
            <th>Company Emp Size</th>
            <th>Company Website</th>
            <th>Company Linkdin URL</th>
            <th>Company Update</th>
            <th>Company Delete</th>
            </tr>
          </thead>
            {(nameInfo!=null)?(
              <>
          {nameInfo.map((data,index) =>
              <>
                <tr key={data}>
                 <td>{data.comp_id}</td>
                 <td>{data.compname}</td>
                 <td>{data.comp_type}</td>
                 <td>{data.domain_name}</td>
                 <td>{data.comp_size}</td>
                 <td>{data.comp_website}</td>
                 <td>{data.comp_linkedin}</td>
                 <td><button type='button' class="btn btn-success btn-sm " data-UpdateId={data.id} onClick={UserUpdate}>UPDATE</button></td>
                 <td><button type='button' class="btn btn-danger btn-sm " data-DeleteId={data.id} onClick={Delete_fn}>DELETE</button></td>
                </tr>         
              </>
              )}              
              </>
              ):(null)}
        </table>
        
        </div>
        </div>  */}
           

// -------------------------------------------------------Filter Function-------------------------------------------------------

        // () => {
        //   const [filterText, setFilterText] = React.useState('');
        //   const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
        //   const filteredItems = fakeUsers.filter(
        //     item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
        //   );
        
        //   const subHeaderComponentMemo = React.useMemo(() => {
        //     const handleClear = () => {
        //       if (filterText) {
        //         setResetPaginationToggle(!resetPaginationToggle);
        //         setFilterText('');
        //       }
        //     };
        
        //     return (
        //       <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        //     );
        //   }, [filterText, resetPaginationToggle]);
        
        //   return (
        //     <DataTable
        //       title="Contact List"
        //       columns={columns}
        //       data={filteredItems}
        //       pagination
        //       paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        //       subHeader
        //       subHeaderComponent={subHeaderComponentMemo}
        //       selectableRows
        //       persistTableHead
        //     />
        //   );
        // }