import { useEffect, useState } from 'react';
import './App.css';
import { EmployeeData } from './EmployeeData';

function App() {

  const [data,setData] = useState([]);

  useEffect(()=>{
    setData(EmployeeData)
  })
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>S.No</td>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
          </tr>
        </thead>
        <tbody>
          {
            EmployeeData.map((items,index)=>{ // here your data is inside Items
              return(
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{items.id}</td>
                  <td>{items.firstName}</td>
                  <td>{items.lastName}</td>
                  <td>{items.age}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;


const sum = (a,b)=> {
  return a + b;
}
