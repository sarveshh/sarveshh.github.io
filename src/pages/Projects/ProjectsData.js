import handwriterPoster from "../../assets/handwriter2.webp";
import spotifyPoster from "../../assets/spofity2.webp";
import markdownerrPoster from "../../assets/markdownerr.webp";
import walletnodePoster from "../../assets/walletnode.webp";
import {
  SiRedux,
  SiMaterialui,
  SiReactrouter,
  SiFirebase,
  SiExpress,
  SiNintendogamecube,
  SiJquery,
  SiLodash,
} from "react-icons/si";
import { FaReact, FaSpotify, FaNodeJs } from "react-icons/fa";
import { BsBarChartFill, BsBootstrapFill } from "react-icons/bs";
import { MdOutlineSettingsVoice } from "react-icons/md";

export const ProjectsData = [
  {
    id: 1,
    title: "Spofity",
    description:
      "Your Spotify Supercharged. Seriously. Powered by the official Spotify API. ",
    img: spotifyPoster,
    img2: spotifyPoster,
    distort: walletnodePoster,
    github: "https://github.com/sarveshh/spofity",
    owner: "Sarvesh Patil",
    date: "2022",
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
    description: "Keep track of your expenses. Seamlessly.",
    img: walletnodePoster,
    img2: walletnodePoster,
    distort: spotifyPoster,
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
      "Computerised text to your custom handwriting style with multilingual Optical Character Recognition",
    img: handwriterPoster,
    img2: handwriterPoster,
    distort: markdownerrPoster,
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
  {
    id: 4,
    title: "Markdownerr",
    description:
      "A react project to preview, generate and share markdowns. With 10+ templates of top usability of markdowns, markdownerr makes writing blogs, ReadMe's a breeze.",
    img: markdownerrPoster,
    img2: markdownerrPoster,
    distort: handwriterPoster,
    github: "https://github.com/sarveshh/markdownerr",
    owner: "Sarvesh Patil",
    date: "2020",
    link: "https://sarveshh.github.io/markdownerr/",
    tech: [
      { name: "Node Js", icon: <FaNodeJs /> },
      { name: "Express Js", icon: <SiExpress /> },
      { name: "Jquery", icon: <SiJquery /> },
      { name: "Bootstrap", icon: <BsBootstrapFill /> },
      { name: "Lodash", icon: <SiLodash /> },
    ],
  },
];
