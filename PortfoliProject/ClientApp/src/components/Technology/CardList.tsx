import React, { useState } from 'react';
import SkillCard from './SkillCard.tsx';

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
import TechCard from './TechCard.tsx';

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
  { id: 7, platforms: [<MdOutlineWebAsset />], icon: <SiTailwindcss  size={110} color='#38BDF8' />, name: "TailwindCSS" },
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

function listStyle(techList) {
  return (
    <div className='flex flex-row gap-2'>
      {
        renderList(techList)
      }
    </div>
  );
}

const CardList = () => {

  const [activeCard, setActiveCard] = useState(1);

  const handleCardClick = (cardId) => {
    setActiveCard((prevActiveCard) => {
      if (prevActiveCard === cardId) {
        return null;
      } else {
        return cardId;
      }
    });
  };


  const cardDataList = [
    { id: 0, title: "Web Technologies", content: listStyle(thrTech), backgroundImage: "skillCardBackground.jpg" },
    { id: 1, title: "Frontend", content: listStyle(firstTech), backgroundImage: "heroImage2.jpg" },
    { id: 2, title: "Backend", content: listStyle(secTech), backgroundImage: "heroImage3.jpg" },
    { id: 3, title: "Database", content: "Content for Card 4", backgroundImage: "heroImage4.jpg" },
    { id: 4, title: "SEO", content: "Content for Card 5", backgroundImage: "heroImage5.jpg" },
    { id: 5, title: "Other Software", content: "Content for Card 6", backgroundImage: "heroImage6.jpg" }
  ];

  return (
    <div className="skill-card-container flex justify-start flex-nowrap gap-2">
      {cardDataList.map((cardData, index) => (
        <div className='w-auto h-full' key={cardData.id}>
          <SkillCard
            id={cardData.id}
            title={cardData.title}
            content={cardData.content}
            backgroundImage={cardData.backgroundImage}
            onCardClick={handleCardClick}
            isOpen={activeCard === index}
          />
        </div>
      ))}
    </div>
  )
}

export default CardList 