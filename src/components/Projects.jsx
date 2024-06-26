import page1 from '../assets/crowdfund.png'
import page2 from '../assets/RestApi.png'
import page3 from '../assets/Designo.png'
import page4 from '../assets/audiophile.png'
import page5 from '../assets/cryptix.png'
import page6 from '../assets/sunnyside.png'
import gcms from '../assets/GCMS.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
export const Projects = ()=>{
    useEffect(()=>{
        Aos.init()
          },[])
    return(< section id="Projects">
    <div className=' flex justify-between mx-4 sm:mx-4 md:mx-6 lg:mx-28 mb-6 sm:mb-16 items-center'>
        <h1 className='font-bold text-[40px] leading-[40px] tracking-[-1.14px] sm:text-[72px] sm:leading-[72px] sm:tracking-[-2.05px]  md:text-extralarge md:leading-extralarge'>Projects</h1>
        <h4 className='font-bold text-smallest leading-[26px] md:leading-normal tracking-[2.29px] sendMessage'><a href="mailto:easycode.techdev@gmail.com">CONTACT ME</a></h4>
        

    </div>

    <div className="grid sm:grid-cols-2 gap-y-10 mx-4 md:mx-6 lg:mx-28 gap-10 pb-28">
    
        <a data-aos="zoom-in-up" data-aos-duration="1000" href="https://crowdlaunch.vercel.app/"><div>
        <img src={page1} alt=''/>
        <p className='text-[24px] leading-medium font-medium pt-5 pb-2'>CROWDLAUNCH</p>
       <menu className='flex gap-5'><span>TYPESCRIPT</span> <span>REACT</span> <span>TAILWINDCSS</span>  </menu>
       </div></a>

       <a data-aos="zoom-in-up" data-aos-duration="1000" href="/"><div>
        <img src={gcms} alt=''/>
        <p className='text-[24px] leading-medium font-medium pt-5 pb-2'>GCMS Website</p>
       <menu className='flex gap-5'><span>REACTJS</span><span>TAILWINDCSS</span><span>EXPRESSJS</span>  </menu>
       </div></a>

       <a data-aos="zoom-in-up" data-aos-duration="2000" href="https://www.cryptixnft.io/ "><div><img src={page5} alt="page5"/>
        <p className='text-[24px] leading-medium font-medium pt-5 pb-2'>CRYPTIX</p>
       <menu className='flex gap-5'><span>SVELTEJS</span> <span>NEXTJS</span> <span>SMART CONTRACT</span></menu>
        </div></a>

       <a data-aos="zoom-in-up" data-aos-duration="2000" href="https://countries-apis-adeyemi.netlify.app/"><div> <img src={page2} alt=''/>
       <p className='text-[24px] leading-medium font-medium pt-5 pb-2'>REST COUNTRIES API</p>
       <menu className='flex gap-5'><span>JAVASCRIPT</span> <span>REACT</span> <span>CSS</span></menu>
       </div></a>

      

       <a data-aos="zoom-in-up" data-aos-duration="2000" href="https://audiophilic.vercel.app/"> <div><img src={page4} alt="page4"/>
        <p className='text-[24px] leading-medium font-medium pt-5 pb-2'>AUDIOPHILE</p>
       <menu className='flex gap-5'><span>JAVASCRIPT</span> <span>TAILWINDCSS</span><span>REACT</span></menu>
       </div></a>

       <a data-aos="zoom-in-up" data-aos-duration="2000" href="https://designo-ade.netlify.app/"><div><img src={page3} alt=''/>
        <p className='text-[24px] leading-medium font-medium pt-5 pb-2'>DESIGNO</p>
       <menu className='flex gap-5'><span>REACT</span> <span>CSS</span><span>JAVASCRIPT</span></menu>
       </div></a>

       <a data-aos="zoom-in-up" data-aos-duration="2000" href="https://adeyemi-sunny-side.netlify.app/">
        <div><img src={page6} alt="page6"/>
        <p className='text-[24px] leading-medium font-medium pt-5 pb-2'>SUNNY-SIDE</p>
       <menu className='flex gap-5'><span>HTML</span> <span>CSS</span> <span>JAVASCRIPT</span></menu>
        </div></a>
    </div>
    
    </section>

    )
}