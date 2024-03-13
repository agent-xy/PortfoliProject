import React from 'react'

const NavMenu = () => {
  return (
    <div className=' flex flex-col h-full justify-between items-center fixed p-2 items-stretch'>
      <div className='rounded-full bg-slate-800 flex flex-col h-full justify-between'>
        <div className='m-2 rounded-xl  p-1 gap-2 flex flex-col items-center'>
          asd
        </div>
        <div className=' m-2 rounded-xl  p-1 gap-2 flex flex-col items-center'>
          <div className='bg-zinc-300 rounded-xl rounded-xl nav-menu-item p-2 flex justify-center items-center'>X</div>
          <div className='bg-zinc-300 rounded-xl rounded-xl nav-menu-item p-2 flex justify-center items-center'>X</div>
          <div className='bg-zinc-300 rounded-xl rounded-xl nav-menu-item p-2 flex justify-center items-center'>X</div>
        </div>
        <div className='m-2 rounded-xl  p-1 gap-2 flex flex-col items-center'>
          asd
        </div>
      </div>
    </div>
  )
}

export default NavMenu