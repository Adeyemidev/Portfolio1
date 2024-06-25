
import {useForm} from 'react-hook-form'
import * as yup  from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import net from '../assets/net.png'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
 
export const Contact = ()=>{

    const  onSubmit = (data)=>{
        console.log(data)
       }
       
       const schema = yup.object().shape({
        Name: yup.string().required('required!'),
        Email: yup.string().email().required('required!'),
        Tel: yup.number().positive().integer().required('required!'),
        Message: yup.string().required('required!')
      
       })
      
       const {register, handleSubmit, formState: {errors}} = useForm({
      resolver: yupResolver(schema)
       });

       useEffect(()=>{
        Aos.init()
       },[])


    return(<div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" className='bg-darkgrey pt-8 '>
        <section id='contact' className='lg:flex mx-4 md:mx-28 text-center items-center  justify-cente lg:justify-between' style={{padding:'52px 0'}}>
<div className='text-center lg:text-left  pb-20'>

  <h1 className='text-[40px] leading-[40px] tracking-[-1.14px] sm:text-[72px] sm:leading-[72px] sm:tracking-[-2.05px] md:text-extralarge md:leading-extralarge md:tracking-tight font-bold'>Contact</h1>

<p className='text-center lg:text-left text-smallest sm:text-smaller pt-6 leading-[26px] sm:leading-normal lg:w-[65%] m/ax-w-md text-gray'>
I would love to hear about your project and how I could help.
 Please fill in the form, and I’ll get back to you as soon as possible.
</p>

</div>

<div className=" text-right">

<form onSubmit={handleSubmit(onSubmit)} className="outline-none" >
<div className='flex'> <input type='text' placeholder="Name" className=" border-b w-full md:px-4 lg:px-0 pb-4"{...register("Name")}/><br/>
     <span>{errors.Name?.message}</span>
</div>

<div className='flex'><input type='email' placeholder="Email: easycode.techdev@gmail.com" className=" border-b w-full md:px-4 lg:px-0 py-4" {...register("Email")}/><br/>
<span>{ (errors.Tel ? 'required!' : '')}</span>
</div>

<div className='flex'>
<textarea type='text' placeholder="Message" className=" border-b lg:w-96 w-full md:px-4 lg:px-0  py-10" {...register("Message")}/><br/>
<span>{errors.Message?.message}</span>

      </div>

<button type="submit" className=' font-bold text-[16px] leading-normal tracking-[2.29] py-4 sendMessage'>SEND MESSAGE</button>

 </form></div>

 
</section>
<img id='imageNet' src={net} alt="" />
<nav id="nav" className="sm:flex sm:justify-between pt-8 mx-4 md:mx-28 mb-0 pb-20 border-t text-center sm:text-left items-center">
        <h3 className="text-small sm:text-medium font-medium leading-medium tracking-small" >EasyCode</h3>
<ul className="md:gap-4 mt-10 md:mt-0 items-center md:mr-8 grid grid-flow-col mx-20 sm:mx-0 place-items-center ">
<a href="https://linkedin.com/in/adeyemi-frontend-dev"> <FaLinkedin size={26}/></a>
<a href="mailto:easycode.techdev@gmail.com"> <IoMdMail size={26}/></a>
 <a href="https://github.com/Adeyemidev">  <FaGithub size={26}/></a>
 <a href="https://x.com/easycode01?t=XbtFtZ4qzl97gErjSosZsQ&s=09" ><BsTwitterX size={26}/></a>
 </ul>
</nav>
</div>
)}