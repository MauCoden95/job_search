import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from './JobCard';

const LatestJobs = () => {
  const [jobsData, setJobsData] = useState([]);
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/latest-jobs')
      .then((response) => {
        const jobs = response.data;
        setJobsData(jobs);
        console.log(response.data);
        console.log(jobsData);
      });

   
    axios.get('http://localhost:8000/api/companies')
      .then((response) => {
        const companies = response.data;
        setCompanyData(companies);
      });

      
  }, []);

  return (
    <section className='w-full min-h-0 mb-10'>
      <h2 className='text-2xl md:text-4xl my-8 text-center'>Ultimos empleos publicados</h2>
      <div className='w-5/6 min-h-0 m-auto mt-5 grid grid-cols-1 grid-rows-6  sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-4'>
        {jobsData.map((job) => (
          <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            img={job.img}
            location={job.location}
            area={job.area}
            salary={job.salary}
            type={job.type}
            company={getCompanyName(job.company_id)}
          />
        ))}
      </div>
    </section>
  );

  function getCompanyName(companyId) {
    const company = companyData.find((c) => c.id === companyId);
    return company ? company.name : 'Empresa no encontrada';
  }
}

export default LatestJobs;
