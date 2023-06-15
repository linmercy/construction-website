import React from 'react'
import { styles } from '../styles'
import { logo } from '../assets'
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoMdArrowForward } from 'react-icons/io'

const Footer = () => {
  return (
    <section className='bg-primary w-full relative'>
      <div className={`${styles.padding}   mx-auto max-w-7xl`}>
        <div className="flex justify-between">
          <img src={logo} alt="logo" />
          <div className="flex flex-inline">
            <label htmlFor="email">
              Subscribe to Our Newsleter:
            </label>
            <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder='Enter Your Email Address'
                className='bg-inherit px-2 mx-auto underline outline-none border-none pb-11' 
              />
              <IoMdArrowForward className='py-auto' />
          </div>
        </div>

        <div className="flex flex-inline font-light justify-between gap-5 mt-10">
          <div className=" w-[40%]">
            <h1 className=' text-lg font-semibold mb-5'>
              About Us
            </h1>

            <p>
              We have the confidence to provide the best service for you, with  the support
              of professional annd certified HR that we currently  have on the high-quality 
              materials we use and structured work  techniques, we will be able to realize 
              timely completion of work.
            </p>

            <div className=" flex gap-4 mt-5 text-[25px]">
              <IoLogoFacebook />
              <IoLogoInstagram />
              <IoLogoTwitter />
              <IoLogoLinkedin />
            </div>
          </div>

          <div className="">
            <h1 className=' text-lg font-semibold mb-5'>
              Office
            </h1>

            <p>
              18 office park building 20th floor unit e. <br /> JL street, 567, <br /> Nairobi Kenya, 49067 
            </p>
          </div>

          <div className="">
            <h1 className=' text-lg font-semibold mb-5'>
              Contact
            </h1>

            <p>
              Email: contact@construction.com<br />
              Call Us: (+254)712 345 678
            </p>
          </div>

          <div className="">
            <h1 className=' text-lg font-semibold mb-5'>
              Link
            </h1>

            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#service">Services</a></li>
              <li><a href="#projecs">Projects</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center font-thin text-xs">
        Copyright &copy; 2023 Lynne Tech. All Rights Reserved.
      </div>
    </section>
  )
}

export default Footer