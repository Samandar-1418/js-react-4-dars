import React from 'react'
import './input.css'
export default function Input() {
  return (
    <div className='inputWrapper'>
        <span>Sarlavha <span className='span'>*</span></span>
      <input type="text" placeholder='sarlavha' />
    </div>
  )
}
