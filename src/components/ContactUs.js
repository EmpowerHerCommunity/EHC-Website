import React from 'react'

const ContactUs = () => {
  return (
    <div className='text-dark max-w-2xl'>
      <h1 className="text-5xl sm:text-6xl lg:text-7xl md:my-5">Contact Us</h1>
      <p className="text-2xl my-5">
        Ask us anything, we are always eager to answers any questions you may have.
      </p>
      <img src="/contact-image.svg" alt="" className="hidden lg:inline-block my-5" />
    </div>
  )
}

export default ContactUs