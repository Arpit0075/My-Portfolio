// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// display name on tha landing display
const header = {
  name: "Arpit Ebenezar Lal",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// para about yourself here
// update the image, at './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "Highly organized, detail-oriented Full Stack Developer with an experience of more than one year working in a startup. Excellent problem-solving and communication skills with the ability to work on tight deadlines. Passionate about creating innovative and user-friendly software solutions to improve user experience.",
};

//  skill
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "Node JS",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "React JS",
    // svg: '',
    faClass: "fab fa-react",
  },
  {
    name: "MongoDb",
    // svg: '',
    faClass: "fas fa-database",
  },
];

const section3Title = "Projects";
const projects = [
  {
    //  image in './styles/images.css' in #project1
    id: "project1",
    name: "E-commerce",
    skills: ["MERN"],
    githubUrl: "https://github.com/Arpit0075/ecommerce",
    liveUrl: "https://ecommerce918.netlify.app",
  },
  // {
  //   //  image in './styles/images.css' in #project2
  //   id: "project2",
  //   name: "Group Chat",
  //   skills: ["MERN Socketio"],
  //   icon: "https://img.icons8.com/color/48/000000/mongodb.png",
  //   githubUrl: "https://github.com/Arpit0075/chatApp",
  //   liveUrl: "https://chatapp978.netlify.app",
  // },
  {
    //  image in './styles/images.css' in #project3
    id: "project3",
    name: "Google-Drive-Clone",
    skills: ["REACT ", "FIREBASE"],
    githubUrl: "https://github.com/Arpit0075/google-drive-clone",
    liveUrl: "https://drive-clone-a509e.web.app/",
  },
  {
    //  image in './styles/images.css' in #project4
    id: "project4",
    name: "Weather Application",
    skills: ["REACT"],
    githubUrl: "https://github.com/Arpit0075/weather-app",
    liveUrl: "https://weather-app-09.netlify.app/",
  },
  {
    //  image in './styles/images.css' in #project5
    id: "project5",
    name: "Game of Thrones App",
    skills: ["HTML ", "CSS ", "JAVASCRIPT"],
    githubUrl: "https://github.com/Arpit0075/Mini-Projects/tree/main/GOT",
    liveUrl: "https://got-1.netlify.app/",
  },
  // {
  //   //  image in './styles/images.css' in #project6
  //   id: "project6",
  //   name: "Space Invaders",
  //   skills: ["HTML ", "CSS ", "JAVASCRIPT"],
  //   githubUrl: "https://github.com/Arpit0075/Space-Invaders",
  //   liveUrl: "https://space-invaders1.netlify.app/",
  // },
  {
    //  image in './styles/images.css' in #project6
    id: "project6",
    name: "Class Room",
    skills: ["MERN"],
    githubUrl: "https://github.com/Arpit0075/StudentTasks",
    liveUrl: "https://student-task1.netlify.app/",
  },
];

//contact
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "I am open to collaborate on projects. Thanks for checking my webpage, have a good one!",
  copyright: "Arpit Lal",
  contactUrl: "",
};

const social = {
  github: "https://github.com/Arpit0075",
  linkedin: "https://linkedin.com/in/arpit-lal123",
};

export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  contact,
  social,
  section2title,
  section3Title,
  section5Title,
};
