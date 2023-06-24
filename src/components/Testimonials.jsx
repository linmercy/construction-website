import React from 'react'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { lee, wang, janey } from '../assets'
import { styles } from '../styles'

const Testimonials = () => {

  return (
    <section className=' bg-primary w-full relative '>
      <div className={`${styles.padding} mx-auto max-w-7xl`}>
        <div className='flex justify-center items-center'>
          <h2 className={`${styles.sectionHeadText} text-tertiary`}>What Our clients Says</h2>
        </div>
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
            
            <div className={`${styles.paddingX} block lg:mx-28 items-center text-center`}>
              <p className=' font-medium'>
                I am very satisfied with the services. Their team was very proffessional and efficient in completing
                our project on time and at a very affordable cost. The quality of their work is very good and I highly
                recommend this company for any construction projects. 
              </p>
              <p className=' mt-2 font-medium'>Tom Leexmark</p>
              <p className=' font-thin text-xs'>CEO, Lee Foundations</p>
              <div className=' flex relative justify-center mt-5'>
                <img src={lee} alt="lee" className=' w-[50px] h-[50px] rounded-full outline-tertiary  outline outline-2' />
              </div>
            </div>
          
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.paddingX} block lg:mx-28 items-center text-center`}>
              <p className=' font-medium'>
                I am very satisfied with the services. Their team was very proffessional and efficient in completing
                our project on time and at a very affordable cost. The quality of their work is very good and I highly
                recommend this company for any construction projects. 
              </p>
              <p className=' mt-2 font-medium'>Tom Leexmark</p>
              <p className=' font-thin text-xs'>CEO, Lee Foundations</p>
              <div className=' flex relative justify-center mt-5'>
                <img src={wang} alt="lee" className=' w-[50px] h-[50px] rounded-full outline-tertiary  outline outline-2' />
              </div>
            </div>
            
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.paddingX} block lg:mx-28 items-center text-center`}>
              <p className=' font-medium'>
                I am very satisfied with the services. Their team was very proffessional and efficient in completing
                our project on time and at a very affordable cost. The quality of their work is very good and I highly
                recommend this company for any construction projects. 
              </p>
              <p className=' mt-2 font-medium'>Tom Leexmark</p>
              <p className=' font-thin text-xs'>CEO, Lee Foundations</p>
              <div className=' flex relative justify-center mt-5'>
                <img src={janey} alt="lee" className=' w-[50px] h-[50px] rounded-full outline-tertiary  outline outline-2' />
              </div>
            </div>
            
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials