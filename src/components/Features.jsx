import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { styles } from '../styles'
import { featLinks, projects } from '../constants'
import { IoMdArrowRoundForward } from 'react-icons/io'

const Features = () => {
  const [active, setActive] = useState("")
  return (
    <section className={`${styles.paddingY} w-full relative bg-tertiary`}>
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
      <div className=" block text-center items-center justify-center max-md:flex">
          <ul className=' max-xs:block flex justify-between'>
            <li>
              <p>Evaluation and signing <br /> of the contract</p>
              <h6>Step 1</h6>
            </li>
            <li>
              <p>Preparation of the <br /> work plan</p>
              <h6>Step 2</h6>
            </li>
            <li>
              <p>Implementation of <br /> quality works</p>
              <h6>Step 3</h6>
            </li>
            <li>
              <p>Delivering the project <br /> to the client</p>
              <h6>Step 4</h6>

            </li>
          </ul>
        </div>
        
        <div className=" w-full flex justify-between items-center   ">

          <h1 className=' font-extrabold text-black text-[32px]'>Featured Projects</h1>
          <ul className="list-none md:block lg:flex justify-end sm:flex flex-row gap-5">
            
            {featLinks.map((link) => (
              <li key={link.id} className={`${active === link.title ? "text-white" : "text-black"}
                hover:text-white text-[20px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>

                <a href={`#${link.id}`}>
                  {link.title}
                </a>

              </li>
            ))}
          </ul>

        </div>

        

        <div className="w-full flex justify-between items-center gap-5 rounded-md max-xs:block ">
          {projects.map(({image, title, description})=>{
            return (
              <div className='block overflow-hidden'>
                <div className=" flex w-[400px] h-[500px]">
                  <img src={image} alt={title} className=' rounded-lg' />
                </div>

                <div className=" sm:text-[18px] text-[14px] text-white capitalise tracking-wider">
                  <h4>
                    {title}
                  </h4>
                </div>

                <div className="sm:text-[18px] md:text-[20px] text-[14px] text-white capitalise tracking-wider">
                  <p>
                    {description}
                  </p>
                </div>

              </div>
            )
           
          })}
        </div>

        <div className=" flex justify-end items-end h-[100%] py-3 px-3">
          <a href=""  className=' flex justify-between gap-5 sm:text-[18px] text-[14px] text-primary capitalise tracking-wider'>
            Explore All Projects
            <IoMdArrowRoundForward className=' mx-auto my-auto py-auto bg-primary text-tertiary rounded-2xl' />
          </a>
            
          
        </div>

      </div>
    </section>
  )
}

export default Features