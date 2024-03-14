import React from 'react'
import { motion } from 'framer-motion';
import ProfilInfo from './ProfilInfo.tsx'
import DesignInfo from './DesignInfo.tsx'

const Hero = () => {
  return (
    <div className='h-screen section pt-14'>
      <motion.div className='mb-8'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className='text-9xl inline-block font-semibold font-sans'>Ez itt portfolió projekt</h1>
      </motion.div>
      <motion.div className='bg-cover bg-center h-4/6 rounded-3xl flex flex-col justify-between' style={{ backgroundImage: `url(${window.location.origin + '/assets/images/heroImage6.jpg'})` }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        // initial={{ opacity: 0, scale: 0.7 }}
        // animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className='flex justify-between'>
          <div className='w-2/5'>
            <ProfilInfo />
          </div>
          <motion.div className='w-2/5'
            // initial={{ opacity: 0, x: 100 }}
            // animate={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.7, delay: 0.9 }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <DesignInfo />
          </motion.div>
        </div>
        <div className='flex justify-end'>
          <div className='w-2/5'>
            
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero