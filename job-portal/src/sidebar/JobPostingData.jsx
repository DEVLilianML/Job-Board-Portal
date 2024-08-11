import React from 'react';
import Inputfield from '../components/Inputfield';

const JobPostingData = ({ handleChange }) => {
  const now = new Date();

  const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
  const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  // Convert data to string
  const twentyFourHoursDate = twentyFourHoursAgo.toISOString().slice(0, 10);
  const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
  const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);

  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Date of Posting</h4>
      <div>
        <label className='sidebar-label-container'>
          <input
            type="radio"
            name="postingDate"
            id='all-time'
            value=""
            onChange={handleChange}
          />
          <span className='checkmark'></span> All time
        </label>

        <Inputfield 
          handleChange={handleChange} 
          value={twentyFourHoursDate}
          title="Last 24 hours"
          name="postingDate"
        />
        <Inputfield 
          handleChange={handleChange} 
          value={sevenDaysAgoDate}
          title="Last 7 days"
          name="postingDate"
        />
        <Inputfield 
          handleChange={handleChange} 
          value={thirtyDaysAgoDate}
          title="Last Month"
          name="postingDate"
        />
      </div>
    </div>
  );
};

export default JobPostingData;
