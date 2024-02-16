import twitter from "../assets/twitter.svg"
import github from '../assets/github.svg'
import linkedIn from '../assets/LinkedIn.png'
import icon from  '../assets/simple-icons.svg'
export const NavBar = ()=>{
    return(<>
    <nav id="nav" className="relative z-40 sm:flex sm:justify-between pt-8 mx-4 md:mx-6 lg:mx-28  text-center sm:text-left items-center">
        <h3 className="text-small sm:text-medium font-medium leading-medium tracking-small ">adeyemi</h3>
<ul className="md:gap-4 mt-10 md:mt-0 items-center lg:mr-8 grid grid-flow-col mx-20 sm:mx-0 place-items-center ">

 <a href="https://github.com/Adeyemidev" > <img src={github} alt="" /></a>
 <img src={icon} alt="" />
 <a href="www.linkedin.com/in/adeyemi-ezekiel" > <img src={linkedIn} alt="" /></a>
 <a href="https://x.com/easycode01?t=XbtFtZ4qzl97gErjSosZsQ&s=09" > <img src={twitter} alt="" /></a>

</ul>
</nav>
    
    </>)
} 