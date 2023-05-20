import React from 'react'
import { styles } from '../styles'
import { services } from '../constants'

const Services = () => {
  return (
    <section className={`${styles.paddingX} bg-primary relative`}>
      <div className=" w-full mx-auto max-w-7xl">
        <div className="flex">
          {services.map(({title, icon})=>{
            return (
              <div className="">
                <div className="">
                  <h1>
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
      </div>
    </section>
  )
}

export default Services