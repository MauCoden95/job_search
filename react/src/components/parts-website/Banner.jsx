import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    const navigate = useNavigate();

    const [ formData,setFormData ] = useState({
        title: '',
        location: ''
    }); 

    const handleInputChange = (e) => {
        const { name,value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        
        navigate('/puesto',{ state: { formData } });
    }

    return (
        <section className="relative w-full min-h-0 flex items-center justify-center">
            <img className="absolute w-full h-full z-10" src="http://localhost:8000/img/team.jpg" alt="Banner" />
            <form onSubmit={handleSubmit} className="w-4/5 sm:w-3/5 md:w-2/5 h-96 z-30 my-14 bg-white rounded-md flex flex-col items-center justify-evenly">
                <h1 className="text-2xl text-center">Buscá tu nuevo empleo</h1>
                <input className="block w-4/5 text-lg p-2 bg-gray-300 placeholder-slate-900" type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Puesto..." />
                <input className="block w-4/5 text-lg p-2 bg-gray-300 placeholder-slate-900" type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Ciudad..." />
                <input className="block w-4/5 text-lg p-2 bg-blue-950 hover:bg-blue-500 text-white hover:text-blue-900" value="Buscar &#128269;" type="submit"/>
            </form>
        </section>
    )
}


export default Banner;