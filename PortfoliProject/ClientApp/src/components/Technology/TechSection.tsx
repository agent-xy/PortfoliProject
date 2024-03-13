import React from 'react'
import TechCard from './TechCard.tsx'
import CardList from './CardList.tsx';

// Tech
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiDotnet } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

// Plat
import { MdOutlineWebAsset } from "react-icons/md";
import { FaWindows } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";


interface TechItem {
  id: number;
  platforms: React.ReactNode[];
  icon: React.ReactNode;
  name: string;
}

const firstTech: TechItem[] = [
  { id: 1, platforms: [<MdOutlineWebAsset />], icon: <FaReact size={110} color='#53C1DE' />, name: "React JS" },
  { id: 2, platforms: [<MdOutlineWebAsset />], icon: <RiJavascriptFill  size={110} color='#F7E018' />, name: "JavaScript" },
  { id: 3, platforms: [<MdOutlineWebAsset />], icon: <BiLogoTypescript  size={110} color='#3179C7' />, name: "TypeScript" },
];

const secTech: TechItem[] = [
  { id: 4, platforms: [<MdOutlineWebAsset />, <FaWindows />, <FaLinux />, <FaApple />, <DiAndroid />], icon: <SiDotnet  size={110} color='#67217A' />, name: ".NET" },
  { id: 5, platforms: [<MdOutlineWebAsset />, <FaWindows />,], icon: <FaPython  size={110} color='#FFD342' />, name: "Python" },
];

const thrTech: TechItem[] = [
  { id: 6, platforms: [<MdOutlineWebAsset />], icon: <FaHtml5  size={110} color='#E56027' />, name: "Html" },
  { id: 7, platforms: [<MdOutlineWebAsset />], icon: <FaCss3Alt  size={110} color='#389AD6' />, name: "CSS" },
  { id: 7, platforms: [<MdOutlineWebAsset />], icon: <FaBootstrap  size={110} color='#62488A' />, name: "Bootstrap" },
  { id: 7, platforms: [<MdOutlineWebAsset />], icon: <SiTailwindcss  size={110} color='#38BDF8' />, name: "Tailwindcss" },
];



function renderList (list) {
  return list.map((tech, index) => 
    <TechCard key={index}
    platforms={tech.platforms}
    icon={tech.icon}
    name={tech.name}
    />
  );
}

// renderList(firstTech);

const TechSection = () => {
  return (
    <div className='section'>
      <CardList />
      <div className='flex flex-row gap-4'>
        <div className='flex flex-col gap-4'>
        {
          renderList(thrTech)
        }
        </div>
        <div className='flex flex-col gap-4 tech-card-mt-125'>
        {
          renderList(firstTech)
        }
        </div>
        <div className='flex flex-col gap-4 tech-card-mt-250'>
        {
          renderList(secTech)
        }
        </div>
      </div>
    </div>
  )
}

export default TechSection