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
           `This App detects faces in your images by making use of a MACHINE LEARNING API ( Clarifai API )`,
           `It registers and handles User profiles`,
           `1 month to develop this project in learning phase`,
           `TECH STACK :- React, Node, Express and PostgreSql. Deployed on heroku`
      ]
    },
    {
        id: 2,
        title: 'Robofriends',
        src:   robofriends,
        code: 'https://github.com/krishan93985/robofriends',
        link: 'https://krishan93985.github.io/robofriends/',
        desc: [`This App filters Your Robo Friends`,
              `It uses JSON Placeholder API to fetch your friends`,
              `2 weeks to develop this project in learning phase`,
               `TECH STACK :- React and "Redux For State Management ". Deployed on Github Pages`
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
               `1 week to develop this project`,
               `TECH STACK :- React, Node, Express, and Nodemailer. Hosting on Github pages, Server on heroku`
        ] 
    }  
];

export default projects;