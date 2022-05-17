import React from 'react'

const Form = () => {
  return (
    <div>
      <form className="form text-dark">
        <div className="flex flex-wrap sm:flex-nowrap gap-4">
          <div className="input-group w-full py-2 sm:flex-1">
            <label htmlFor="name" className="uppercase text-lg">name</label>
            <input type="text" id='name' className="outline-none border-b-2 border-primary w-full px-3 py-2.5 my-2" placeholder='Enter your name' />
            </div>
          <div className="input-group w-full py-2 sm:flex-1">
            <label htmlFor="email" className="uppercase text-lg">email</label>
            <input type="text" id='email' className="outline-none border-b-2 border-primary w-full px-3 py-2.5 my-2" placeholder='Enter your email address' />
            </div>
          </div>
        <div className="flex flex-wrap sm:flex-nowrap gap-4">
          <div className="input-group w-full py-2 sm:flex-1">
            <label htmlFor="mobile-number" className="uppercase text-lg">mobile number</label>
            <input type="text" id='mobile-number' className="outline-none border-b-2 border-primary w-full px-3 py-2.5 my-2" placeholder='Enter your mobile number' />
            </div>
          <div className="input-group w-full py-2 sm:flex-1">
            <label htmlFor="country" className="uppercase text-lg">Nationality</label>
            <input type="text" id='country' className="outline-none border-b-2 border-primary w-full px-3 py-2.5 my-2" placeholder='Enter your country' />
            </div>
          </div>
        <div className="">
          <div className="input-group w-full py-2">
            <label htmlFor="" className="uppercase text-xl">message</label>
            <textarea name="" id="" cols="30" rows="10" className="outline-none border-b-2 border-primary w-full px-3 py-2.5 my-2" placeholder='Hello there...'></textarea>
            </div>
          </div>
          <div className="input-group w-full py-2">
            <button className="bg-primary text-white text-3xl w-full p-3">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form