import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';


const Description = () => {
  return (
     <div className='m-12'>
       <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
         <div>
           <Image src='/events2.jpg' width='498px' height='350px' />
         </div>
         <div>
         <h2>Who Are We?</h2>
         The Empower Her Community is a tech-based community focused on training and promoting women in the field of information technology for free. We aim to spread awareness for opportunities in information technology and incorporate as many women as possible.
         <div className='leading-6 mt-2 mb-12'> 
            <button className='bg-fuchsia-900  py-2 px-4  hover:border-transparent rounded w-40'>
              <span className={styles.span2}>
                Join Us Today 
              </span>
              </button>
          </div>
              <div className='grid grid-cols-3 gap-8'>
      <div>
<Image src='/1.png' width='36px' height='36px' />
</div>
<div>
<Image src='/2.png' width='36px' height='36px' />
</div>
<div>
<Image src='/3.png' width='36px' height='36px' />
</div>
<div>
<Image src='/5.png' width='103px' height='61px' />
</div>
<div>
<Image src='/6.png' width='103px' height='61px' />
</div>
<div>
<Image src='/4.png' width='103px' height='61px' />
</div>
</div>
         </div>

       </div>
     </div>
  )
}

export default Description;




// The Empower Her Community is a tech-based community focused on training and promoting women in the field of information technology for free. We aim to spread awareness for opportunities in information technology and incorporate as many women as possible.