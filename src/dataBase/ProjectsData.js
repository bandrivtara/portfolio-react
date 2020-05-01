import projectDeskImage from '../assets/DeskOfPlans.jpg';
import projectPortfolioImage from '../assets/portfolio-react.jpg';
import projectSNImage from '../assets/SocialNetwork.png';
import projectLetsSurfImage from '../assets/LetsSurf.png';

export let projectsData = [
    {
        id: 1,
        name: 'Social Network SPA',
        descr: 'A social network analogue with server requests. Used css-module to style SPA. The structure is divided into three main blocks: User Interface, Business Logic Layer and API files requests. Redux was used like global storage. So far profile page, friends page, homepage and authorization have been created. Dialog page and music player are currently being developed.',
        image: projectSNImage,
        skills: ['React', 'Redux', 'React-Router', 'REST API', 'css-module'],
        live: 'https://social-netwok.herokuapp.com/',
        code: 'https://github.com/bandrivtara/SocialNetworkSite-ownDB'
    },
    {
        id: 2,
        name: 'Lines Portfolio SPA',
        descr: 'The main goal of this page was to create portfolio. Style is executed with combination of the following techniques: grid-layout, react-TransitionGroup, Sass. All animations are done without using any support libraries.',
        image: projectPortfolioImage,
        skills: ['React ', 'Sass ', 'React-Router', 'Transition Group']
    },
    {
        id: 3,
        name: 'Lets Surf!',
        descr: 'Landing project, which was written using BEM method. Project made with responsive web design, sliders and modern templates with animation. Used libraries: animate.css, wow.js, slick) ',
        image: projectLetsSurfImage,
        skills: ['Gulp', 'Sass', 'jQuery', 'RWD'],
        live: 'https://bandrivtara.github.io/LetsSurf-sass-gulp4-bem/',
        code: 'https://github.com/bandrivtara/LetsSurf-sass-gulp4-bem.git'
    },
    {
        id: 4,
        name: 'Motivation Board',
        descr: 'It is my first project. The main idea was to create interactive motivation board inspired by real one. Also on the right side of the board you can see my vision of development.',
        image: projectDeskImage,
        skills: ['JavaScript', 'jQuery', 'SVG'],
        live: 'https://bandrivtara.github.io/DeskOfPlans-js-jquery/',
        code: 'https://github.com/bandrivtara/DeskOfPlans-js-jquery.git'
    }
]