import portfolioImg from '../assets/images/portfolio.png'
import daggaWinkelImg from '../assets/images/dagga-winkel.jpg'
import covidImg from '../assets/images/covid.png'
import calcImg from '../assets/images/calculator.png'
import pokedexImg from '../assets/images/pokedex.png'
import rpsImg from '../assets/images/rps.png'

export const proyectsData = [
    {
        id: 1,
        title: 'Portafolio',
        desc: 'Mi portafolio, donde estas leyendo esto tambien es un proyecto! 🎉',
        img: portfolioImg,
        skills: ['react', 'js', 'styled-components', 'npm', 'git', 'github'],
        repo: 'https://github.com/barbosa0205/portfolio2',
        web: 'https://portfolio-cc5a8.web.app/',
    },
    {
        id: 2,
        title: 'e-commerce Dagga Winkel',
        desc: 'Tienda en linea Dagga winkel. este proyecto utlizia Firebase como hosting, autenticacion y base de datos ',
        img: daggaWinkelImg,
        skills: ['react', 'firebase', 'js', 'sass', 'npm', 'git', 'github'],
        repo: 'https://github.com/barbosa0205/dagga-winkel-store-app',
        web: 'https://dagga-winkel-ecommerce.web.app/',
    },
    {
        id: 3,
        title: 'Covid-19',
        desc: 'Enterate del estado del covid 19 en diferentes paises del mundo 🗺️',
        img: covidImg,
        skills: ['react', 'js', 'sass', 'npm', 'git', 'github'],
        repo: 'https://github.com/barbosa0205/covid19',
        web: 'https://covid19-barbosa0205.netlify.app/',
    },
    {
        id: 4,
        title: 'Minimalist Calc',
        desc: 'Una calculadora con un diseño moderno y minimalista 📱',
        img: calcImg,
        skills: ['html', 'css', 'js', 'git', 'github'],
        repo: 'https://github.com/barbosa0205/Minimalist-Calculator',
        web: 'https://barbosa0205.github.io/Minimalist-Calculator/',
    },
    {
        id: 5,
        title: 'Pokedex',
        desc: 'Una pequeña pero grandiosa pokedex que te dara un vistazo a las caracteristicas de algunos de los pokemon que habitan los valles, Atrapalos a todos🚀',
        img: pokedexImg,
        skills: ['html', 'css', 'js', 'git', 'github'],
        repo: 'https://github.com/barbosa0205/Pokedex',
        web: 'https://barbosa0205.github.io/Pokedex/',
    },
    {
        id: 6,
        title: 'Piedra Papel & Tijeras',
        desc: 'El clasico juego de Piedra Papel Y Tijeras con un diseño retro! 👾',
        img: rpsImg,
        skills: ['html', 'css', 'js', 'git', 'github'],
        repo: 'https://github.com/barbosa0205/Paper-Rock-Scsissors',
        web: 'https://barbosa0205.github.io/Paper-Rock-Scsissors/',
    },
]
