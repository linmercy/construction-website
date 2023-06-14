import React from 'react'
import { styles } from '../styles'
import { GrFormNextLink } from "react-icons/gr"

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto img-gradient max-xl:max-h-min`} id='1'>
      <div className={`absolute inset-0 top-[120px] max-xs:top-[50px] max-lg:top-[80px] max-xl:top-[60px] 
        max-w-7xl mx-auto ${styles.paddingX} grid items-start gap-5 `}>
        <div className=''>
          <h1 className={`${styles.heroHeadText} text-white mt-20`}>
            We Prepare For <br /> The <span className=' text-[#bbd827]'>Future</span>
          </h1>

          <p className={`${styles.heroSubText} mt-10`}>We provide the best architecturial designs, construction and 
            <br className='max-xs:hidden sm:hidden xl:block ' /> building maintenance services for you 
          </p>

          <div className=' flex  items-start mt-20 max-xs:mt-10 xs:mt-10'>
            <button type='button' className=' bg-tertiary text-[15px] text-black cursor-pointer flex font-medium 
              py-2 px-4 rounded-md'>
              <a href="">
                Our Services
                {/* <GrFormNextLink className='w-6 h-5 flex flex-row' /> */}
              </a>
            </button>
            <button className=' bg-white text-black cursor-pointer flex font-medium py-2 px-4 rounded-md mx-10'>
              <a href="">
                View Projects
              </a>
            </button>
          </div>
        </div>
       </div>
    </section>
  )
}

export default Hero