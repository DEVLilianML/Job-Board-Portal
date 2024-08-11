import React from 'react'
import Inputfield from '../components/Inputfield'

const EmploymentType = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Type of experience</h4>    
       
        <div>
          <label className='sidebar-label-container'>
            <input
             type="radio"
             name="test"
             id='test'
             value=""
             onChange={handleChange}
             />
             <span className='checkmark'></span> Any Experience
          </label>
          
          <Inputfield 
            handleChange={handleChange} 
            value="temporary"
            title="Temporary"
            name="test"
          />

          <Inputfield 
            handleChange={handleChange} 
            value="full-time"
            title="Full-time"  
            name="test"
          />
          <Inputfield 
            handleChange={handleChange} 
            value="part-time"
            title="Part-time"
            name="test"
          />
        </div>      
    </div>
  );
};

export default EmploymentType