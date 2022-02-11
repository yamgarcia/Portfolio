export const pdf = "/Resume.pdf";

interface IProjects extends Array<IProject> {}

interface IProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
  source: string;
  visit: string;
  id: number;
}

export const projects: IProjects = [
  {
    title: "MERN Memories",
    description:
      "Using React, Node.js, Express & MongoDB  Full Stack MERN Application -",
    image: "/images/1.png",
    tags: ["Mongo", "Express", "React", "Node"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 0,
  },
  {
    title: "E-Commerce",
    description:
      "React & JavaScript topics, as well as how to us you will be able to add to your portfolio..",
    image: "/images/2.png",
    tags: ["React", "JavaScript"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 1,
  },
  {
    title: "WebRTC App",
    description:
      "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
    image: "/images/3.png",
    tags: ["React", "WebRTC"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 2,
  },
  {
    title: "Unichat",
    description:
      "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
    image: "/images/4.png",
    tags: ["React", "ChatEngine", "Firebase"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 3,
  },
];

interface ITimeLineDatas extends Array<ITimeLineData> {}

interface ITimeLineData {
  year: number;
  text: string;
}

export const TimeLineData: ITimeLineDatas = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
