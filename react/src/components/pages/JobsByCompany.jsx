import Header from "../parts-website/Header";
import Footer from "../parts-website/Footer";
import Title from "../parts-website/Title";
import JobCard from "../parts-website/JobCard";
import Filter from "../parts-website/Filter";
import { useEffect, useState } from "react";
import axios from 'axios';

const JobsByCompany = () => {

    const [jobs, useJobs] = useState([]);
    const [companyData, setCompanyData] = useState([]);
    let url = window.location.href;
    const partsURL = url.split('/');
    const name = partsURL[partsURL.length - 1];

    console.log(name);


    useEffect(() => {
        axios.get(`http://localhost:8000/api/jobs-company/${name}`)
            .then((response) => {
                //console.log(response.data);
                useJobs(response.data);
            })

        axios.get('http://localhost:8000/api/companies')
            .then((response) => {
                const companies = response.data;
                setCompanyData(companies);
            });
    }, []);


   

    return (
        <div>
            <Header />
            <Filter />
            {/* <Title title={getCompanyName(job.company_id)} /> */}
            <section className='w-full min-h-0 mb-10'>
                {
                    jobs.length ? (
                        <div className='w-5/6 min-h-0 m-auto mt-5 grid grid-cols-3 gap-4'>
                            {jobs.map((job) => (
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
                    ) : (
                        <div>
                            <h2 class="w-5/6 text-3xl text-center my-20 m-auto">La empresa no tiene búsquedas activas</h2>
                            <img class="w-72 my-12 m-auto" src={`http://localhost:8000/img/404.svg`} alt="No encontrado" />
                        </div>
                    )
                }

            </section>
            <Footer />
        </div>
    )

    function getCompanyName(companyId) {
        const company = companyData.find((c) => c.id === companyId);
        return company ? company.name : 'Empresa no encontrada';
    }
}

export default JobsByCompany;