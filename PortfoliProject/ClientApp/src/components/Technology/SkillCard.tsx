import React, { useState, useEffect, useRef } from 'react';

interface SkillCardProps {
  id: number;
  title: string;
  content: React.Element | null;
  backgroundImage: string;
  onCardClick: (id: number) => void;
  isOpen: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ id, title, content, backgroundImage, onCardClick, isOpen }) => {

  const [isCardOpen, setIsCardOpen] = useState(isOpen);
  const cardRef = useRef(null);

  useEffect(() => {
    setIsCardOpen(isOpen);
  }, [isOpen]);

  const handleClick = () => {
    setIsCardOpen(!isCardOpen);
    onCardClick(id);
  };

  return (
    <div className={` ${isOpen ? 'w-[600px]' :  'w-20'} select-none overflow-hidden h-full ease-in-out duration-300 rounded-3xl bg-cover  cursor-pointer bg-center    `} 
    style={{backgroundImage: `url(${window.location.origin + '/assets/images/' + backgroundImage}) `}} 
    onClick={handleClick}
    ref={cardRef}>
      <div className={`${isOpen? '' : 'bg-black bg-opacity-50'} 'ease-in-out p-2 h-full w-full '`}>
        {
          isOpen ? (
            <div>
              <div className='text-xl'>{title}</div>
              <div className=''>{content}</div>
            </div>
          ) : (
            <div className='h-full relative'>
              <div className='h-full flex items-center justify-center overflow-hidden whitespace-nowrap'>
                <div className='-rotate-90 text-white'>
                  {title}
                </div>
                <div className='absolute bottom-0 left-0 w-full h-auto'>
                  <div className='flex justify-center'>
                    <div className='text-center rounded-full bg-slate-700 text-white px-4 py-2'>
                      {id}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default SkillCard


{/* <div className='-rotate-90 text-white'>
      {title}
    </div> */}