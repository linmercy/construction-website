import React, {useState} from 'react'
import { styles } from '../styles'
import { featLinks, projects } from '../constants'

const Features = () => {
  const [active, setActive] = useState("")
  return (
    <section className=' w-full relative bg-tertiary'>
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <div className=" w-full flex justify-between items-center   ">
          <h1 className=' font-extrabold text-black text-[40px]'>Featured Projects</h1>
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

        <div className="w-full flex justify-between items-center gap-5 rounded-md max-xs:block \">
          {projects.map(({image, title, description})=>{
            return (
              <div className='block'>
                <div className=" flex w-[100%] h-[100%] object-contain">
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

        <div className="">
          <a href=""  className='sm:text-[18px] text-[14px] text-white capitalise tracking-wider'>
            Explore All Projects
          </a>
            
          
        </div>

      </div>
    </section>
  )
}

export default Features