import portfolio from './Components/Project/Assets/portfolio.png';
import mongodb from './Components/Project/Assets/nosql.png';
const projects = [
    {
      id: 1,
      title: 'Smart Brain',
      src:  "https://www.youtube.com/embed/Lboe7wndoWA",
      link: 'https://smart-brain-x1.herokuapp.com/',
      code: 'https://github.com/krishan93985/smart-brain-x1',
      desc: [
           `Self-implemented authentication based User account App. detects faces in pictures`,
           `Authentication system uses JWT tokens`,
           `Dockerized backend containing microservices`,
           `CRUD operations on user profile`,
           `Using 3rd party API to configure profile image`,
           `AWS lambda triggers rank emoji`,
           `Code Splitting implemented`,
           `2 months to develop`,
           `TECH STACK : React, Node, Express, PostgreSql, Docker, Docker-Compose, CircleCi`,
           `Deployed on heroku Through CI/CD pipeline`
      ],
      type:"video",
      teamMembers:[]
    },
    {
      id: 2,
      title: 'Media Board',
      src: "https://www.youtube.com/embed/2Vf4AqlwTTI",
      code: 'https://github.com/krishan93985/Media-Board',
      link: 'https://media-board-krishan93985.vercel.app',
      desc: [`Allows Educators to screen record while showing content and media to their audience.`,
      `Various tools provided to write and draw contents on screen`,
      `Lets you record PC Screen & audio, User Facecam and Voice`,
      `Merging audio tracks using AudioContext Web API`,
      `Download work as pdf or Capture current screen`,
      `Array manipulation handles Slide Controls`,
      `Two weeks to develop`,
      `Work is saved in the browser to resume it in future`,
      `TECH STACK : Html5, CSS3, JavaScript, MediaStream, Canvas and AudioContext Web APIs, IndexedDB, LocalStorage, Array Data Structure, jspdf and html2canvas libraries`,
      `Deployed on vercel`
      ],
      type:"video",
      teamMembers:[
        {
          name:"Krishan Gopal",
          project:"https://github.com/krishan93985/Media-Board"
        },
        {
          name:"Prachi Goyal",
          project:"https://github.com/prachiigoyal/Media-Board"
        }
      ]
    },
    {
        id: 3,
        title: 'Robofriends',
        src:   "https://www.youtube.com/embed/HhOnoQBpoKA",
        code: 'https://github.com/krishan93985/robofriends',
        link: 'https://krishan93985.github.io/robofriends/',
        desc: [`This App filters Your Robo Friends fetched from JSON Placeholder API`,
              `Unit Testing using Jest, Enzyme, and Snapshots`,
              `Progressive Web App`,
              `One month to develop`,
              `TECH STACK : React, CircleCi and "Redux For State Management"`,
              `Deployed on Github Pages using CI/CD pipeline`
        ],
        type:"video",
        teamMembers:[] 
    },
    {
        id: 4,
        title: 'My Portfolio',
        src: portfolio,
        code: 'https://github.com/krishan93985/myportfolio',
        link: 'https://krishan93985.github.io/myportfolio/',
        desc: [`This is My Developer Portfolio`,
               `Styled with pure CSS3`,    
               `Website with a server to send Emails from employers like you`,
               `One week to develop`,
               `TECH STACK : React, Node, Express, and Nodemailer. Hosting on Github pages, Server on heroku`
        ],
        type:"image",
        teamMembers:[]
    },
    {
      id: 5,
      title: 'NoSQL RESTful API',
      src: mongodb,
      code: 'https://github.com/krishan93985/nosql-api',
      link: 'https://github.com/krishan93985/nosql-api',
      desc: [`This is a RESTful No-Sql API`,    
             `CRUD operations performed for user and vender separately`,
             `TECH STACK : MongoDB, Node, Express, Postman`
      ],
      type:"image",
      teamMembers:[]
    }  
];

export default projects;