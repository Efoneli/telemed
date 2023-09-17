import React from 'react'
import avatatIcon from '../../assets/images/avatar-icon.png'
import DateTime from './DateTime';

const Appointment = () => {
  return (
    <>
      <div className='mx-4 p-2'>
        <h2 className='heading text-center m-3'>
          Book an Appointment
        </h2>
        <hr />
        <p className='text__para text-center p-2 mb-3'>
          Confirm a date and time for your appointment with a practitioner. Include a note as well.
        </p>
        <h3 className='text__para font-bold'>DOCTOR</h3>

        <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 mb-3 lg:mt-[18px]">
          <img src={avatatIcon} alt="" />
          <div className='flex flex-col'>
            <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
              Wayne Collins
            </h4>
            <p>MBBS, BCS, MD (Medical Director)</p>
          </div>
        </div>
        <hr />

        <h3 className='text__para font-bold'>SERVICE</h3>

        <p className="flex items-center gap-[6px] lg:gap-[10px] mt-2 mb-3 lg:mt-[18px]"><span className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">Medical Officer </span>  -  Video Consultation <span className='font-bold'> ($15)</span></p>

        <h3 className='text__para font-bold'>DATE & TIME</h3>
        <DateTime />
        <hr />

        <label>
          <h3 className='text__para font-bold'>NOTE</h3>
          <textarea className="border border-solid border-[#0066ff34] focus:outline outline outline-gray-50 w-full px-4" rows="5" placeholder="Write your message">

          </textarea>
        </label>

        <button className='btn flex items-center justify-center'>Book Appointment</button>
      </div>
    </>
  )
}

export default Appointment;