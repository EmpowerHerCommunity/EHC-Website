import React from 'react'

const NewsLetter = () => {
  return (
    <section className="bg-primary bg-opacity-10 p-8">
      <div className='container mx-auto py-10'>
        <div className="flex flex-wrap gap-6 text-dark">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl w-full lg:w-1/2 lg:flex-auto">
            Join our NewsLetter
          </h2>
          <div className="w-full lg:w-5/12 lg:flex-auto">
            <p className="">
            Subscribe to our news letter to receive updates
            </p>
            <div className="flex gap-2 mt-2">
              <input type="email" name="" className="w-2/3 flex-auto py-3 px-4" placeholder='Enter email address' />
              <button className="bg-primary text-white w-1/3 flex-auto">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter