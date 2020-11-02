import robofriends from './Components/Project/Assets/robofriends.png';
import portfolio from './Components/Project/Assets/portfolio.png';
import smartbrain from './Components/Project/Assets/smartbrain.png';
const projects = [
    {
      id: 1,
      title: 'Smart Brain',
      src: smartbrain,
      link: 'https://smart-brain-x1.herokuapp.com/',
      code: 'https://github.com/krishan93985/smart-brain-x1',
      desc: [
           `Self-implemented authentication based User account App. detects faces in pictures`,
           `Authentication system uses JWT tokens`,
           `Dockerized backend containing microservices`,
           `CRUD operations on user profile`,
           `AWS lambda triggers rank emoji`,
           `2 months to develop`,
           `TECH STACK : React, Node, Express, PostgreSql, Docker, Docker-Compose, CircleCi`,
           `Deployed on heroku Through CI/CD pipeline`
      ]
    },
    {
        id: 2,
        title: 'Robofriends',
        src:   robofriends,
        code: 'https://github.com/krishan93985/robofriends',
        link: 'https://krishan93985.github.io/robofriends/',
        desc: [`This App filters Your Robo Friends fetched from JSON Placeholder API`,
              `Unit Testing using Jest, Enzyme, and Snapshots`,
              `Progressive Web App`,
              `1 month to develop`,
              `TECH STACK : React, CircleCi and "Redux For State Management"`,
              `Deployed on Github Pages using CI/CD pipeline`
        ] 
      },
    {
        id: 3,
        title: 'My Portfolio',
        src: portfolio,
        code: 'https://github.com/krishan93985/myportfolio',
        link: 'https://krishan93985.github.io/myportfolio/',
        desc: [`This is My Developer Portfolio`,    
               `It is a kind of static website with a server to send Emails from employers like you`,
               `1 week to develop`,
               `TECH STACK : React, Node, Express, and Nodemailer. Hosting on Github pages, Server on heroku`
        ] 
    }  
];

export default projects;