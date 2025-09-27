import React, { useEffect } from "react";
import AOS from "aos";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const TeamMember = ({ name, role, image, alt, aos, twitter, linkedin }) => (
  <div className="w-[220px] xl:w-[250px] text-center group">
    <div 
      className="relative w-[220px] xl:w-[250px] h-[220px] xl:h-[250px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-end justify-center overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500"
      data-aos={aos}
    >

      <div className="absolute inset-0 bg-gradient-to-t from-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-full"></div>
      
      
      <div className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
      <div className="absolute bottom-3 left-3 w-4 h-4 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
      

      <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-primary/30 transition-all duration-500"></div>
      

      <img 
        src={image} 
        alt={alt} 
        className="w-[80%] relative z-5 transform group-hover:scale-105 transition-transform duration-500 ease-out" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-10"></div>
    </div>
    
    <p className="md:text-xl text-2xl py-3 font-semibold text-dark group-hover:text-primary transition-colors duration-300">{name}</p>
    <p className="text-[#737373] md:text-lg text-xl font-medium">{role}</p>
    
    <div className="flex justify-center items-center gap-6 mt-4">
      {twitter && (
        <a 
          href={twitter} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2  rounded-full text-primary  transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md"
        >
          <AiOutlineTwitter className="text-xl" />
        </a>
      )}
      {linkedin && (
        <a 
          href={linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 text-primary rounded-full transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md"
        >
          <FaLinkedinIn className="text-xl" />
        </a>
      )}
    </div>
  </div>
);

const teamData = [
  {
    name: "Elizabeth Okaome",
    role: "Founder",
    image: "/founder.png",
    alt: "Elizabeth Okaome image",
    aos: "fade-right",
    twitter: "http://twitter.com/EOkaome?s=09",
    linkedin: "http://www.linkedin.com/in/elizabeth-okaome-a940791aa",
  },
  {
    name: "Anita Kimemenihia",
    role: "Lead, Communications",
    image: "/team-images/anita.png",
    alt: "Anita Kimemenihia image",
    aos: "zoom-in-down",
    twitter: "http://x.com/ArchivesofKim",
    linkedin: "http://www.linkedin.com/in/anita-kimemenihia",
  },
  {
    name: "Ayomide Mary Faniran",
    role: "Lead, Human Resources",
    image: "/ayomide.png",
    alt: "Ayomide Mary Faniran image",
    aos: "fade-up-left",
    twitter: "https://x.com/Faniranayomide",
    linkedin: "https://www.linkedin.com/in/faniranayomidemary/",
  },
  {
    name: "Falomo Sharon",
    role: "Lead, Engineering",
    image: "/sharonf.png",
    alt: "Falomo Sharon image",
    aos: "fade-up-left",
    twitter: "https://twitter.com/sharonfalomo?s=11&t=u5By12KDfWxoH722yIJ3FQ",
    linkedin: "http://linkedin.com/in/sharon-falomo",
  },
  {
    name: "Ihuoma favour Agbaru",
    role: "Operations Manager",
    image: "/ihuoma.png",
    alt: "Ihuoma favour Agbaru image",
    aos: "zoom-in-right",
    linkedin: "https://www.linkedin.com/in/ihuomaagbaru?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
];

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <section id="team" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container xl:max-w-screen-xl mx-auto py-5 px-4 text-dark relative z-10">
        <img 
          src="/contact-dots.svg" 
          alt="dots" 
          className="absolute top-[20px] left-[5px] sm:left-[-5px] my-5" 
        />
        
        <h2 className="md:text-5xl text-4xl font-bold text-center md:my-10 my-16 w-fit mx-auto relative">
          Meet The Team
          <img 
            src="/sun.png" 
            alt="sun" 
            className="absolute top-[-10px] right-[-25px] w-14 animate-pulse" 
          />
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-20 my-10 relative z-10">
          {teamData.map((member, index) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;