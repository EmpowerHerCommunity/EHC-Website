import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import axios from 'axios';


// import Link from 'next/link';
// import logo from '../../assets/logos/logo-white.png';
// import Github from '../../assets/icons/Github.svg';
// import Linkedin from '../../assets/icons/LinkedIn.svg';
// import Instagram from '../../assets/icons/Instagram.svg';
// import Twitter from '../../assets/icons/Twitter.svg';
// import internet from '../../assets/icons/internet.svg';
// import dropdown from '../../assets/icons/dropdown.svg';
// import accepted from '../../assets/icons/accepted.svg';
// import { useState, useRef, useEffect } from 'react';
// import axios from 'axios';

// import useTranslation from 'next-translate/useTranslation';
// import { useRouter } from "next/router";






const NewsLetter = () => {











  
  // const router = useRouter();
  // const { t } = useTranslation('common');
  // const [showLangOpt, setShowLangOpt] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [lang, setLang] = useState("English");
  // const [email, setEmail] = useState("");
  // const [toast, setToast] = useState(null);
  // const refEmail = useRef();


  // function inputEmail(event) {
  //     setEmail(event.target.value);
  //     // console.log(event.target.value);
  // }

  // const subscribe = async (e) => {
  //     e.preventDefault();
  //     setIsLoading(true);
  //     console.log(email);
  //     let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //     if (email.match(regexEmail)) {
  //         console.log(email.match(regexEmail));
  //         try {
  //             const response = await axios.post('/api/subscribe', { email })
  //             console.log(response);
  //             // setState('Success')
  //             // setEmail('')
  //             setToast({
  //                 type: 'success',
  //                 message: 'You have successfully subscribed'
  //             })
  //             refEmail.current.value = "";
  //             setEmail("");
  //             setIsLoading(false);
  //         } catch (e) {
  //             console.log(e)
  //             console.log(e.response.data.error)
  //             // setErrorMsg(e.response.data.error)
  //             // setState('Error')
  //             setToast({
  //                 type: 'error',
  //                 message: e.response.data.error
  //             })
  //             setIsLoading(false);
  //             // message: 'You have to input your email'
  //         }
  //         //   return true; 
  //     } else if (email === "") {
  //         setToast({
  //             type: 'error',
  //             message: 'You have to input your email'
  //         })
  //         setIsLoading(false);
  //     } else {
  //         setToast({
  //             type: 'error',
  //             message: 'Invalid email'
  //         })
  //         setIsLoading(false);
  //     }

  //     setTimeout(() => {
  //         setToast(null)
  //     }, 5000);
  // }

  // return (
  //     <footer className={(isLoading ? 'cursor-progress' : '') + ' bg-tertiary text-white'}>
  //         {toast && (<div className="fixed top-[30px] left-1/2 transfrom -translate-x-1/2 z-40">
  //             <div className={(toast.type === 'error' ? 'bg-red-400 text-white' : 'text-white bg-green-400') + " bg-opacity-90 rounded-lg px-5 py-5 w-80 shadow-lg"}>
  //                 <div className="mx-auto text-center">
  //                     <p className="text-xl">{toast.message}</p>
  //                 </div>
  //             </div>
  //         </div>)}
  //         <div className="footer-top border-b border-black">
  //             <div className="container mx-auto">
  //                 <div className="w-full flex flex-wrap md:flex-nowrap items-stretch">
  //                     <div className="logo-container w-full md:flex-1 md:border-r border-black px-4 py-10">
  //                         <div className="h-full flex flex-col justify-between">
  //                             <Link href="/" passHref>
  //                                 <img src={logo.src} alt="DAO logo" className="app-logo w-32" />
  //                             </Link>
  //                             <ul className="text-lg flex items-center gap-8 mt-10">
  //                                 <li className="">
  //                                     <a href="https://github.com/DAO-NET-Developer-Platform" target="_blank" rel="noreferrer">
  //                                         <img src={Github.src} alt="Github logo" className="w-6" />
  //                                     </a>
  //                                 </li>
  //                                 <li className="">
  //                                     <a href="https://" target="_blank" rel="noreferrer">
  //                                         <img src={Instagram.src} alt="Instagram logo" className="w-6" />
  //                                     </a>
  //                                 </li>
  //                                 <li className="">
  //                                     <a href="https://twitter.com/DaoCoders" target="_blank" rel="noreferrer">
  //                                         <img src={Twitter.src} alt="Twitter logo" className="w-6" />
  //                                     </a>
  //                                 </li>
  //                                 <li className="">
  //                                     <a href="https://" target="_blank" rel="noreferrer">
  //                                         <img src={Linkedin.src} alt="Linkedin logo" className="w-6" />
  //                                     </a>
  //                                 </li>
  //                             </ul>
  //                         </div>
  //                     </div>
  //                     <div className="text-lg w-full md:flex-1 px-4 md:pl-10">
  //                         {/* <p className="max-w-md text-2xl font-semibold leading-snug my-10">Stay updated with DAO NET,<br /> subscribe to our monthly newsletter</p> */}
  //                         <p className="max-w-md text-2xl font-semibold leading-snug my-10">{t('footer.subscribe')}</p>
  //                         <form onSubmit={(e) => subscribe(e)} className="text-lg flex items-center gap-4 w-full my-10">
  //                             <input
  //                                 type="text"
  //                                 ref={refEmail}
  //                                 placeholder='Type your email ...'
  //                                 onInput={(e) => inputEmail(e)}
  //                                 className={(isLoading ? 'cursor-progress ' : '') + "bg-dark rounded-xl w-full py-2.5 px-4 outline-none"}
  //                                 readOnly={isLoading}
  //                             />
  //                             <button
  //                                 type='submit'
  //                                 className={(isLoading ? 'cursor-progress ' : '') + 'bg-primary text-white p-2.5 w-56 rounded-xl'}
  //                                 disabled={isLoading}
  //                             >
  //                                 {t('footer.button')}
  //                                 {/* Subscribe */}
  //                             </button>
  //                         </form>
  //                     </div>
  //                 </div>
  //             </div>
  //         </div>
  //     </footer>
  // )









  const [email, setEmail] = useState("");
  // const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null);
  // const refEmail = useRef();

  
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
            // setState('Success')
            // setEmail('')
            setToast({
                type: 'success',
                message: 'You have successfully subscribed'
            })
            // refEmail.current.value = "";
            setEmail("");
            setIsLoading(false);
        } catch (e) {
            console.log(e)
            console.log(e.response.data.error)
            // setErrorMsg(e.response.data.error)
            // setState('Error')
            setToast({
                type: 'error',
                message: e.response.data.error
              })
              // message: "An error has occurred"
            setIsLoading(false);
            // message: 'You have to input your email'
        }
        //   return true; 
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
    AOS.init({ duration: 2500});
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
              <button className="bg-primary text-white w-1/3 flex-auto">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter