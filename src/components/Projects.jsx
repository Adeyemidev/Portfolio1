import page1 from '../assets/Bitmap.png'
import page2 from '../assets/page2.png'
import page3 from '../assets/page3.png'
import page4 from '../assets/page4.png'
import page5 from '../assets/page5.png'
import page6 from '../assets/page6.png'

export const Projects = ()=>{

    return(< section id="Projects"className=''>
    <div className=' flex justify-between mx-4 sm:mx-4 md:mx-6 lg:mx-28 mb-6 sm:mb-16 items-center'>
        <h1 className='font-bold text-[40px] leading-[40px] tracking-[-1.14px] sm:text-[72px] sm:leading-[72px] sm:tracking-[-2.05px]  md:text-extralarge md:leading-extralarge'>Projects</h1>
        <h4 className='font-bold text-smallest leading-[26px] md:leading-normal tracking-[2.29px] sendMessage' >CONTACT ME</h4>

    </div>
    

    <div className="grid sm:grid-cols-2 gap-y-10 mx-4 sm:mx-4 md:mx-6 lg:mx-28 gap-10 pb-28">
       <a href="https://countries-apis-adeyemi.netlify.app/"><div> <img src={page1} alt=''/>
       <p className='text-[24px] leading-medium font-medium pt-5 pb-'>REST COUNTRIES API</p>
       <menu className='flex gap-5'><span>JAVASCRIPT</span> <span>REACTJS</span> <span>CSS</span></menu>
       </div></a>

        <a href="https://crowdlaunch.vercel.app/"><div>
        <img src={page2} alt=''/>
        <p className='text-[24px] leading-medium font-medium pt-5 pb-2'>CROWDLAUNCH</p>
       <menu className='flex gap-5'><span>TYPSCRIPT</span> <span>JAVASCRIPT</span><span>SOLIDITY</span></menu>
       </div></a>

       <a href="https://adeyemi-designo.netlify.app/"><div><img src={page3} alt=''/>
        <p className='text-[24px] leading-medium font-medium pt-5 pb-2'>DESIGNO</p>
       <menu className='flex gap-5'><span>REACTJS</span> <span>CSS</span><span>JAVASCRIPT</span></menu>
       </div></a>

       <a href="https://audiophilic.vercel.app/"> <div><img src={page4} alt="page4"/>
        <p className='text-[24px] leading-medium font-medium pt-5 pb-2'>AUDIOPHILE</p>
       <menu className='flex gap-5'><span>JAVASCRIPT</span> <span>TAILWINDCSS</span><span>REACTJS</span></menu>
       </div></a>

        <a href="https://adeyemi-sunny-side.netlify.app/"><div><img src={page5} alt="page5"/>
        <p className='text-[24px] leading-medium font-medium pt-5 pb-2'>SUNNY-SIDE</p>
       <menu className='flex gap-5'><span>HTML</span> <span>CSS</span> <span>JAVASCRIPT</span></menu>
        </div></a>

        <div><img src={page6} alt="page6"/>
        <p className='text-[24px] leading-medium font-medium pt-5 pb-2'>ART GALLERY SHOWCASE</p>
       <menu className='flex gap-5'><span>HTML</span> <span>CSS</span> <span>JAVASCRIPT</span></menu>
        </div>
    </div>
    
    </section>

    )
}