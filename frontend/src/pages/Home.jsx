import React from 'react'

const Home = () => {
  return (
    <>
      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg: flex-row gap-[90px] items-center justify-between'>
            {/* hero content */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                  We help patients live a heathy, longer life.
                </h1>
                <p className='text__para'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam delectus saepe qui nihil eos libero, esse impedit, hic repudiandae adipisci deserunt. Placeat voluptates veritatis deleniti odit, voluptas possimus corrupti quam maiores! Impedit exercitationem id quaerat doloremque perferendis est delectus, perspiciatis repudiandae inventore laudantium accusantium non vitae odit eum voluptatibus pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home