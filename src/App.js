import React,{useState,useEffect} from 'react';
import { Table } from 'bootstrap-4-react';
import "./App.css";


function  App() {   
  
   const [state,setstate]=useState([]);
   const [choice,setchoice]=useState("All");
   const select=["Completed","In Progress","All"];   

  useEffect(()=>{
    getDatas();
  },[])
     
  const getDatas=async()=>
  {
  const responce=await fetch("http://timeapi.kaaylabs.com/api/v1/project_view/");
  const values=await responce.json();

  setstate(values.data);

  console.log(values);
  }

  const filter= e =>
  {
    setchoice(e.target.value);  
    
  }
   
    return(
         <div className="App">
            <br/>
             <form>        
                 <select value={choice} onChange={filter}>
                      {select.map(s=>(
                         <option value={s}>{s}</option>         
                      ))}                   
                 </select>        
             </form>

       <Table  responsive hover text="light"  dark>
          <tr>
             <th>project_id</th>
             <th>project_code</th>
             <th>description</th>
             <th>start_date</th>
             <th>end_date</th>
             <th>status</th>
             <th>company_name</th>
          </tr>       
        {          
          state.map((e)=> ((e.status===choice) || (choice==="All"))? (
      
            <tr>              
               <td>{e.project_id}</td>
               <td>{e.project_code}</td>
               <td>{e.description}</td>
               <td>{e.start_date}</td>
               <td>{e.end_date}</td>
               <td>{e.status}</td>
               <td>{e.company_name}</td>  
            </tr>      
            
             
          ):"" )}
     </Table>
      </div>
    )
  
}


export default App;
