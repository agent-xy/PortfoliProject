import React, { useState } from 'react';
import SkillCard from './SkillCard.tsx';
import { motion } from 'framer-motion';
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
import { GrWordpress } from "react-icons/gr";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";

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
  { id: 1, platforms: [<MdOutlineWebAsset />, <FaWindows />, <FaLinux />, <FaApple />, <DiAndroid />], icon: <SiDotnet  size={110} color='#67217A' />, name: ".NET" },
  { id: 2, platforms: [<MdOutlineWebAsset />, <FaWindows />,], icon: <FaPython  size={110} color='#FFD342' />, name: "Python" },
];

const thrTech: TechItem[] = [
  { id: 1, platforms: [<MdOutlineWebAsset />], icon: <FaHtml5  size={110} color='#E56027' />, name: "Html" },
  { id: 2, platforms: [<MdOutlineWebAsset />], icon: <FaCss3Alt  size={110} color='#389AD6' />, name: "CSS" },
  { id: 3, platforms: [<MdOutlineWebAsset />], icon: <FaBootstrap  size={110} color='#62488A' />, name: "Bootstrap" },
  { id: 4, platforms: [<MdOutlineWebAsset />], icon: <SiTailwindcss  size={110} color='#38BDF8' />, name: "TailwindCSS" },
];

const otherTech: TechItem[] = [
  { id: 1, platforms: [<GrWordpress />], icon: <GrWordpress  size={110} color='#1B769C' />, name: "Wordpress" },
  { id: 2, platforms: [<SiAdobeaftereffects />], icon: <SiAdobeaftereffects  size={110} color='#9091C7' />, name: "After Effects" },
  { id: 3, platforms: [<SiAdobeillustrator />], icon: <SiAdobeillustrator  size={110} color='#FF9B00' />, name: "Illustrator" },
  { id: 4, platforms: [<SiAdobephotoshop />], icon: <SiAdobephotoshop  size={110} color='#47A2E6' />, name: "Photoshop" },
  { id: 5, platforms: [<SiAdobexd />], icon: <SiAdobexd  size={110} color='#EE71E3' />, name: "XD" },
  { id: 6, platforms: [<SiCanva />], icon: <SiCanva  size={110} color='#15A0CC' />, name: "Canva" },
  { id: 7, platforms: [<IoLogoFigma />], icon: <IoLogoFigma  size={110} color='#1E1E1E' />, name: "Figma" },
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

  const rendList = renderList(techList);

  // if (rendList.length >=  5) {
  //   return (
  //     // Itt legyen lapozni, ha legalább 5 kártya van
  //     <div>

  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className='flex flex-row gap-2'>
  //       {
  //         rendList
  //       }
  //     </div>
  //   );
  // }
  return (
    <div className='flex flex-row gap-2'>
      {
        rendList
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
    { id: 5, title: "Other Software", content: listStyle(otherTech), backgroundImage: "heroImage6.jpg" }
  ];

  return (
    <div className="h-[400px] flex justify-start flex-nowrap gap-2">
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

{/* <motion.div className='mb-8'
initial={{ opacity: 0, y: 100 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7 }}
> */}