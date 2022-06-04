import one from "../../assets/handwriter2.webp";
import two from "../../assets/spofity2.webp";
import {
  SiRedux,
  SiMaterialui,
  SiReactrouter,
  SiFirebase,
  SiExpress,
  SiNintendogamecube,
} from "react-icons/si";
import { FaReact, FaSpotify, FaNodeJs } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { MdOutlineSettingsVoice } from "react-icons/md";

export const ProjectsData = [
  {
    id: 1,
    title: "Spofity",
    description: "Your Spotify Supercharged. Seriously",
    img: one,
    img2: two,
    distort: two,
    github: "https://github.com/sarveshh/spofity",
    owner: "Sarvesh Patil",
    date: "2020",
    link: "https://spotifyadvanced.netlify.app/",
    tech: [
      { name: "React JS", icon: <FaReact /> },
      { name: "React Router", icon: <SiReactrouter /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Material UI", icon: <SiMaterialui /> },
      { name: "Spotify API", icon: <FaSpotify /> },
      { name: "ApexCharts", icon: <BsBarChartFill /> },
    ],
  },
  {
    id: 2,
    title: "Walletnode",
    description: "Keep track of your expenses. Seamlessly",
    img: one,
    img2: two,
    distort: two,
    github: "https://github.com/sarveshh/walletnode",
    owner: "Sarvesh Patil",
    date: "2021",
    link: "https://walletnode.netlify.app/",
    tech: [
      { name: "React JS", icon: <FaReact /> },
      { name: "React Router", icon: <SiReactrouter /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Material UI", icon: <SiMaterialui /> },
      { name: "Voice Recognition", icon: <MdOutlineSettingsVoice /> },
      { name: "Chart JS", icon: <BsBarChartFill /> },
    ],
  },
  {
    id: 3,
    title: "Handwriterr",
    description:
      "Computerised text to your custom handwriting style with multilingual Optical CHaracter Recognition",
    img: one,
    img2: two,
    distort: two,
    github: "https://github.com/sarveshh/handwriter",
    owner: "Sarvesh Patil",
    date: "2020",
    link: "https://sarveshh.github.io/handwriter/",
    tech: [
      { name: "Node Js", icon: <FaNodeJs /> },
      { name: "Express Js", icon: <SiExpress /> },
      { name: "Voice Recognition", icon: <MdOutlineSettingsVoice /> },
      { name: "Chart JS", icon: <BsBarChartFill /> },
      { name: "Tesseract Js", icon: <SiNintendogamecube /> },
    ],
  },
];
