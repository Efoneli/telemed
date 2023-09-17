import React from 'react'
import LocationPicker from '../Location/LocationPicker';

const Location = () => {
  return (
    <>
      <div className='mx-4 p-2'>
        <h2 className='heading text-center m-3'>
          Book a Location
        </h2>
        <hr />
        <p className='text__para text-center p-2 mb-3'>
          Confirm your Location.
        </p>

        <h3 className='text__para font-bold'>Location</h3>
        <LocationPicker />

        <hr />


        <button className='btn flex items-center justify-center'>Pick Location</button>
      </div>
    </>
  )
}

export default Location;