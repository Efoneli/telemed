import React from 'react'
import heroImage from '../assets/images/hero-img01.png'
import heroImage2 from '../assets/images/hero-img02.png'
import heroImage3 from '../assets/images/hero-img03.png'
import icon1 from '../assets/images/icon01.png'
import icon2 from '../assets/images/icon02.png'
import icon3 from '../assets/images/icon03.png'
import { Link } from 'react-router-dom'
import { BsArrowRight, } from 'react-icons/bs'
import About from '../components/About/About'

const Home = () => {
  return (
    <>
      <section className='hero__section pt-[60px] 2xl:h-[800px] bg-gradient-to-br from-cyan-100 via-white to-yellow-100'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/* hero content */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                  We help patients live a heathy, longer life.
                </h1>
                <p className='text__para'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam delectus saepe qui nihil eos libero, esse impedit, hic repudiandae adipisci deserunt. Placeat voluptates veritatis deleniti odit, voluptas possimus corrupti quam maiores! Impedit exercitationem id quaerat doloremque perferendis est delectus, perspiciatis repudiandae inventore laudantium accusantium non vitae odit eum voluptatibus pariatur.
                </p>
                <button className='btn'>Request an application</button>
              </div>

              {/* hero counter  */}
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[- 14px]'></span>
                  <p className='text__para'>Years of Experience</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Clinic Location</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                  <span className='w-[100px] h-2 bg-irishBlueColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Patient Satisfactory</p>
                </div>
              </div>
            </div>

            {/* hero content */}
            <div className='flex gap-[30px] justify-end'>
              <div>
                <img src={heroImage} alt='' className='w-full' />
              </div>
              <div className='mt-[30px]'>
              <img src={heroImage2} alt='' className='w-full mb-[30px]' />
              <img src={heroImage3} alt='' className='w-full' />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className="container">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Providing the best medical services
            </h2>
            <p className='text__para text-center'>
              World class care for everyone. Our health system offers unmatched, expert health care.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon1} alt='' />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Find a Doctor
                </h2>
                <p>
                World class care for everyone. Our health system offers unmatched, expert health care. from the lab to the clinic.
                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                </Link>
              </div>
            </div>
            
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon2} alt='' />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Find a Location
                </h2>
                <p>
                World class care for everyone. Our health system offers unmatched, expert health care. from the lab to the clinic.
                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                </Link>
              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon3} alt='' />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Book Appointment
                </h2>
                <p>
                World class care for everyone. Our health system offers unmatched, expert health care. from the lab to the clinic.
                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* about section start */}

      <About />

     {/* about section end */}

     {/* service section start */}

    <section>
      <div className='container'>

      </div>

    </section>

          {/* service section start */}



    </>
  )
}

export default Home