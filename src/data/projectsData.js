import boxfolio from "../assets/img/boxfolio.JPG";
import scorecard from "../assets/img/ScoreCard.JPG";
import schedule from "../assets/img/Schedule.JPG";
import botimg from "../assets/img/KBbot.JPG";
import schedule2 from "../assets/img/Schedule2.JPG";

///////////////gif///////////////

import ScheduleGif from "../assets/img/Schedule.gif";
import SchoreCardGif from "../assets/img/ScoreCard.gif";

export const projectsData = [
  {
    id: 1,
    projectName: "BoxFolio",
    projectDesc:
      "BoxFolio is a 3D Portfolio project I inspired the idea from a famous painter works, I have learn and implemented new 3D skills and animation using React Three Fiber, drei and Gsap for animation animation, I have a full stack role in this having built all of it from scratch.",
    tags: ["TypeScript", "ReactJs", "ThreeJs", "R3F", "CSS"],
    code: "https://github.com/abdou-88/PainterPortfolio",
    demo: "https://abdou-88.github.io/PainterPortfolio/",
    linkD: true,
    image: boxfolio,
  },
  {
    id: 2,
    projectName: "Team ScoreCard",
    projectDesc:
      "This project is a SharePoint webpart that exports data from Power BI reports and count the KPI metrics like (Productivity, Availability and Quality). Also, it has a configuration panel that uses advanced pnp/spfx property controls, I have a full stack role in this having built all of it from scratch.",
    tags: ["TypeScript", "ReactJs", "HTML", "CSS", "MS Graph"],
    code: "https://github.com/abdou-88/TeamManagment",
    demo: SchoreCardGif,
    linkD: false,
    image: scorecard,
  },
  {
    id: 3,
    projectName: "Scheduler V2",
    projectDesc:
      "This project is the version 2 of the first Schedule, during the migration to SPO the new version needs to be created as a SPFX solution. The new schedule has more features like individual views and integration with MS Graph to fetch the info needed directly from the user profile.",
    tags: ["TypeScript", "ReactJS", "HTML", "CSS"],
    code: "https://github.com/abdou-88",
    demo: ScheduleGif,
    linkD: false,
    image: schedule2,
  },
  {
    id: 4,
    projectName: "Team Schedule",
    projectDesc:
      "This project is a JavaScript timeline calendar. it helps leaders and supervisors to easily schedule their teams, it has many features like checking for any gaps or labor law mistakes. Also, it counts and compare hours for each agent. I have a full stack role in this having built all of it.",
    tags: ["HTML", "CSS", "Javascript"],
    code: "https://github.com/abdou-88/Schedule-JS",
    demo: "#",
    linkD: false,
    image: schedule,
  },
  {
    id: 5,
    projectName: "Knowledge Assistant Bot",
    projectDesc:
      "This project is a PVA bot integrated into a SharePoint extension popup, that helps the operation team to get the info needed from the knowledge base quickly.",
    tags: ["TypeScript", "ReactJS", "HTML", "CSS", "PVA"],
    code: "https://github.com/abdou-88",
    demo: "#",
    linkD: false,
    image: botimg,
  },

  {
    id: 6,
    projectName: "Sharepoint Lists Webpart",
    projectDesc:
      "This is a sharepoint extension tool that allows the users to quickly create a customizable popup button any where, to manage the items of any SP list (Add, Edit, Delete).",
    tags: ["TypeScript", "ReactJS", "HTML", "CSS"],
    code: "https://github.com/abdou-88",
    demo: "#",
    linkD: false,
  },
];

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
