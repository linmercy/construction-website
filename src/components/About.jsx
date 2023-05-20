import React from 'react'
import { styles } from "../styles"
import { IoIosArrowDroprightCircle } from "react-icons/io"
import { apartment1, video } from '../assets'

const About = () => {
  return (
    <section className="relative w-full  h-[100%] mx-auto bg-primary">
      <div className={`${styles.paddingX} mx-auto max-w-7xl`}>
        <div className="flex max-xs:block justify-between w-full">
          <div className='flex gap-10 py-10 max-xs:block max-xs:ml-20 max-xs:px-8 max-xs:mx-8 max-md:block max-lg:block'>
            <div className="flex gap-1">
              <p className={`${styles.sectionHeadText}`}>10<small>+</small></p>
              <h1 className={`${styles.sectionSubText} mt-2  max-xs:mt-1`}>Years of <br /> experience</h1>
            </div>

            <div className="flex gap-1 max-xs:mt-5">
              <p className={`${styles.sectionHeadText}`}>50<small>+</small></p>
              <h1 className={`${styles.sectionSubText} mt-2 max-xs:mt-1`}>Complete <br /> Projects</h1>
            </div>

            <div className="flex gap-1 max-xs:mt-5">
              <p className={`${styles.sectionHeadText}`}>10<small>+</small></p>
              <h1 className={`${styles.sectionSubText} mt-2 max-xs:mt-1`}>Winning <br /> Awards</h1>
            </div>
          </div>

          <div className="bg-tertiary tracking-wider text-black font-medium rounded-md py-5 px-5 mt-[-60px] max-md:mt-[38px] 
            max-lg:mt-[55px] h-[100%] max-xs:py-10 max-xs:mt-5">
            <ul>
              <li className='flex flex-row capitalize gap-2 mt-2'>
                <IoIosArrowDroprightCircle className='mt-1' />
                <p>quality control system, 100% satisfaction guarantee</p>
              </li>
                
              <li className='flex flex-row capitalize gap-2 mt-2'>
                <IoIosArrowDroprightCircle className='mt-1' />
                <p>highly proffesional staff, accurate testing processes</p>
              </li>

              <li className='flex flex-row capitalize gap-2 mt-2'>
                <IoIosArrowDroprightCircle className='mt-1' />
                <p>unrivalled workmanship, proffesional and qualified</p>
              </li>
            </ul>
            
          </div>
        </div>

        <div className="flex gap-10 max-xs:mt-5  max-xs:block max-md:block max-lg:block">
          {/* <img src={apartment1} alt="apartment" className='w-[500px] rounded-lg sm:mx-auto' /> */}
          <video src={video} muted autoPlay loop type='video/mp4' className=' w-[500px] rounded-lg '></video>

          <div className="sm:mx-auto">
            <h2 className=' font-bold text-[40px]'>ORAD Group</h2>
            <h1 className={`${styles.sectionHeadText}`}>Office for Research and Applied Design</h1>
            <p className={`${styles.sectionSubText}`}> 
              We devote a significant amount of our energy and resources to ensure responsible 
              architectural development within the context of the changing social and environmental 
              needs of Kenya.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default About