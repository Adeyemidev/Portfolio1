import myImage from '../assets/myImage.png';
//import circle from '../assets/Oval-circle.png'
import headerNet from '../assets/headerNet.png'
export const Header = () => {
  return (
    <>        <img className='firstImg pt-10' style={{position:'relative', zIndex:'1'}}src={headerNet} alt="he" /> 

      <section id='head' className="flex lg:mx-28 flex-wrap sm:mb-20 items-center sm:flex-nowrap flex-col-reverse sm:flex-row text-center sm:text-left md:ml-6 -mt-[70px]">

        <div className='-mt-32  mx-4 md:mx-0 md:mt-0 relative z-50 md:ml-1 lg:ml-0  sm:-top-0 '>
<h1 className='text-white font-bold mx-4 sm:mx-0 mt-7 lg:mt-0
          text-[38px] leading-[40px] tracking-[-1.14px] md:text-[72px] sm:leading-[72px] sm:tracking-[-2.05px]
          lg:text-extralarge lg:leading-extralarge '>
            Nice to meet you! I'm <button>Adeyemi.</button>
          </h1>

          <h5 className='md:max-w-[370px] mt-6 text-gray'>
            Based in the Nigeria, I’m a front-end developer passionate about building accessible web apps that users love.
          </h5>

          <h4 className='mt-10 -mb-16 sm:-mb-0 font-bold text-smaller leading-normal tracking-[2.29px] sendMessage sendMessage1'>         
           <a href="mailto:easycode.techdev@gmail.com">CONTACT ME</a >
           </h4>

        </div>

        <div>
          <img className='myImage object-contain bottom-16 sm:bottom-0 relative z-30 sm:object-cover mx-auto lg:-ml-6'src={myImage} alt=""/>
        </div>
        {/* <img className='circle bg-red-400 -ml-2 relative z-50'style={{objectPosition:'2rem -3rem'}} src={circle} alt="" /> */}

      </section>
    </>
  );
};
