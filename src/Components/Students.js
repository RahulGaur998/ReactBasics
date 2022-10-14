import React from 'react'
import './Students.css'

const Students = ({students}) =>{
  
  return (
    <div className="App">
        <div className='table-head'>
        <h2>StudentName</h2> 
        <h2>Total Marks</h2>
        </div>
      {
        students.map(student => 
        <li 
          key={student.name}
        > 
          <span>{student.name}</span>
          <p>{student.physics+student.maths+student.english}</p>
        </li>)
      }
    </div>
  )
}

export default Students;