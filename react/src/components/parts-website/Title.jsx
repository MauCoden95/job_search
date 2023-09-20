const Title = ({title}) => {
  return (
    <section className="relative w-full h-96 border-t-8 border-b-8 border-gray-400 flex items-center justify-center">
            <img className="absolute w-full h-full z-10" src="http://localhost:8000/img/team.jpg" alt="Banner" />
            <div className="absolute w-full h-full z-20 bg-blue-700 opacity-70">
                
            </div>
            <h2 className="text-8xl z-40 text-white">{title}</h2>
    </section>
  )
}


export default Title;