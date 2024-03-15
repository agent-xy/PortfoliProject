import React from 'react'
import TechCard from './TechCard.tsx'
import CardList from './CardList.tsx';

const job = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Webdesigner", "SEO", "Graphic", "Video Editor", "Ad Manager", "Ad creator", "Social Media Manager"]

function renderJob() {
  return (
    job.map((jobTitle, key) => (
      <div className="rounded-3xl p-2 border border-black cursor-pointer" key={key}>{jobTitle}</div>
    ))
  );
}

const TechSection = () => {
  return (
    <div className='section'>
      
      <div className="flex flex-row justify-between">
        <div className="w-2/3 h-full">
          <CardList />
        </div>
        <div className="flex flex-col w-1/3 h-full gap-2">
          <div className="w-full h-full bg-[#E8E8E8] p-4 rounded-3xl">
            <p>Tapasztalat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore accusantium magni, sint nisi rerum obcaecati architecto voluptas, eaque dolore temporibus doloribus maiores iusto, illo esse eum sit accusamus eligendi illum.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {renderJob()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechSection