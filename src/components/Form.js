import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
  const [state, handleSubmit] = useForm("xyyolabb");
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    nationality: "",
    message: ""
  });
  const updateForm = (key, value) => {
    setForm(prevState => { return { ...prevState, [key]: value } })
  }
  useEffect(() => {
    console.log(state)
    if (state.succeeded && !state.submitting) {
      console.log("Thanks for joining!");
      setForm({
        name: "",
        email: "",
        number: "",
        nationality: "",
        message: ""
      });
    }
  }, [state.submitting])
  return (
    <div>
      <form className="form text-dark" onSubmit={() => handleSubmit}>
        <div className="flex flex-wrap sm:flex-nowrap gap-4">
          <div className="input-group w-full py-2 sm:flex-1">
            <label htmlFor="name" className="uppercase text-lg">name</label>
            <input
              type="text"
              name="name"
              id='name'
              className="outline-none border-b-2 border-primary w-full px-3 py-2.5 my-2"
              placeholder='Enter your name'
              value={form.name}
              onChange={(e) => updateForm("name", e.target.value)}
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
            />
          </div>
          <div className="input-group w-full py-2 sm:flex-1">
            <label htmlFor="email" className="uppercase text-lg">email</label>
            <input
              type="email"
              name='email'
              id='email'
              className="outline-none border-b-2 border-primary w-full px-3 py-2.5 my-2"
              placeholder='Enter your email address'
              value={form.email}
              onChange={(e) => updateForm("email", e.target.value)}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap gap-4">
          <div className="input-group w-full py-2 sm:flex-1">
            <label htmlFor="mobile-number" className="uppercase text-lg">mobile number</label>
            <input
              type="text"
              name="mobile number"
              id='mobile-number'
              className="outline-none border-b-2 border-primary w-full px-3 py-2.5 my-2"
              placeholder='Enter your mobile number'
              value={form.number}
              onChange={(e) => updateForm("number", e.target.value)}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="input-group w-full py-2 sm:flex-1">
            <label htmlFor="nationality" className="uppercase text-lg">Nationality</label>
            <input 
              type="text"
              name='nationality'
              id='nationality'
              className="outline-none border-b-2 border-primary w-full px-3 py-2.5 my-2"
              placeholder='Enter your country'
              value={form.nationality}
              onChange={(e) => updateForm("nationality", e.target.value)}
            />
            <ValidationError
              prefix="Nationality"
              field="nationality"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="">
          <div className="input-group w-full py-2">
            <label htmlFor="" className="uppercase text-xl">message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="outline-none border-b-2 border-primary w-full px-3 py-2.5 my-2"
              value={form.message}
              onChange={(e) => updateForm("message", e.target.value)}
              placeholder='Hello there...'></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="input-group w-full py-2">
          <button className="bg-primary text-white text-3xl w-full p-3" type="submit" disabled={state.submitting}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form