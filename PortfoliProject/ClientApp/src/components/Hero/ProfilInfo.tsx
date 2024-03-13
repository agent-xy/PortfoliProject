import React from 'react';

const ProfilInfo = () => {
  return (
    <div className='bg-white rounded-tl-3xl rounded-br-3xl bg-slate-200 relative invert-radius-rt '>
      <div className='absolute w-full h-full invert-radius-lb '>

      </div>
      <div className='flex flex-row'>
        <div className='p-2 aspect-w-1 aspect-h-1 w-1/2'>
          <img className='object-cover w-full h-full rounded-3xl' src={window.location.origin + '/assets/images/profile.jpg'} alt="" />
        </div>
        <div className='p-2 flex flex-col w-1/2 justify-between'>
          <p className='h-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloribus adipisci esse ipsam qui sunt repellat, eos totam temporibus doloremque deserunt asperiores excepturi. Perspiciatis, vitae veritatis. Deserunt laboriosam corporis provident.</p>
          <div>
            <div className='btn-1 float-end'>Tovább</div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ProfilInfo