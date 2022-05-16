import React from 'react'

const Form = () => {
  return (
    <div>
      <form className="form">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        <div className="">
          <div className="input-group w-full">
            <label htmlFor="" className=""></label>
            <input type="text" id='' className="border-b-2 border-primary" placeholder='Enter your ' />
            </div>
          </div>
          <div className="input-group w-full">
            <button className="text-2xl">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form