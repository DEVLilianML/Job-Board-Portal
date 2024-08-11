import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import CreatableSelect from "react-select/creatable"

const CreateJobs = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const {
        register,reset,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
         data.skills = selectedOption;
        //console.log(data);
        fetch("http://localhost:5200/post-job", {   // http://localhost:5200/post-job"
          method: "POST",
          headers: {"content-type": "application/json"},
          body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((result) => {
         console.log(result);
         if(result.acknowledged === true) {
            alert ("Job Posted Sucessfully !!!")
         }
         reset()
        });
      };

      const options = [
        {value: "JavaScript", label: "JavaScript"},
        {value: "c++", label: "C++"},
        {value: "HTML", label: "HTML"},
        {value: "CSS", label: "CSS"},
        {value: "React", label: "React"},
        {value: "Node", label: "Node"},
        {value: "MongoDP", label: "MongoDP"},
        {value: "Python", label: "Python"}
      ]

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        {/*form */}
       <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
            {/*1st row*/}
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
              <div className='lg:w-1/2 w-full'>
                 <label className='block mb-2 text-lg'> Job Title</label>
                 <input type="text" defaultValue={"Web Developer"}
                 {...register("jobTitle")} className='create-job-input' />
              </div>
              <div className='lg:w-1/2 w-full'>
                 <label className='block mb-2 text-lg'> Company Name</label>
                 <input type="text" placeholder='Ex: Oando'
                 {...register("companyName")} className='create-job-input' />
              </div>
            </div>

            {/*2nd row*/}
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
              <div className='lg:w-1/2 w-full'>
                 <label className='block mb-2 text-lg'> Mininum Salary</label>
                 <input type="text" placeholder='$20k'
                 {...register("minPrice")} className='create-job-input' />
              </div>
              <div className='lg:w-1/2 w-full'>
                 <label className='block mb-2 text-lg'> Maximum Salary</label>
                 <input type="text" placeholder='$120k'
                 {...register("companyName")} className='create-job-input' />
              </div>
            </div>

            {/*3rd row*/}
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
              <div className='lg:w-1/2 w-full'>
                 <label className='block mb-2 text-lg'> Salary Type</label>
                 <select {...register("salaryType")} className='create-job-input'>
                    <option value="">Chose your Salary</option>
                    <option value="Hourly">Hourly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                 </select>
              </div>
              <div className='lg:w-1/2 w-full'>
                 <label className='block mb-2 text-lg'>Job Location</label>
                 <input type="text" placeholder='Ex: New York'
                 {...register("jobLocation")} className='create-job-input' />
              </div>
            </div>

            {/* 4th row */}
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
              <div className='lg:w-1/2 w-full'>
                 <label className='block mb-2 text-lg'>Job Posting Date</label>
                 <input 
                   type='date'
                   placeholder='Ex:2024-08-05'
                   {...register('postingDate')}
                   className='create-job-input'/>
                 
              </div>
              <div className='lg:w-1/2 w-full'>
                 <label className='block mb-2 text-lg'>Experience Level</label>
                 <select {...register("experienceLevel")} className='create-job-input'>
                    <option value="">Choose your experience</option>
                    <option value="internship">internship</option>
                    <option value="NoExperince">2-4 years</option>
                    <option value="Work remotely">5-9 years</option>
                 </select>
              </div>
            </div>


            {/*5th row*/}
            <div>
            <label className='block mb-2 text-lg'>Required Skill Sets</label>
            <CreatableSelect
            defaultValue={selectedOption}
            onChange={selectedOption} 
            options={options}
            isMulti
            className="create-job-input py-4"/>  
               
            </div>

            {/* 6th row*/}
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
              <div className='lg:w-1/2 w-full'>
                 <label className='block mb-2 text-lg'>Company Logo</label>
                 <input 
                   type='url'
                   placeholder='Paste your company logo url: https://Oando.com/img'
                   {...register('CompanyLogo')}
                   className='create-job-input'/>
                 
              </div>
              <div className='lg:w-1/2 w-full'>
                 <label className='block mb-2 text-lg'>Employment Type</label>
                 <select {...register("employmentType")} className='create-job-input'>
                    <option value="">Choose your type of employment</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">"Part-time</option>
                    <option value="Temporary">Temporary</option>
                 </select>
              </div>
            </div>

             {/*7th row*/}
            <div className='w-full'>
            <label className='block mb-2 text-lg'>Job Description</label>
            <textarea className='w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700'
            rows={6}
            defaultValue={"Write a liitle bit of your company and what youn expect from applicants"}
            placeholder='Job Description'
            {...register("descrition")}/>
            </div>

            {/*last row*/}
            <div className='w-full'>
              <label className='block mb-2 text-lg'>Job Posted By</label>
              <input
                 type="email"
                 placeholder='Your email'
                 {...register("postedBy")} 
                 className='create-job-input'
             />
            </div>
            <input type="submit" className='block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer'/>
          </form>
        </div>
        
    </div>
  );
};

export default CreateJobs