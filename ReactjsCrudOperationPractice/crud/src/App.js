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
            EmployeeData.map((item,index))
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
