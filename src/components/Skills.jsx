import leftnet from '../assets/net2.png'

export const Skills = ()=>{

    return(
    <div id="Skills" className=" grid grid-flow-row border-t border-darkgrey pt-20 sm:grid-cols-3 mx-4 md:mx-6 lg:mx-28 justify-center text-center md:text-left md:gap-x-14 gap-10 md:gap-6 lg:gap-10 ">
   <div>
    <h2 className="">HTML</h2>
    <span className=""> 3 Years of Experience</span>
   </div>

   <div>
    <h2 className="">CSS</h2>
    <span>4 Years of Experience</span>
    </div>

    <div>
    <h2 className="">JavaScript</h2>
    <span>3 Years of Experience</span>
   </div>

   <div>
    <h2 className="">Accessibility</h2>
    <span>3 Years of Experience</span>
   </div>

   <div>
     <h2 className="">React</h2>
     <span>3 Years of Experience</span>
     </div>

     <div>
     <h2 className="">Sass</h2> 
     <span>3 Years of Experience</span>
     </div>
     <img className='left' src={leftnet} alt="" /> 
     </div>
    
    
    )
}
