import React from 'react'
import { useState, useRef } from 'react'
import { IoMdArrowDropupCircle } from 'react-icons/io'
import { styles } from '../styles'
import { mirror } from '../assets'


const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (e) => {
    const { target } = e
    const { name, value} = target

    setForm({
      ...form, 
      [name]: value,
    })
  }
  return (
    <section className={`${styles.padding} w-full relative`} id='5' >
      <div className="mx-auto max-w-7xl ">
        <div className="">
          <div className="">
            <p className="text-2xl capitalize flex justify-center">
              leading way in building & civil construction
            </p>
          </div>

          <div className=" flex justify-center items-center">
            <ul className=' max-xs:block flex justify-between'>
              <li className=' inline-flex'>
                <IoMdArrowDropupCircle className='' />
                <p>Professional Staff</p>
              </li>
              <li className='inline-flex'>
                <IoMdArrowDropupCircle />
                <p>100% Satisfaction</p>
              </li>
              <li className='inline-flex'>
                <IoMdArrowDropupCircle />
                <p>Accurate Testing</p>
              </li>
              <li className='inline-flex'>
                <IoMdArrowDropupCircle />
                <p>Transparent Pricing</p>
              </li>
            </ul>
          </div>

          <div className=" flex justify-between gap-10 text-white mt-5 max-lg:block lg:mx-10 overflow-hidden">
            <form ref={formRef} action="" className={`${styles.paddingY} xl:w-[100%] bg-tertiary rounded-xl px-5 flex flex-col max-lg:mt-5`}>
              <h1 className=' text-xl'>
                Request A Quote
              </h1>
              <p className='mt-5'>
                Complete control over products allow us to offer our customers the best 
                quality, <br className=' max-xs:hidden' /> prices and services. We take great pride in everything that we do.
              </p>
              <div className="">
                <div className=" flex mt-5 justify-between gap-4 max-xs:block ">
                  <input type="text" placeholder='Name' value={form.name} onChange={handleChange} required 
                  className='bg-white w-[100%] py-4 px-6 placeholder:text-secondary max-xs:mb-2 text-black rounded-lg outline-none border-none font-medium'/>
                  <input type="text" placeholder='Email' value={form.email} onChange={handleChange} required 
                  className='bg-white w-[100%] py-4 px-6 placeholder:text-secondary max-xs:mb-2 text-black rounded-lg outline-none border-none font-medium' />
                </div>
                <div className=" flex  mt-5 justify-between gap-4 max-xs:block max-xs:mt-0">
                  <input type="contact" placeholder='Phone' value={form.phone} onChange={handleChange} required 
                    className='bg-white w-[100%] py-4 px-6 placeholder:text-secondary max-xs:mb-2 text-black rounded-lg outline-none border-none font-medium' />
                  <select name="service" value={form.service} onChange={handleChange} id="" required 
                    className='w-[100%] bg-white py-4 px-8 placeholder:text-secondary max-xs:mb-2 text-black rounded-lg outline-none border-none font-medium'>
                    <option value="">
                      Select Your Service
                    </option>
                    <option value="">
                      Architecture
                    </option>
                    <option value="">
                      Building
                    </option>
                    <option value="">
                      Planning
                    </option>
                  </select>
                </div>
                <textarea name="message" rows="5" placeholder='Additional Details!' value={form.message} onChange={handleChange}
                className='mt-5 w-[100%] bg-white py-4 px-6 placeholder:text-primary text-black rounded-lg outline-none border-none font-medium'></textarea>
              </div>
              <button type='submit' className=' grid bg-primary px-5 py-2 mx-auto mt-5 rounded w-[100%]' >Submit Request</button>
            </form>

            <div className={`${styles.paddingY} xl:w-[50%] mx-auto bg-tertiary rounded-xl max-lg:mt-5 px-5 `} >
              <p className='text-xl'>Contact Info</p>

              <div className=" mt-5">
                <h2 className=' text-lg'>Our Location</h2>
                <p>18 office park building <br /> 20th floor unit e, <br /> JL street, 567, <br /> Nairobi Kenya, 49067</p>
              </div>

              <div className=" mt-5">
                <h2 className=' text-lg'>Quick Contact</h2>
                <p>
                  Email: contact@construction.com 
                  
                </p>
                <p>
                  Call Us: (+254)712 345 678
                </p>
              </div>

              <div className=" mt-5">
                <h2 className=' text-lg'>Opening Hours</h2>
                <p>
                  Monday-Friday 
                </p>
                <p>
                  09.00 AM - 5.00 PM
                </p>
              </div>

              <p className=' mt-5 text-xl'>
                Do you have any questions? just contact us to get help!
              </p>
              
              <button className=' grid bg-primary px-5 py-2 mx-auto rounded mt-5 w-[100%]' type="submit">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact