import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Info = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };



    const slidesData = [
        {
            image: 'http://localhost:8000/img/1-min.jpg',
            text: 'Explora Tu Futuro en Tecnología',
            description: 'Descubre una amplia variedad de empleos en el campo de la tecnología, desde desarrolladores de software hasta expertos en ciberseguridad. Te ayudamos a encontrar el trabajo perfecto para tu perfil y aspiraciones'
        },
        {
            image: 'http://localhost:8000/img/2-min.jpg',
            text: 'Red de Contactos Profesionales',
            description: 'Únete a nuestra comunidad de profesionales de IT. Conecta con expertos de la industria, asiste a eventos exclusivos y accede a recursos de desarrollo profesional para impulsar tu carrera.'
        },
        {
            image: 'http://localhost:8000/img/3-min.jpg',
            text: 'Herramientas para el Crecimiento',
            description: 'Ofrecemos recursos educativos, guías de entrevistas, cursos de formación y consejos de carrera para ayudarte a crecer en la industria de IT. Estamos comprometidos a impulsar tu éxito.'
        },
    ];

    return (
        <div className="w-5/6 m-auto my-24 slider-container">
            <Slider {...settings}>
                {slidesData.map((slide, index) => (
                    <div key={index} className="relative info-slider slide">
                        <div className='w-full h-full flex'>
                            <img className="w-2/4 h-full" src={slide.image} alt={slide.title} />
                            <div className='w-2/4 h-full bg-gray-100 p-6'>
                                <h2 className='my-12 text-center text-xl font-bold'>{slide.text}</h2>
                                <p className='my-10 text-base text-justify'>{slide.description}</p>
                                <a className='w-40 rounded-lg flex items-center justify-around m-auto text-xl text-white p-5 bg-gradient-to-r from-blue-600 to-blue-800 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-600 w-full h-16' href="/nosotros">Ver más <i class="far fa-eye"></i></a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
