import hoverEffect from "hover-effect";
import one from "../../assets/handwriter2.webp";
import two from "../../assets/spofity2.png";
import { SiRedux, SiMaterialui, SiReactrouter } from "react-icons/si";
import { FaReact, FaSpotify } from "react-icons/fa";

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
    link: "https://github.com/sarveshh/spofity",
    tech: [
      { name: "React JS", icon: <FaReact /> },
      { name: "React Router", icon: <SiReactrouter /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Material UI", icon: <SiMaterialui /> },
      { name: "Spotify API", icon: <FaSpotify /> },
    ],
  },
];
