import axios from 'axios'
import Header from '../parts-website/Header';
import Footer from '../parts-website/Footer';
import Title from "../parts-website/Title";
import { useEffect, useState } from 'react';
import JobCard from '../parts-website/JobCard';


const Category = () => {

    const [info, setInfo] = useState([]);
    const [companyData, setCompanyData] = useState([]);
    let url = window.location.href;
    let urlSplit = url.split('/');
    console.log(urlSplit[4]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/jobs-category/${urlSplit[4]}`)
            .then((response) => {
                console.log(response.data);
                setInfo(response.data);
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
            <Title title={`${urlSplit[4]}`} />
            <section className='w-full min-h-0 mb-10'>
                {
                    info.length ? (
                        <div className='w-5/6 min-h-0 m-auto mt-5 grid grid-cols-3 gap-4'>
                            {info.map((job) => (
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
                            <h2 class="w-5/6 text-3xl text-center my-20 m-auto">No se encontraron empleos para la categoría de {`${urlSplit[4]}`}</h2>
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

export default Category;