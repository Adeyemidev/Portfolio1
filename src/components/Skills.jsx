import leftnet from '../assets/net2.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
export const Skills = ()=>{

  useEffect(()=>{
Aos.init()
  },[])
    return( 
<section data-aos="fade-up"
    data-aos-duration="2000" >
    <div id="Skills" className="grid grid-flow-row border-t mt-[8rem] pt-12 lg:pt-20 sm:grid-cols-3 mx-4 md:mx-6 lg:mx-28 justify-center text-center md:text-left md:gap-x-14 gap-10 md:gap-6 lg:gap-10 ">
   <div>
    <h2>HTML</h2>
    <span>3 Years of Experience</span>
   </div>

   <div>
    <h2>CSS</h2>
    <span>3 Years of Experience</span>
    </div>

    <div>
    <h2>JavaScript</h2>
    <span>3 Years of Experience</span>
   </div>

   <div>
    <h2>ReactJS</h2>
    <span>3 Years of Experience</span>
   </div>

   <div>
     <h2>NextJS</h2>
     <span>3 Years of Experience</span>
     </div>

     <div>
     <h2>Tailwind</h2> 
     <span>3 Years of Experience</span>
     </div> 
</div>

<div className="flex justify-end ...">
  <img className='pb-10' src={leftnet} alt="" /> 
     </div>

     </section>
    )
}
