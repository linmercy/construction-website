import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Navigation } from 'swiper';
import { styles } from '../styles'
import { featLinks, projects } from '../constants'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { menu, close } from '../assets';
import { SectionWrapper } from '../hoc';

const Features = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <section className={` w-full relative bg-tertiary`}>
      <div className={`${styles.padding} max-w-7xl mx-auto`}>
        <div className={`block text-center items-center justify-center pt-5 max-md:flex`}>
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

        <div className={`w-full flex justify-between items-center max-w-7xl mx-auto`}>
          <Link to="/projects" className='flex items-center gap-2' onClick={() => {
            setActive("") //; window.scrollTo(4, 0)
          }}>

            <h1 className='font-bold text-black text-[32px]'>Featured <br className='lg:hidden' /> Projects</h1>

          </Link>
          
          
          <div className=" flex gap-5 t">

            <ul className="list-none hidden justify-end lg:flex flex-row gap-5">
              
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

          <div className=" lg:hidden flex flex-1 justify-end items-center">
            <img src={toggle ? close : menu} alt="menu" className=' w-[28px] h-[28px] object-contain cursor-pointer' 
            onClick={() => setToggle(!toggle)} />

            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-96 sm:top-40 right-0 mx-4 my-2 min-w-[200px] 
            z-10 rounded-xl `}>
              <ul className="list-none flex justify-end items-start flex-col gap-4">
            
                {featLinks.map((link) => (
                  <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"}
                    font-poppins font-medium cursor-pointer text-16px]`} onClick={() => {
                      setActive(link.title)
                      setToggle(!toggle)
                      }}>

                    <a href={`#${link.id}`}>
                      {link.title}
                    </a>

                  </li>
                ))}

              </ul>
            </div>
          </div>
        </div>

        

        <div className="block h-auto w-auto sm:flex px-10 justify-between object-center gap-2 rounded-md">
          {projects.map(({image, title, description})=>{
            return (
              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                onReachEnd={() => {}}

              >
                <SwiperSlide>
                  <div className='overflow-y-auto w-full'>
                    <div className=" bg-no-repeat bg-center bg-cover">
                      <img src={image} alt={title} className='object-cover w-[300px] h-[400px] rounded-lg' />
                    </div>

                    <div className=" sm:text-[18px] text-[14px] text-white capitalise tracking-wider">
                      <h4>
                        {title}
                      </h4>
                    </div>

                    {/* <div className="sm:text-[18px] md:text-[20px] text-[14px] text-white capitalise tracking-wider">
                      <p>
                        {description}
                      </p>
                    </div> */}

                  </div>
                </SwiperSlide>
              </Swiper>
              
            )
           
          })}
        </div>

        <div className=" flex justify-end items-end h-[100%] py-3 px-3 underline">
          <a href="#projects"  className='flex justify-between gap-5 sm:text-[18px] text-[14px] text-primary capitalise  tracking-wider'>
            Explore All Projects
            <IoMdArrowRoundForward className=' mx-auto my-auto py-auto bg-primary text-tertiary rounded-2xl' />
          </a>
            
          
        </div>

      </div>
    </section>
  )
}

export default SectionWrapper (Features, "projects")