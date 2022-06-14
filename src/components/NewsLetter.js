import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import axios from 'axios';


const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const subscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(email);
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regexEmail)) {
      console.log(email.match(regexEmail));
      try {
        const response = await axios.post('/api/subscribe', { email })
        console.log(response);
        setToast({
          type: 'success',
          message: 'You have successfully subscribed'
        })
        setEmail("");
        setIsLoading(false);
      } catch (e) {
        setToast({
          type: 'error',
          message: e.response.data.error
        })
        setIsLoading(false);
      }
    } else if (email === "") {
      setToast({
        type: 'error',
        message: 'You have to input your email'
      })
      setIsLoading(false);
    } else {
      setToast({
        type: 'error',
        message: 'Invalid email'
      })
      setIsLoading(false);
    }
    setTimeout(() => {
      setToast(null)
    }, 5000);
  }

  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <section className="bg-primary bg-opacity-10 p-8">
      {toast && (<div className="fixed top-[30px] left-1/2 transfrom -translate-x-1/2 z-40">
        <div className={(toast.type === 'error' ? 'bg-red-400 text-white' : 'text-white bg-green-400') + " bg-opacity-90 rounded-lg px-5 py-5 w-80 shadow-lg"}>
          <div className="mx-auto text-center">
            <p className="text-xl">{toast.message}</p>
          </div>
        </div>
      </div>)}
      <div className='container mx-auto py-10'>
        <div className="flex flex-wrap gap-6 text-dark">
          <h2 className="md:text-4xl sm:text-5xl lg:text-6xl text-5xl w-full lg:w-1/2 lg:flex-auto" data-aos='fade-right'>
            Join our NewsLetter
          </h2>
          <div className="w-full lg:w-5/12 lg:flex-auto">
            <p className="text-xl" data-aos='fade-right'>
              Subscribe to our news letter to receive updates
            </p>
            {email}
            <form onSubmit={(e) => subscribe(e)} className="flex gap-2 mt-2" data-aos='fade-left'>
              <input type="email" name="" className="w-2/3 flex-auto py-3 px-4" placeholder='Enter email address' value={email} onChange={(e) => setEmail(e.target.value)} />
              <button
              type='submit'
              className={(isLoading ? 'cursor-progress ' : '') + 'bg-primary text-white w-1/3 flex-auto'}
              disabled={isLoading}
              >
                 Subscribe
                 </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter