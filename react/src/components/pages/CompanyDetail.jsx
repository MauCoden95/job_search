import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from "../parts-website/Header";
import Footer from "../parts-website/Footer";

const CompanyDetail = () => {

    const [company, setCompany] = useState([]);
    let url = window.location.href;
    const partsURL = url.split('/');
    const name = partsURL[partsURL.length - 1];
    //console.log(name);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/company/${name}`)
            .then((response) => {
                console.log(response.data.company);
                setCompany(response.data.company);
            })
    }, [])

    return (
        <div>
            <Header />
            <h2 className='text-center text-4xl my-10'>{company.name}</h2>
            <section className='w-full min-h-0 mb-10'>
                <div className='w-5/6 min-h-0 m-auto mt-5'>
                    <div className='w-full min-h-0 p-10 bg-gray-300'>
                        <div>
                            <img className='block w-72 m-auto' src={`http://localhost:8000/img/${company.img}`} alt={company.img} />
                        </div>
                        <div>
                            <p className='text-xl my-7'><h2 className='block text-2xl'>Cuil</h2><i class="fas fa-building"></i> {company.cuil}</p>
                            <p className='text-xl my-7'><h2 className='block text-2xl'>Dirección</h2><i class="fas fa-map-marker-alt"></i> {company.address}</p>
                            <p className='text-xl my-7'><h2 className='block text-2xl'>Ciudad</h2><i class="fas fa-city"></i> {company.city}</p>
                        </div>

                    </div>

                </div>
            </section>
            <Footer />
        </div>
    );
}

export default CompanyDetail;