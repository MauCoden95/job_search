import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const JobCard = (props) => {

  let { jobId } = useParams();
  jobId = props.id;





  return (
    <div className="relative h-96 p-2 bg-gray-200 rounded-lg flex flex-col items-center justify-evenly">
      <div className='absolute top-0 w-full h-16'>
        <img className='absolute top-3 right-3 block w-16' src={`http://localhost:8000/img/${props.img}`} alt={props.img} />
      </div>
      <h2 className="text-xl mt-12">{props.title}</h2>
      <a className='text-blue-950' href="#">{props.company}</a>
      <div className='w-4/5 h-24 grid grid-cols-2 grid-rows-2 gap-4'>
        <h2 className='bg-gray-700 text-white text-center text-sm leading-10'>&#128205; {props.location}</h2>
        <h2 className='bg-gray-700 text-white text-center leading-10'>{props.salary}</h2>
        <h2 className='bg-gray-700 text-white text-center leading-10'>{props.type}</h2>
        <h2 className='bg-gray-700 text-white text-center leading-10'>{props.area}</h2>
      </div>

      <Link to={`/descripcion-puesto/${jobId}`} className="bg-blue-950 hover:bg-blue-600 text-white px-4 py-2">
        Ver detalles
      </Link>


    </div>
  );
}

export default JobCard;
