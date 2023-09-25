import Button from "./Button";

const Header = () => {

    const btn = "login";
    const btnColor="bg-white";
    const btnText = "text-blue-950";
    const hover = "hover:text-white hover:bg-blue-950 hover:border-white"

  return (
    <header className="w-full h-24 bg-blue-950">
        <div className="w-5/6 h-full m-auto flex items-center justify-between text-white">
            <a href="/" className="text-base">
                Job Search 
                <i className="fas fa-briefcase ml-2"></i>
            </a>

            <nav className="w-2/4 h-full">
                <ul className="w-full h-full flex items-center justify-between">
                    <li className="hover:text-blue-300 text-sm"><a href="/">Inicio</a></li>
                    <li className="hover:text-blue-300 text-sm"><a href="/nosotros">Nosotros</a></li>
                    <li className="hover:text-blue-300 text-sm"><a href="/empleos">Todos los empleos</a></li>
                    <li className="hover:text-blue-300 text-sm"><a href="/contacto">Contacto</a></li>
                </ul>
            </nav>

            <Button name={btn} color={btnColor} text={btnText} over={hover}/>
        </div>
    </header>
  )
}

export default Header;
