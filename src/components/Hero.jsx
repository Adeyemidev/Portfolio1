import { useEffect } from 'react';
import Aos from 'aos';
import {Link} from 'react-scroll'
import { TypeAnimation } from 'react-type-animation';
import icon from '../assets/simple-icons.svg'
export const Header = () => {

  useEffect(()=>{
    Aos.init()
  },[])

  return (
  
    <main  data-aos="fade-up" data-aos-duration="2000" id='head' className=" pt-20 md:pt-32 mx-4 md:-6 lg:mx-28 sm:mb-20 items-center ">
<div className='mx-4'>
  <TypeAnimation
    sequence={[
      `I'M ADEYEMI EZEKIEL`,
      
    ]}   
     wrapper="span"
    speed={40}
    cursor={true}
    style={{
      fontSize: '2.270em',
      color:'#FFFFFF',
      lineHeight:'1.2',
      fontFamily: 'Blorado, sans-serif',
      textRendering: 'geometricPrecision',
      fontWeight: '500',
      letterSpacing: '9.9px'
    }}
  />

    <p className='md:max-w-5xl mt-6 text-gray'>
       Your friendly neighborhood frontend developer, and JavaScript engineer. I spend my days (and often nights)
        painting the Internet canvas with <Link to='Projects'spy={true} smooth={true} offset={-55} duration={1500}  
>PROJECTS</Link> and lines of code, turning zeroes
       and ones into immersive, interactive experiences.
    </p>
       
<p className='md:max-w-5xl mt-6 text-gray'>
      I specialize in helping startups navigate the journey from concept to execution. 
 With a focus on customer-centric design and a dedication to Test-Driven Development (TDD),
  I bring your vision to life using JavaScript/TypeScript, ReactJS, NextJS, TailwindCSS, & MongoDB. 

   </p>
          <Link to='Projects'spy={true} smooth={true} offset={-55} duration={1500}   className=' flex items-center gap-6 mt-10 -mb-0  leading-normal tracking-[2.29px] '>         
           <span className='sendMessage  sendMessage1 font-thin'>SEE PROJECTS</span >
           <img className=" animate-bounce w-6 h-6 ..." src={icon} alt="" />
           </Link>   
           
            </div>
      </main>
  );

};
