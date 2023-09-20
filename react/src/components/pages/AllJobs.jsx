import react, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../parts-website/Header";
import Footer from "../parts-website/Footer";
import Title from "../parts-website/Title";
import JobCard from '../parts-website/JobCard';

const AllJobs = () => {

    const [jobsData, setJobsData] = useState([]);
    const [companyData, setCompanyData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/all-jobs')
            .then((response) => {
                const jobs = response.data;
                setJobsData(jobs);
            });


        axios.get('http://localhost:8000/api/companies')
            .then((response) => {
                const companies = response.data;
                setCompanyData(companies);
            });


    }, []);

    return (
        <div>
            <Header />
            <Title title="Todos los empleos" />
            <section className='w-full min-h-0 mb-10'>
                <div className='w-5/6 min-h-0 m-auto mt-5 grid grid-cols-3 gap-4'>
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
            <Footer />
        </div>
    )

    function getCompanyName(companyId) {
        const company = companyData.find((c) => c.id === companyId);
        return company ? company.name : 'Empresa no encontrada';
    }
}

export default AllJobs;
