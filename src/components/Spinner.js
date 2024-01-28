import React, { Component } from 'react'
import src from './src/spinner.gif'

const Spinner=()=> {
  return (
      <div className='text-center'>
        <img src={src} className='my-3' alt="Loading ..." />
      </div>
    )
  
}

export default Spinner