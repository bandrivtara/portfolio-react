import projectDeskImage from '../assets/DeskOfPlans.jpg';
import projectPortfolioImage from '../assets/portfolio-react.jpg';
import projectSNImage from '../assets/SocialNetwork.png';
import projectLetsSurfImage from '../assets/LetsSurf.png';

export const projectsData = {
    commercial: [
        {
            id: 1,
            type: "commercial",
            name: 'React Developer in GFT Poland - Leumi',
            date: '10/02/2022 - current',
            descr: "Created a webpage marketplace application for subscribing the bank's API.",
            participation: 'Refactored and improved of old code to the SOLID standards, created RWD pages, improved of application accessibility, created of new accessibility pages',
            skills: ['React', 'TypeScript', 'Redux Toolkit', 'React-Router', 'REST API', 'Styled components', 'MUI', 'react hook form'],
        },
        {
            id: 2,
            type: "commercial",
            name: 'React Developer in GFT Poland - HSBC Evolve',
            date: '16/10/2021 - 10/02/2022',
            descr: "Created a micro application of a micro frontend platform for managing transactions of bank users.",
            participation: 'Custom search box components with limits developed, multiple choice components with limit, customized date picker according to project styles and requirements, grid refresh button etc. Customized ag-grid according to project requirements. A side panel has been created with the details of the selected item. Create pagination. Great emphasis on accessibility (writing code for people with impaired eyesight, thanks to which the blind can use the computer with the help of JAWS and NVDA)',
            skills: ['React', 'TypeScript', 'React context', 'Ag-gird', 'micro frontend', 'scss', 'Evolve UI', 'react-thunk'],
        },
        {
            id: 3,
            type: "commercial",
            name: 'Junior Front End Developer in Duolife S.A.',
            date: '15/06/2020 - 15/10/2021',
            descr: "My first commercial experience as a front end developer. Under the supervision of the Senior developer, I was responsible for the front end part of the main website, the admin and club member panel and the company's foundation website",
            participation: 'Created user and member admin panel for new project with following technologies: React, Metronic, Redux, redux-thunks, i18n, Material UI, React Bootstrap, react-final-form, css modules, socket io. Also created OAuth2, Role based access control, translates module, centered routing system with React router, custom UI components etc. Fixed bugs in old project, updated foundation project from jquery to VueJs. Added front validation and made page more dynamic',
            skills: ['React', 'TypeScript', 'Redux', 'React-Router', 'REST API', 'css-module', 'Metronic UI', 'React Bootstrap', 'Material UI', 'react-thunk', 'VueJs', 'i18n', 'react-final-form'],
        },
    ],
    training: [
        {
            id: 4,
            date: '20/04/2020 - 15/06/2020',
            type: 'training',
            name: 'Social Network SPA',
            descr: 'A social network analogue with server requests. Used css-module to style SPA. The structure is divided into three main blocks: User Interface, Business Logic Layer and API files requests. Redux was used like global storage. So far profile page, friends page, homepage and authorization have been created. Dialog page and music player are currently being developed.',
            image: projectSNImage,
            skills: ['React', 'Redux', 'React-Router', 'REST API', 'css-module'],
            live: 'https://social-netwok.herokuapp.com/',
            code: 'https://github.com/bandrivtara/SocialNetworkSite-ownDB'
        },
        {
            id: 5,
            date: '01/04/2020 - 19/04/2020',
            type: 'training',
            name: 'Lines Portfolio SPA',
            descr: 'The main goal of this page was to create portfolio. Style is executed with combination of the following techniques: grid-layout, react-TransitionGroup, Sass. All animations are done without using any support libraries.',
            image: projectPortfolioImage,
            skills: ['React ', 'Sass ', 'React-Router', 'Transition Group']
        },
        {
            id: 6,
            date: '26/03/2020 - 01/04/2020',
            type: 'training',
            name: 'Lets Surf!',
            descr: 'Landing project, which was written using BEM method. Project made with responsive web design, sliders and modern templates with animation. Used libraries: animate.css, wow.js, slick) ',
            image: projectLetsSurfImage,
            skills: ['Gulp', 'Sass', 'jQuery', 'RWD'],
            live: 'https://bandrivtara.github.io/LetsSurf-sass-gulp4-bem/',
            code: 'https://github.com/bandrivtara/LetsSurf-sass-gulp4-bem.git'
        },
        {
            id: 7,
            date: '18/03/2020 - 26/03/2020',
            type: 'training',
            name: 'Motivation Board',
            descr: 'It is my first project. The main idea was to create interactive motivation board inspired by real one. Also on the right side of the board you can see my vision of development.',
            image: projectDeskImage,
            skills: ['JavaScript', 'jQuery', 'SVG'],
            live: 'https://bandrivtara.github.io/DeskOfPlans-js-jquery/',
            code: 'https://github.com/bandrivtara/DeskOfPlans-js-jquery.git'
        }
    ]
}