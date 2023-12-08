import React from 'react'
import './input.css'
export default function InputOne() {
  return (
    <div className='inputWrapper'>
        <span>Soha <span className='span'>*</span></span>
      <input type="text" placeholder='Soha' />
    </div>
  )
}
