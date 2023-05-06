import React, { useEffect } from 'react';
import AOS from 'aos';

const Team = () => {

  useEffect(() => {
    AOS.init({ duration: 2500});
    AOS.refresh();
  }, []);

 

  return (
    <section className="" id='team'>
      <div className='container xl:max-w-screen-xl mx-auto py-5 px-4 text-dark relative'>
        <img src="/contact-dots.svg" alt="dots" className="absolute top-[20px] left-[5px] sm:left-[-5px] my-5" />
        <h2 className="md:text-5xl text-4xl font-bold text-center md:my-10 my-16 w-fit mx-auto relative">
          Meet The Team
          <img src="/sun.png" alt="dots" className="absolute top-[-10px] right-[-25px] w-14" />
          {/* <img src="/sun.png" alt="" className="absolute top-[-5px] right-[0px]" /> */}
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-20 my-10">
          <div className="w-[220px] xl:w-[250px] text-center">
            <div className="w-[220px] xl:w-[250px] h-[220px] xl:h-[250px] bg-primary bg-opacity-10 rounded-full flex items-end justify-center overflow-hidden" data-aos='fade-right'>
              <img src="/founder.png" alt="Elizabeth Okaome image" className="w-[80%]" />
            </div>
            <p className="md:text-lg text-xl">
              Elizabeth Okaome
            </p>
            <p className="text-[#737373] text-lg">
              Founder
            </p>
            <div className="flex justify-center items-center gap-6 mt-2">
              <a href="http://twitter.com/EOkaome?s=09" className="" target="_blank" rel="noopener noreferrer">
                <img src="/social-media/twitter.png" alt="" className="" />
              </a>
              <a href="http://www.linkedin.com/in/elizabeth-okaome-a940791aa" className="" target="_blank" rel="noopener noreferrer">
                <img src="/social-media/linkedin.png" alt="" className="" />
              </a>
            </div>

          </div>
          <div className="w-[220px] xl:w-[250px] text-center">
            <div className="w-[220px] xl:w-[250px] h-[220px] xl:h-[250px] bg-primary bg-opacity-10 rounded-full flex items-end justify-center overflow-hidden" data-aos='fade-left'>
              <img src="/presh.png" alt="Precious Oriarewo image" className="w-[80%]" />
            </div>
            <p className="md:text-lg text-xl">
              Precious Oriarewo
            </p>
            <p className="text-[#737373] text-lg">
              Lead, Operations
            </p>
            <div className="flex justify-center items-center gap-6 mt-2">
              <a href="https://twitter.com/Precy_Oriarewo" className="" target="_blank" rel="noopener noreferrer">
                <img src="/social-media/twitter.png" alt="" className="" />
              </a>
              <a href="https://www.linkedin.com/in/precy-oriarewo-b216a9231/" className="" target="_blank" rel="noopener noreferrer">
                <img src="/social-media/linkedin.png" alt="" className="" />
              </a>
            </div>
          </div>
          <div className="w-[220px] xl:w-[250px] text-center">
            <div className="w-[220px] xl:w-[250px] h-[220px] xl:h-[250px] bg-primary bg-opacity-10 rounded-full flex items-end justify-center overflow-hidden" data-aos='zoom-in-down'>
              <img src="/team-images/anita.png" alt="Anita Kimemenihia image" className="w-[80%]" />
            </div>
            <p className="md:text-lg text-xl">
              Anita Kimemenihia
            </p>
            <p className="text-[#737373] text-lg">
              Lead, Communications
            </p>
            <div className="flex justify-center items-center gap-6 mt-2">
              <a href="https://twitter.com/Restless_kim?s=09" className="" target="_blank" rel="noopener noreferrer">
                <img src="/social-media/twitter.png" alt="Twitter" className="" />
              </a>
              <a href="http://www.linkedin.com/in/anita-kimemenihia" className="" target="_blank" rel="noopener noreferrer">
                <img src="/social-media/linkedin.png" alt="LinkedIn" className="" />
              </a>
            </div>
          </div>
          <div className="w-[220px] xl:w-[250px] text-center">
            <div className="w-[220px] xl:w-[250px] h-[220px] xl:h-[250px] bg-primary bg-opacity-10 rounded-full flex items-end justify-center overflow-hidden" data-aos='fade-up-right'>
              <img src="/team-images/peace.png" alt="Peace Ngozi Okafor image" className="w-[85%]" />
            </div>
            <p className="md:text-lg text-xl">
            Goldie Chukwuedo
            </p>
            <p className="text-[#737373] text-lg">
              Lead, Community Manager
            </p>
            <div className="flex justify-center items-center gap-6 mt-2">
              <a href="https://twitter.com/Goldiechukwuedo?s=09" className="" target="_blank" rel="noopener noreferrer">
                <img src="/social-media/twitter.png" alt="" className="" />
              </a>
              <a href="https://www.linkedin.com/in/goldiechukwuedo" className="" target="_blank" rel="noopener noreferrer">
                <img src="/social-media/linkedin.png" alt="" className="" />
              </a>
            </div>
          </div>
          <div className="w-[220px] xl:w-[250px] text-center">
            <div className="w-[220px] xl:w-[250px] h-[220px] xl:h-[250px] bg-primary bg-opacity-10 rounded-full flex items-end justify-center overflow-hidden" data-aos='fade-up-left'>
              <img src="/tracy.png" alt="Tracy Obakhena image" className="w-[80%]" />
            </div>
            <p className="md:text-lg text-xl">
              Tracy Obakhena
            </p>
            <p className="text-[#737373] text-lg">
             Lead, Programs Manager
            </p>
            <div className="flex justify-center items-center gap-6 mt-2">
              <a href="https://mobile.twitter.com/whoisourlight" className="" target="_blank" rel="noopener noreferrer">
                <img src="/social-media/twitter.png" alt="" className="" />
              </a>
              <a href="https://www.linkedin.com/in/tracy-obakhena-066b4912a" className="" target="_blank" rel="noopener noreferrer">
                <img src="/social-media/linkedin.png" alt="" className="" />
              </a>
            </div>
          </div>
          <div className="w-[220px] xl:w-[250px] text-center">
            <div className="w-[220px] xl:w-[250px] h-[220px] xl:h-[250px] bg-primary bg-opacity-10 rounded-full flex items-end justify-center overflow-hidden" data-aos='fade-down-right'>
              <img src="/team-images/mary.png" alt="Mary Sule image" className="w-[80%]" />
            </div>
            <p className="md:text-lg text-xl">
              Mary Sule
            </p>
            <p className="text-[#737373] text-lg">
              Lead, Finance
            </p>
            <div className="flex justify-center items-center gap-6 mt-2">
              <a href="https://mobile.twitter.com/_sulemary" className="" target="_blank" rel="noopener noreferrer">
                <img src="/social-media/twitter.png" alt="" className="" />
              </a>
              <a href="https://www.linkedin.com/in/mary-sule-13739b188" className="" target="_blank" rel="noopener noreferrer">
                <img src="/social-media/linkedin.png" alt="" className="" />
              </a>
            </div>
          </div>
          {/* <div className="w-[220px] xl:w-[250px] text-center">
            <div className="w-[220px] xl:w-[250px] h-[220px] xl:h-[250px] bg-primary bg-opacity-10 rounded-full flex items-end justify-center overflow-hidden" data-aos='fade-down-left'>
              <img src="/team-images/pearl.png" alt="Pearl Christain image" className="w-[80%]" />
            </div>
            <p className="md:text-lg text-xl">
              Pearl Christain
            </p>
            <p className="text-[#737373] text-lg">
              Lead, Engineering
            </p>
            <div className="flex justify-center items-center gap-6 mt-2">
              <a href="https://twitter.com/pearlchristain" className="" target="_blank" rel="noopener noreferrer">
                <img src="/social-media/twitter.png" alt="" className="" />
              </a>
              <a href="https://www.linkedin.com/in/pearl-christian" className="" target="_blank" rel="noopener noreferrer">
                <img src="/social-media/linkedin.png" alt="" className="" />
              </a>
            </div>
          </div> */}
         
          <div className="w-[220px] xl:w-[250px] text-center">
            <div className="w-[220px] xl:w-[250px] h-[220px] xl:h-[250px] bg-primary bg-opacity-10 rounded-full flex items-end justify-center overflow-hidden" data-aos='zoom-in-down'>
              <img src="/team-images/anita.png" alt="Anita Kimemenihia image" className="w-[80%]" />
            </div>
            <p className="md:text-lg text-xl">
              Anita Kimemenihia
            </p>
            <p className="text-[#737373] text-lg">
              Lead, Communications
            </p>
            <div className="flex justify-center items-center gap-6 mt-2">
              <a href="https://twitter.com/Restless_kim?s=0" className="" target="_blank" rel="noopener noreferrer">
                <img src="/social-media/twitter.png" alt="" className="" />
              </a>
              <a href="http://www.linkedin.com/in/anita-kimemenihia" className="" target="_blank" rel="noopener noreferrer">
                <img src="/social-media/linkedin.png" alt="" className="" />
              </a>
            </div>
          </div>
          <div className="w-[220px] xl:w-[250px] text-center">
            <div className="w-[220px] xl:w-[250px] h-[220px] xl:h-[250px] bg-primary bg-opacity-10 rounded-full flex items-end justify-center overflow-hidden" data-aos='zoom-in-right'>
              <img src="/team-images/gracious.png" alt="Gracious Sede image" className="w-[80%]" />
            </div>
            <p className="md:text-lg text-xl">
              Gracious Sede
            </p>
            <p className="text-[#737373] text-lg">
              Legal Advisor
            </p>
            <div className="flex justify-center items-center gap-6 mt-2">
              <a href="https://twitter.com/WestsidePOV?t=uocG-lALKcVkX77_qhHTeQ&s=09" className="" target="_blank" rel="noopener noreferrer">
                <img src="/social-media/twitter.png" alt="" className="" />
              </a>
              <a href="http://www.linkedin.com/in/gracious-sede-a72a28188" className="" target="_blank" rel="noopener noreferrer">
                <img src="/social-media/linkedin.png" alt="" className="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team;