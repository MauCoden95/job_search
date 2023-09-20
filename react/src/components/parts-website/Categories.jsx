const Categories = () => {
  return (
    <section className='w-full min-h-0 mb-10'>
      <h2 className='text-4xl my-8 text-center'>Categorías</h2>
      <div className='w-5/6 min-h-0 m-auto my-10 grid grid-cols-4 grid-rows-2 gap-4'>
            <a className="bg-blue-950 hover:bg-blue-800 text-center text-white py-2 px-5" href="">Programación <span className="block">0 empleos</span></a>
            <a className="bg-blue-950 hover:bg-blue-800 text-center text-white py-2 px-5" href="">Datos <span className="block">0 empleos</span></a>
            <a className="bg-blue-950 hover:bg-blue-800 text-center text-white py-2 px-5" href="">Diseño Web <span className="block">0 empleos</span></a>
            <a className="bg-blue-950 hover:bg-blue-800 text-center text-white py-2 px-5" href="">Redes <span className="block">0 empleos</span></a>
            <a className="bg-blue-950 hover:bg-blue-800 text-center text-white py-2 px-5" href="">Consultoría <span className="block">0 empleos</span></a>
            <a className="bg-blue-950 hover:bg-blue-800 text-center text-white py-2 px-5" href="">Project Manager <span className="block">0 empleos</span></a>
            <a className="bg-blue-950 hover:bg-blue-800 text-center text-white py-2 px-5" href="">Soporte <span className="block">0 empleos</span></a>
            <a className="bg-blue-950 hover:bg-blue-800 text-center text-white py-2 px-5" href="">Ciberseguridad <span className="block">0 empleos</span></a>
      </div>
    </section>
  )
}

export default Categories;