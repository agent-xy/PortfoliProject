import React from 'react'
import TechCard from './TechCard.tsx'
import CardList from './CardList.tsx';

const TechSection = () => {
  return (
    <div className='section'>
      
      <div className="flex flex-row justify-between">
        <div className="w-2/3 h-full">
          <CardList />
        </div>
        <div className="w-1/3 h-full">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore accusantium magni, sint nisi rerum obcaecati architecto voluptas, eaque dolore temporibus doloribus maiores iusto, illo esse eum sit accusamus eligendi illum.</p>
        </div>
      </div>
    </div>
  )
}

export default TechSection