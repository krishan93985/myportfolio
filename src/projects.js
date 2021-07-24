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
           `This Web App detects Faces in a given image using Clarifai API`,
           `User profile with CRUD operations`,
           `Authentication using JWT tokens`,
           `Dockerized backend with microservices`,
           `Profile image configuration using Imagekit API`,
           `AWS lambda, Code Splitting`,
           `Time Period : 2 months`,
           `TECH STACK : React, Node, Express, PostgreSQL, Docker, Docker-Compose, CircleCi, Heroku, CI/CD pipeline`,
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
      desc: [`A Web App for online Educators where they can record screen while presenting content and media to their audience.`,
      `Various tools to write and draw content`,
      `Record PC Screen & audio, User Facecam and Voice`,
      `Download work as pdf, take Screenshots`,
      `A Gallery to store recorded media`,
      `Resume your work from where you left off`,
      `Time Period : Three weeks`,
      `TECH STACK : Html5, CSS3, JavaScript, MediaStream, Canvas and AudioContext Web APIs, IndexedDB, LocalStorage, Array Data Structure`
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
        desc: [`This Web App dynamically filters Robo Friends fetched from JSON Placeholder API`,
              `Unit Testing using Jest, Enzyme, and Snapshots`,
              `Progressive Web App`,
              `Time Period : One month`,
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
        desc: [`This is My Developer Portfolio website`,
               `Styled with pure CSS3`,    
               `It has a server to send me Emails from employers`,
               `Time Period : One week`,
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
             `CRUD operations performed for user and vender mini-routes`,
             `TECH STACK : MongoDB, Node, Express, Postman`
      ],
      type:"image",
      teamMembers:[]
    }  
];

export default projects;