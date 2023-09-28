import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const JobCard = (props) => {

  let { jobId } = useParams();
  jobId = props.id;

  let { company } = useParams();
  company = props.company;




  return (
    <div className="relative h-auto md:h-96 p-2 bg-gray-200 rounded-lg flex flex-col items-center justify-evenly">
      <div className='absolute top-0 w-full h-16'>
        <img className='absolute top-3 right-3 block w-8 md:w-12' src={`http://localhost:8000/img/${props.img}`} alt={props.img} />
      </div>
      <h2 className="text-xl mt-10 mb-5">{props.title}</h2>
      {/* <a className='text-blue-950' href="#">{props.company}</a> */}
      <a href={`/empresa/${props.company}`} className="text-base mb-5 text-xsy-3 text-blue-950">
        {props.company}
      </a>
      <div className='w-5/6 h-24 grid grid-cols-2 grid-rows-2 gap-2 mb-5'>
        <h2 className='bg-gray-700 text-white text-center text-xs text-sm leading-10'>{props.location}</h2>
        <h2 className='bg-gray-700 text-white text-center text-xs leading-10'>{props.salary}</h2>
        <h2 className='bg-gray-700 text-white text-center text-xs leading-10'>{props.type}</h2>
        <h2 className='bg-gray-700 text-white text-center text-xs leading-10'>{props.area}</h2>
      </div>

      <a href={`/descripcion-puesto/${jobId}`} className="bg-blue-950 mb-5 hover:bg-blue-600 text-white px-4 py-2">
        Ver detalles
      </a>


    </div>
  );
}

export default JobCard;
