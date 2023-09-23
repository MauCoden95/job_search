import { useLocation } from 'react-router-dom';
import Header from "../parts-website/Header";
import Footer from "../parts-website/Footer";
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import JobCard from '../parts-website/JobCard';

const JobSearch = () => {

    const [data, setData] = useState([]);
    const [companyData, setCompanyData] = useState([]);

    const location = useLocation();
    const formData = location.state?.formData;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/jobs-search/${formData.title}/${formData.location}`)
            .then((response) => {
                setData(response.data);
                console.log(data);
            })


        axios.get('http://localhost:8000/api/companies')
            .then((response) => {
                const companies = response.data;
                setCompanyData(companies);
            });
    }, []);

    console.log(formData);

    return (
        <div>
            <Header />
            {
                data.length >= 1 ? (
                    <div>
                        <h2 class="my-12 text-4xl text-center">Resultados de la búsqueda</h2>
                        <div class="w-4/5 min-h-0 m-auto grid grid-cols-3 gap-6 my-12">
                            {
                                data.map((item) => (
                                    <JobCard
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        img={item.img}
                                        location={item.location}
                                        area={item.area}
                                        salary={item.salary}
                                        type={item.type}
                                        company={getCompanyName(item.company_id)}
                                    />
                                ))
                            }
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2 class="my-12 text-3xl text-center">No se encontraron resultados para la búsqueda</h2>
                        <img class="w-72 my-12 m-auto" src={`http://localhost:8000/img/404.svg`} alt="No encontrado"/>
                    </div>
                )
            }


            <Footer />
        </div>
    );


    function getCompanyName(companyId) {
        const company = companyData.find((c) => c.id === companyId);
        return company ? company.name : 'Empresa no encontrada';
    }
}


export default JobSearch;