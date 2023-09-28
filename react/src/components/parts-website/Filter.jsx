const Filter = () => {
    return (
        <div className="my-12">
            <h2 className="text-center text-3xl my-5">Filtro</h2>
            <div className="w-5/6 min-h-0 bg-gray-300 rounded-md m-auto p-3">
                <div className="w-full h-auto flex flex-col md:flex-row items-center justify-between gap-3">
                    <input className="w-full md:w-3/6 text-base p-2 rounded-md" type="text" name="" placeholder="Puesto..." />
                    <input className="w-full md:w-3/6 text-base p-2 rounded-md" type="text" name="" placeholder="Ubicación..." />
                </div>

                <div className="w-full h-auto grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-4 my-5 md:my-3">
                    <select className="text-base p-2 rounded-md bg-white" name="modalidad">
                        <option value="">-- Modalidad --</option>
                        <option value="remoto">Remoto</option>
                        <option value="presencial">Presencial</option>
                        <option value="hibrido">Híbrido</option>
                    </select>

                    <select className="text-base p-2 rounded-md bg-white" name="type">
                        <option value="">-- Tipo --</option>
                        <option value="fulltime">Full Time</option>
                        <option value="parttime">Part Time</option>
                        <option value="contractor">Contractor</option>
                        <option value="temporal">Temporal</option>
                        <option value="becario">Becario</option>
                    </select>

                    <input className="text-base p-2 rounded-md" type="text" name="" placeholder="Salario..." />

                    <select className="text-base p-2 rounded-md bg-white" name="type">
                        <option value="">-- Area --</option>
                        <option value="programacion">Programacion</option>
                        <option value="diseño">Diseño</option>
                        <option value="datos">Datos</option>
                        <option value="redes">Redes</option>
                        <option value="soporte">Soporte</option>
                        <option value="consultoría">Consultoría</option>
                        <option value="ciberseguridad">Ciberseguridad</option>
                        <option value="pm">Project Manager</option>
                    </select>
                </div>

                <button type="submit" class="cursor-pointer rounded-md w-full bg-blue-900 hover:bg-blue-600 text-base py-2 text-white">
                    Buscar <i class="fas fa-search"></i>
                </button>

            </div>
        </div>
    )
}

export default Filter;