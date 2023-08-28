import React from 'react'
import heroImage from '../assets-void/images/muhib.png'
import heroImage2 from '../assets-void/images/bruno.jpg'
import heroImage3 from '../assets-void/images/sander.jpg'
import icon from '../assets-void/images/design.png'

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
                <img src='{icon}' alt='' />
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Home