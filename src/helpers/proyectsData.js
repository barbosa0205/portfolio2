import calcImg from '../assets/images/calculator.png'
import pokedexImg from '../assets/images/pokedex.png'
import rpsImg from '../assets/images/rps.png'
import portfolioImg from '../assets/images/portfolio.png'

export const proyectsData = [
    {
        id: 1,
        title: 'Portafolio',
        desc: 'Mi portafolio, donde estas leyendo esto tambien es un proyecto! 🎉',
        img: portfolioImg,
        skills: ['react', 'js', 'css', 'html', 'npm'],
        repo: 'https://github.com/barbosa0205/Minimalist-Calculator',
        web: 'https://barbosa0205.github.io/Minimalist-Calculator/',
    },
    {
        id: 2,
        title: 'Minimalist Calc',
        desc: 'Una calculadora con un diseño moderno y minimalista 📱',
        img: calcImg,
        skills: ['html', 'css', 'js'],
        repo: 'https://github.com/barbosa0205/Minimalist-Calculator',
        web: 'https://barbosa0205.github.io/Minimalist-Calculator/',
    },
    {
        id: 3,
        title: 'Pokedex',
        desc: 'Una pequeña pero grandiosa pokedex que te dara un vistazo a las caracteristicas de algunos de los pokemon que habitan los valles, Atrapalos a todos🚀',
        img: pokedexImg,
        skills: ['html', 'css', 'js'],
        repo: 'https://github.com/barbosa0205/Pokedex',
        web: 'https://barbosa0205.github.io/Pokedex/',
    },
    {
        id: 4,
        title: 'Piedra Papel & Tijeras',
        desc: 'El clasico juego de Piedra Papel Y Tijeras con un diseño retro! 👾',
        img: rpsImg,
        skills: ['html', 'css', 'js'],
        repo: 'https://github.com/barbosa0205/Paper-Rock-Scsissors',
        web: 'https://barbosa0205.github.io/Paper-Rock-Scsissors/',
    },
]
