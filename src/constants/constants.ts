export const pdf = "/Resume.pdf";

interface IProjects extends Array<IProject> {}

interface IProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
  source?: string;
  visit?: string;
  id: number;
}

export const projects: IProjects = [
  {
    title: "DevNet",
    description:
      "Full Stack MERN Application made with Redux, GitHub API, Gravatar API, and Bcryptjs",
    image: "/images/1.png",
    tags: ["React", "Redux", "Node", "MongoDB", "Express"],
    source: "https://github.com/yamgarcia/DevNet",
    visit: "https://arcane-dawn-30816.herokuapp.com/",
    id: 0,
  },
  {
    title: "Be The Hero",
    description:
      "Website and Mobile App built to assist Non-Governmental Organizations to find for abandoned animals.",
    image: "/images/3.png",
    tags: ["React", "React Native", "Node", "SQLite3", "Express"],
    source: "https://github.com/yamgarcia/NGOs-Application",
    visit: "",
    id: 1,
  },
  {
    title: "Proffy",
    description:
      "Web and mobile applications built to help teachers and students to connect and do business.",
    image: "/images/2.png",
    tags: ["React", "React Native", "Node", "SQLite3", "Express"],
    source: "https://github.com/yamgarcia/Proffy",
    visit: "",
    id: 2,
  },
  {
    title: "Next-Blog",
    description:
      "Blog based in Next JS inspired by the sites Dev.to and Medium that allows users to Login with Google.",
    image: "/images/4.png",
    tags: ["React", "Next JS", "Firebase", "Typescript", "Google API"],
    source: "https://github.com/yamgarcia/next-app",
    visit: "",
    id: 3,
  },
];

interface ITimeLineDatas extends Array<ITimeLineData> {}

interface ITimeLineData {
  year: number;
  text: string;
}

export const TimeLineData: ITimeLineDatas = [
  { year: 2017, text: "Started coding to help my team" },
  { year: 2018, text: "Began my studies at BCIT" },
  { year: 2019, text: "Started maintaining websites" },
  { year: 2020, text: "Became an SEM Manager" },
  { year: 2021, text: "Landed my first developer job" },
];
