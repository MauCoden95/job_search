import { useEffect, useState } from "react";
import axios from 'axios';

const Categories = () => {

  const [categories,setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/count-category')
         .then((response) => {
            console.log(response.data);
            setCategories(response.data);
         })
  }, []);


  return (
    <section className='w-full min-h-0 mb-10'>
      <h2 className='text-4xl my-8 text-center'>Categorías</h2>
      <div className='w-5/6 min-h-0 m-auto my-10 grid grid-cols-4 grid-rows-2 gap-4'>
            <a className="bg-blue-950 hover:bg-blue-800 text-center text-white py-2 px-5" href="">Programación <span className="block">{categories.Desarrollo} empleos</span></a>
            <a className="bg-blue-950 hover:bg-blue-800 text-center text-white py-2 px-5" href="">Datos <span className="block">{categories.Datos} empleos</span></a>
            <a className="bg-blue-950 hover:bg-blue-800 text-center text-white py-2 px-5" href="">Diseño Web <span className="block">{categories.Diseño} empleos</span></a>
            <a className="bg-blue-950 hover:bg-blue-800 text-center text-white py-2 px-5" href="">Redes <span className="block">{categories.Redes} empleos</span></a>
            <a className="bg-blue-950 hover:bg-blue-800 text-center text-white py-2 px-5" href="">Consultoría <span className="block">{categories.Consultoria} empleos</span></a>
            <a className="bg-blue-950 hover:bg-blue-800 text-center text-white py-2 px-5" href="">Project Manager <span className="block">{categories.ProjectManager} empleos</span></a>
            <a className="bg-blue-950 hover:bg-blue-800 text-center text-white py-2 px-5" href="">Soporte <span className="block">{categories.Soporte} empleos</span></a>
            <a className="bg-blue-950 hover:bg-blue-800 text-center text-white py-2 px-5" href="">Ciberseguridad <span className="block">{categories.Ciberseguridad} empleos</span></a>
      </div>
    </section>
  )
}

export default Categories;