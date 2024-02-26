// imports skills image from assests folder
import java from "./assets/skills/java.png";
import css from "./assets/skills/css.png";
import js from "./assets/skills/js.png";
import git from "./assets/skills/git.png";
import html from "./assets/skills/html.png";
import react from "./assets/skills/react.png";

// log & myPic
import person from "./assets/myPic.jpg";
import logo from "./assets/myLogo.png";

// project pictures
import blinkit from "./assets/projects/blinkit.png";
import chatapp from "./assets/projects/chat app.png";
import googlesheet from "./assets/projects/google sheet.png";
import tictactoe from "./assets/projects/tictactoe.png";
import timer from "./assets/projects/timer app.png";
import todo from "./assets/projects/todo.png";
import weather from "./assets/projects/weather app.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdOutlinePermContactCalendar } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiProjectorLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";

export const myDatas = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Software Developer",
    firstName: "PRAKASH",
    lastName: "S",
    btnText: "Hire Me",
    image: person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Software Development",
      },
      {
        count: "10+",
        text: "Projects Created in my career",
      },
    ],
  },
  skills: {
    title: "Tech Stacks",
    subtitle: "Professional Skills",
    skills_content: [
      {
        name: "Java",
        para: "Backend",
        logo: java,
        percentage: 90,
      },
      {
        name: "HTML5",
        para: "Frontend",
        logo: html,
        percentage: 80,
      },
      {
        name: "CSS3",
        para: "Frontend",
        logo: css,
        percentage: 75,
      },
      {
        name: "React",
        para: "Frontend",
        logo: react,
        percentage: 60,
      },
      {
        name: "Javascript",
        para: "Frontend",
        logo: js,
        percentage: 70,
      },
      {
        name: "GIT",
        para: "version",
        logo: git,
        percentage: 80,
      },
    ],
    icon: MdArrowForward,
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    project_content: [
      {
        title: "Blinkit Clone",
        image: blinkit,
        live_url:"https://prakashs-dev.github.io/blinkit-clone/",
        git_repo:"https://github.com/prakashs-dev/blinkit-clone.git",
      },
      {
        title: "Chat App",
        image: chatapp,
        live_url:"",
        git_repo:"https://github.com/prakashs-dev/FrontEnd-Practice.git",
      },
      {
        title: "Google Sheet Clone",
        image: googlesheet,
        live_url:"https://prakashs-dev.github.io/Google-Sheets-Clone/",
        git_repo:"https://github.com/prakashs-dev/Google-Sheets-Clone.git",
      },
      {
        title: "Tic Tac Toe Game",
        image: tictactoe,
        live_url:"https://prakashs-dev.github.io/game_tic-tac-toe/",
        git_repo:"https://github.com/prakashs-dev/game_tic-tac-toe.git",
      },
      {
        title: "Timer App",
        image: timer,
        live_url:"https://prakashs-dev.github.io/Timer-App/",
        git_repo:"https://github.com/prakashs-dev/Timer-App.git",
      },
      {
        title: "TODO App",
        image: todo,
        live_url:"https://prakash-todo-app.netlify.app/",
        git_repo:"https://github.com/prakashs-dev/React-JS/tree/main/todo",
      },
      {
        title: "Weather App",
        image: weather,
        live_url:"https://prakash-weather-app.netlify.app/",
        git_repo:"https://github.com/prakashs-dev/React-JS/tree/main/weather-app",
      },
    ],
  },

  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "Mail",
        icon: GrMail,
        link: "mailto:spraks99@gmail.com",
      },
      {
        text: "Whatapp",
        icon: FaWhatsapp,
        link: "https://wa.me/6382530569",
      },
      {
        text: "Github",
        icon: FaGithub,
        link: "https://github.com/prakashs-dev",
      },
      {
        text: "LinkedIn",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/prakash-s-2656ba206/",
      },
      {
        text: "Leetcode",
        icon: SiLeetcode,
        link: "https://leetcode.com/spraks99/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
  Resume: {
    url: "https://drive.google.com/file/d/16m193dE6lZUDHXJsZuUT3w0Flaz8mY5R/view",
  },
};
