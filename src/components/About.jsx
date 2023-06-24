import React from 'react'
import { styles } from "../styles"
import { IoIosArrowDroprightCircle, IoIosQuote } from "react-icons/io"
import { apartment1, video } from '../assets'

const About = () => {
  return (
    <section className="relative w-full  h-[100%] mx-auto bg-primary" id='2'>
      <div className={`${styles.paddingX} mx-auto max-w-7xl pb-10`}>
        <div className="flex max-xs:block gap-6 justify-between w-full">
          <div className='flex gap-10 py-10 max-xs:block max-xs:ml-20 max-xs:px-8 max-xs:mx-8 max-md:block max-lg:block'>
            <div className="flex gap-1">
              <p className={`${styles.sectionHeadText} text-tertiary`}>25<small>+</small></p>
              <h1 className={`${styles.sectionSubText} mt-2  max-xs:mt-1`}>Years of <br /> experience</h1>
            </div>

            <div className="flex gap-1 max-xs:mt-5">
              <p className={`${styles.sectionHeadText} text-tertiary`}>378<small>+</small></p>
              <h1 className={`${styles.sectionSubText} mt-2 max-xs:mt-1`}>Complete <br /> Projects</h1>
            </div>

            <div className="flex gap-1 max-xs:mt-5">
              <p className={`${styles.sectionHeadText} text-tertiary`}>69<small>+</small></p>
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

        <div className="flex gap-10 max-xs:mt-5 max-xs:block max-sm:block max-lg:block">
          <img src={apartment1} alt="apartment" className='w-[500px] h-[450px] object-scale-down  rounded-lg sm:mx-auto'/>
          {/* <video src={video} muted autoPlay loop type='video/mp4' className=' w-[500px] rounded-lg bg-cover '></video> */}

          <div className="sm:mx-auto">
            <h2 className= {`${styles.sectionHeadText} text-secondary`}><span className=' text-tertiary'>25 Years</span> <br /> of experince!</h2>
            <p className=' text-secondary'> 
              We have a team of experienced professionals who have been in the industry for over 25 years. Our contractors have a 
              wealth of knowledge and skills that they have acquired over the years, making them experts in their field.
            </p>

            <p className='mt-5 text-secondary'>
              With 25 years of experience, our contractors have a deep understanding of industry standards and regulations. 
              We ensure that all our projects comply with the latest safety and building codes, and that the final product 
              meets or exceeds our client's expectations. 
              
            </p>
            <div className="5 justify-center items-center">
              <IoIosQuote className=' text-[25px] mt-2 text-secondary' />
              <p className=' text-secondary'>John Doe- Founder</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default About