import Header from "../parts-website/Header";
import Title from "../parts-website/Title";
import Footer from "../parts-website/Footer";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const About = () => {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: null, 
        nextArrow: null,
    };


    const slidesData = [
        {
            title: 'Francisco',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas ex vitae nibh congue interdum. In vehicula iaculis tellus mattis efficitur. Quisque rutrum risus leo, in congue eros pharetra non.',
            image: 'http://localhost:8000/img/Francisco.jpeg',
            stars: <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
        },
        {
            title: 'Julian',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas ex vitae nibh congue interdum. In vehicula iaculis tellus mattis efficitur. Quisque rutrum risus leo, in congue eros pharetra non.',
            image: 'http://localhost:8000/img/Julian.jpeg',
            stars: <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        },
        {
            title: 'Florencia',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas ex vitae nibh congue interdum. In vehicula iaculis tellus mattis efficitur. Quisque rutrum risus leo, in congue eros pharetra non.',
            image: 'http://localhost:8000/img/Florencia.jpeg',
            stars: <div><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div>
        },
        {
            title: 'Analia',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas ex vitae nibh congue interdum. In vehicula iaculis tellus mattis efficitur. Quisque rutrum risus leo, in congue eros pharetra non.',
            image: 'http://localhost:8000/img/Analia.jpeg',
            stars: <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div>
        },
        {
            title: 'Monica',
            text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas ex vitae nibh congue interdum. In vehicula iaculis tellus mattis efficitur. Quisque rutrum risus leo, in congue eros pharetra non.',
            image: 'http://localhost:8000/img/Monica.jpeg',
            stars: <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
        },
    ];

    return (
        <div>
            <Header />
            <Title title="Nosotros" />
            <div className="w-4/5 min-h-0 bg-gray-200 m-auto my-12 p-5 rounded-xl">
                <img className="w-96 my-12 m-auto" src={`http://localhost:8000/img/Hiring.svg`} alt="No encontrado" />
                <div className="w-full mb-20">
                    <h2 className="border-0 border-b border-gray-400 text-2xl pb-2">¿Quiénes Somos?</h2>
                    <p className="mt-5 text-justify">
                        En Job Search, estamos dedicados a
                        conectar a los profesionales de la industria de la tecnología
                        de la información con las oportunidades laborales que transformarán
                        sus carreras. Somos un equipo apasionado de expertos en
                        reclutamiento y tecnología, comprometidos en facilitar la búsqueda
                        y selección de talento en el mundo IT. Nuestra plataforma ofrece
                        un espacio dinámico y eficiente donde las empresas líderes pueden
                        encontrar a los candidatos más calificados, mientras que los
                        aspirantes pueden explorar una amplia gama de puestos emocionantes
                        en áreas como desarrollo de software, ciberseguridad, inteligencia
                        artificial, y mucho más. En Job Search,
                        creemos en el poder de la tecnología para impulsar la innovación y
                        el progreso, y estamos aquí para ayudar a las mentes brillantes a
                        encontrar su lugar en esta industria en constante evolución.
                    </p>
                </div>

                <div className="w-full mb-20">
                    <h2 className="border-0 border-b border-gray-400 text-2xl pb-2">¿Por qué elegirnos?</h2>
                    <p className="mt-5 text-justify">
                        La respuesta es simple: somos más que un portal de empleos,
                        somos un aliado en tu éxito profesional en la industria de la
                        tecnología de la información. Lo que nos diferencia es nuestro
                        compromiso con la excelencia en la búsqueda de empleo. Contamos
                        con una vasta red de empresas de renombre que confían en nosotros
                        para encontrar a los mejores talentos. Nuestra plataforma es
                        intuitiva y fácil de usar, lo que facilita la búsqueda de
                        oportunidades adecuadas para ti. Además, ofrecemos recursos y
                        herramientas adicionales, como consejos de carrera y
                        actualizaciones de la industria, para que puedas destacar
                        en el competitivo mundo IT. En Job Search, no solo te ayudamos a
                        encontrar un trabajo, te ayudamos a construir una carrera
                        exitosa en la tecnología. Únete a nosotros y descubre por qué
                        somos la elección preferida de profesionales y empresas en
                        busca de oportunidades en la industria IT.
                    </p>
                </div>

                <h2 className="border-0 border-b border-gray-400 text-2xl pb-2 mb-5">Testimonios</h2>
                <div className="w-full md:w-4/6 m-auto slider-container">
                    <Slider {...sliderSettings}>
                        {slidesData.map((slide, index) => (
                            <div key={index} className="relative h-72 bg-white p-5 rounded-md slide">
                                <h2 className="text-xl sm:text-3xl mb-5">{slide.title}</h2>
                                <p className="text-sm sm:text-base text-justify">{slide.text}</p>
                                <span className="absolute bottom-4 left-5 text-base sm:text-3xl text-yellow-500">{slide.stars}</span>
                                <img className="absolute bottom-3 right-5 w-16 sm:w-24 rounded-full" src={slide.image} alt={slide.title} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default About;