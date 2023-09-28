import { useState } from "react";
import Button from "./Button";

const Header = () => {

    const btn = "login";
    const btnColor = "bg-white";
    const btnText = "text-blue-950";
    const hover = "hover:text-white hover:bg-blue-950 hover:border-white";

    const [visible,setVisible] = useState('hidden');

    const changeVisibility = () => {
        if (visible == 'hidden') {
            setVisible('block');
        }else{
            setVisible('hidden');
        }
    }

    return (
        <header className="w-full h-24 bg-blue-950">
            <div className="relative w-5/6 h-full m-auto flex items-center justify-between text-white">
                <a href="/" className="text-base">
                    Job Search
                    <i className="fas fa-briefcase ml-2"></i>
                </a>

                <button className="md:hidden" onClick={changeVisibility}><i className="fas fa-bars text-2xl"></i></button>

                <nav className={`${visible} md:block absolute top-24 md:relative md:top-0 w-full md:w-5/6 min-h-0 bg-blue-950 z-40 lg:w-2/4 h-full`}>
                    <ul className="w-full h-full flex flex-col md:flex-row items-center justify-between md:justify-evenly">
                        <li className="w-full md:w-auto p-2 md:p-0 md:p-0 text-center bg-blue-950 text-base  md:text-xs"><a className="w-full block m-auto h-12 pt-3 hover:bg-blue-700 hover:md:bg-transparent hover:md:text-blue-400" href="/">Inicio</a></li>
                        <li className="w-full md:w-auto p-2 md:p-0 md:p-0 text-center bg-blue-950 text-base  md:text-xs"><a className="w-full block m-auto h-12 pt-3 hover:bg-blue-700 hover:md:bg-transparent hover:md:text-blue-400" href="/nosotros">Nosotros</a></li>
                        <li className="w-full md:w-auto p-2 md:p-0 md:p-0 text-center bg-blue-950 text-base  md:text-xs"><a className="w-full block m-auto h-12 pt-3 hover:bg-blue-700 hover:md:bg-transparent hover:md:text-blue-400" href="/empleos">Todos los empleos</a></li>
                        <li className="w-full md:w-auto p-2 md:p-0 md:p-0 text-center bg-blue-950 text-base  md:text-xs"><a className="w-full block m-auto h-12 pt-3 hover:bg-blue-700 hover:md:bg-transparent hover:md:text-blue-400" href="/contacto">Contacto</a></li>
                    </ul>
                </nav>

                <Button name={btn} color={btnColor} text={btnText} over={hover} />
            </div>
        </header>
    )
}

export default Header;
