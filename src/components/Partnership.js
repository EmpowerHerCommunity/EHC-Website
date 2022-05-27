import React from 'react';
import Image from 'next/image';

const Partnership = () => {
  return (
    <div className='p-20'>
      <h2>In Partnership With</h2>
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