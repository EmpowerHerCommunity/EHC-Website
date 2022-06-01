import React from 'react';
import Image from 'next/image';

const Partnership = () => {
  return (
    <div className='p-20'>
      <h2 className='patnership-title font-normal font-bold md:text-5xl text-2xl text-center mb-8'>In Partnership With</h2>
      <div className='grid justify-center grid-cols-3 gap-4'>
        <div><Image src='/partnership.jpg' width='313px' height='183px' alt='partnership' /></div>
        <div><Image src='/partnership.jpg' width='313px' height='183px' alt='partnership' /></div>
        <div><Image src='/partnership.jpg' width='313px' height='183px' alt='partnership' /></div>
        <div><Image src='/partnership.jpg' width='313px' height='183px' alt='partnership' /></div>
        <div><Image src='/partnership.jpg' width='313px' height='183px' alt='partnership' /></div>
        <div><Image src='/partnership.jpg' width='313px' height='183px' alt='partnership' /></div>
      </div>
    </div>
  )
}

export default Partnership