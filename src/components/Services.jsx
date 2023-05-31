import React from 'react'
import { styles } from '../styles'
import { services, process } from '../constants'
import { apartment2, mansion, parking } from '../assets'

const Services = () => {
  return (
    <section className={`${styles.padding} bg-primary relative`}>
      <div className=" w-full h-[100%] mx-auto max-w-7xl">
        <div className=" items-center justify-center flex">
          <h1 className={`${styles.sectionHeadText}`}>Our Services</h1>
        </div>

        <div className={`${styles.padding} flex items-center justify-between`}>
          {services.map(({title, icon})=>{
            return (
              <div className="">
                <div className="">
                  <h1 className=' text-[18px]'>
                    {title}
                  </h1>
                </div>

                <div className="">
                  {icon}
                </div>
              </div>
            )
          })}
        </div>
        
        <div className={`${styles.sectionHeadText}`}>
          <h1 className={`${styles.paddingX} flex justify-center items-center text-tertiary capitalize`}>
            the Process
          </h1>
        </div>
        <div className={`${styles.padding} flex max-xs:block items-center justify-between`}>
          {process.map(({title, description, icon}) => {
            return (
              <div className="">
                <div className=" text-tertiary">
                  {title}
                </div>

                <div className="">
                  {description}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services