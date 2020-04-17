import projectDeskImage from '../assets/DeskOfPlans.jpg';
import projectPortfolioImage from '../assets/portfolio-react.jpg';
import projectSNImage from '../assets/SocialNetwork.png';
import projectLetsSurfImage from '../assets/LetsSurf.png';

export let projectsData = [
    {
        id: 1,
        name: 'Social Network SPA',
        descr: 'A social network analogue with server requests. Used css-module to style SPA. The structure is divided into three main blocks: User Interface, Business Logic Layer and API files requests. Was using redux like global storage. Currently profile page, friends page, homepage and authorization have been created. A dialog page and a music player are currently being developed.',
        image: projectSNImage,
        skills: ['React', 'Redux', 'React-Router', 'REST API', 'css-module'],
        live: 'https://bandrivtara.github.io/SocialNetworkSite/',
        code: 'https://github.com/bandrivtara/SocialNetworkSite'
    },
    {
        id: 2,
        name: 'Lines Portfolio SPA',
        descr: 'This page is done with the main aim for portfolio. Style is executed with combination of the following technique: grid-layout, react-TransitionGroup, Sass. All animations are done without the use of any support libraries.',
        image: projectPortfolioImage,
        skills: ['React ', 'Sass ', 'React-Router', 'Transition Group']
    },
    {
        id: 3,
        name: 'Lets Surf!',
        descr: 'Landing project, witch was writing with BEM method. Made using a modern template with animations, sliders and responsiveness. Used libraries animate.css, wow.js, slick) ',
        image: projectLetsSurfImage,
        skills: ['Gulp', 'Sass', 'jQuery', 'RWD'],
        live: 'https://bandrivtara.github.io/LetsSurf-sass-gulp4-bem/',
        code: 'https://github.com/bandrivtara/LetsSurf-sass-gulp4-bem.git'
    },
    {
        id: 4,
        name: 'Desk Of Plans',
        descr: 'My first Project. Design made in the quality of a motivational board (list). A real target table has been restored',
        image: projectDeskImage,
        skills: ['JavaScript', 'jQuery', 'SVG'],
        live: 'https://bandrivtara.github.io/DeskOfPlans-js-jquery/',
        code: 'https://github.com/bandrivtara/DeskOfPlans-js-jquery.git'
    }
]