import react, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../parts-website/Header";
import Footer from "../parts-website/Footer";
import Title from "../parts-website/Title";
import JobCard from '../parts-website/JobCard';

const AllJobs = () => {

    const [jobsData, setJobsData] = useState([]);
    const [companyData, setCompanyData] = useState([]);
    const url = window.location.href;
    const partsURL = url.split('/');
    const id = partsURL[partsURL.length - 1];
    

    useEffect(() => {
        axios.get(`http://localhost:8000/api/job-detail/${id}`)
            .then((response) => {
                const jobs = response.data;
                setJobsData(jobs);
                titles = jobs.map(job => job.title);
            
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
            <h2 className='text-center text-2xl sm:text-4xl my-10'>Detalles del puesto</h2>
            <section className='w-full min-h-0 mb-10'>
                <div className='w-5/6 min-h-0 m-auto mt-5'>
                    <div className='w-full min-h-0 p-10 bg-gray-300'>
                        {jobsData.map((job) => (
                           <div>
                                <a href={`/empresa/${getCompanyName(job.company_id)}`} className='text-sm text-base sm:sm:text-xl my-7 text-blue-900'><h2 className='block text-2xl'>Empresa</h2><i class="fas fa-building"></i> {getCompanyName(job.company_id)}</a>
                                <p className='text-sm sm:text-xl my-7'><h2 className='block text-base sm:text-2xl'>Ubicación</h2><i class="fas fa-map-marker-alt"></i> {job.location}</p>
                                <p className='text-sm sm:text-xl my-7'><h2 className='block text-base sm:text-2xl'>Salario</h2><i class="fas fa-money-bill-wave"></i> {job.salary}</p>
                                <p className='text-sm sm:text-xl my-7'><h2 className='block text-base sm:text-2xl'>Modalidad</h2><i class="fas fa-laptop"></i> {job.modality}</p>
                                <p className='text-sm sm:text-xl my-7'><h2 className='block text-base sm:text-2xl'>Tipo</h2><i class="fas fa-laptop"></i> {job.type}</p>
                                <p className='text-sm sm:text-xl my-7'><h2 className='block text-base sm:text-2xl'>Beneficios</h2><i class="fas fa-gift"></i> {job.benefits}</p>
                                <p className='text-sm sm:text-xl my-7 text-justify'><h2 className='block text-base sm:text-2xl'>Requisitos</h2><i class="fas fa-list"></i> {job.requirements}</p>
                           </div>
                        ))}
                    </div>
                    
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
