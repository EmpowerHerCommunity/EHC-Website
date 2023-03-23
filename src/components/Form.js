import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import emailjs from "@emailjs/browser";

const Form = () => {

  useEffect(() => {
    AOS.init({ duration: 2500});
    AOS.refresh();
  }, []);

  
  const [mail, setMail] = useState({
    name: "",
    email: "",
    number:"",
    nationality:"",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      submit.current &&
      mail.name !== "" &&
      mail.email !== "" &&
      mail.number !== "" &&
      mail.message !== ""&&
      mail.message !== ""
    ) {
      emailjs.sendForm(
        "service_or1toa8",
        "template_8w0a1ed",
        submit.current,
        "VzAh-kzQKj2SeXc8v"
      );
      alert("mail sent successfully");
    } else {
      alert("invalid details, please try again.");
    }
  };

  const submit = useRef(null);

  return (
    <div className='m-4'>
      <form className="form text-dark" 
         onSubmit={handleSubmit}
         ref={submit}>
        <div className="flex flex-wrap sm:flex-nowrap gap-4">
          <div className="input-group w-full py-2 sm:flex-1" data-aos='fade-right'>
            <label htmlFor="name" className="uppercase text-lg">name</label>
            <input
              type="text"
              name="name"
              required
              id='name'
              className="outline-none border-b-2 border-primary w-full px-3 py-2.5 my-2"
              placeholder='Enter your name'
              value={mail.name}
              onChange={(e) => setMail({ ...mail, name: e.target.value })}
            />
          </div>
          <div className="input-group w-full py-2 sm:flex-1" data-aos='fade-left'>
            <label htmlFor="email" className="uppercase text-lg">email</label>
            <input
              type="email"
              name='email'
              required
              id='email'
              className="outline-none border-b-2 border-primary w-full px-3 py-2.5 my-2"
              placeholder='Enter your email address'
              value={mail.email}
              onChange={(e) => setMail({ ...mail, email: e.target.value })}
            />
  
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap gap-4" data-aos='fade-right'>
          <div className="input-group w-full py-2 sm:flex-1">
            <label htmlFor="mobile-number" className="uppercase text-lg">mobile number</label>
            <input
              type="text"
              name="mobile number"
              required
              id='mobile-number'
              className="outline-none border-b-2 border-primary w-full px-3 py-2.5 my-2"
              placeholder='Enter your mobile number'
              value={mail.number}
              onChange={(e) => setMail({ ...mail, number: e.target.value })}
            />
    
          </div>
          <div className="input-group w-full py-2 sm:flex-1" data-aos='fade-left'>
            <label htmlFor="nationality" className="uppercase text-lg">Nationality</label>
            <input 
              type="text"
              name='nationality'
              required
              id='nationality'
              className="outline-none border-b-2 border-primary w-full px-3 py-2.5 my-2"
              placeholder='Enter your country'
              value={mail.nationality}
              onChange={(e) => setMail({ ...mail, nationality: e.target.value })}
            />
      
          </div>
        </div>
        <div className="" data-aos='fade-right'>
          <div className="input-group w-full py-2">
            <label htmlFor="" className="uppercase text-xl">message</label>
            <textarea
              name="message"
              required
              id="message"
              cols="30"
              rows="10"
              className="outline-none border-b-2 border-primary w-full px-3 py-2.5 my-2"
              value={mail.message}
              onChange={(e) => setMail({ ...mail, message: e.target.value })}
              placeholder='Hello there...'></textarea>
    
          </div>
        </div>
        <div className="input-group w-full py-2" data-aos='zoom-in'>
          <button className="bg-primary text-white text-4xl w-full p-3" type="submit">Submit 🙂</button>
        </div>
      </form>
    </div>
  )
}

export default Form