import React from 'react'
import './select.css'
export default function Selescts() {
  return (
    <div className='Container'>
          <div className="selectInfoContainer">
     <div className="selectContainer">
     <label for="Min ">Minimal Maosh <span>*</span></label>

<select name="Min" id="Min">
  <option value="2 milliom">2 million</option>
  <option value="3 million">3 million</option>
  <option value="5 million">5 million</option>
  <option value="10 million">10 million</option>
</select> 
     </div>

     <div className="selectContainer">
     <label for="Max">Maximal maosh<span>*</span></label>

<select name="Max " id="Max ">
  <option value="10 million ">10 million</option>
  <option value="30 million">30 million</option>
  <option value="50 million">50 million</option>
  <option value="100 million">100 million</option>
</select> 
     </div>
    </div>

    </div>
  )
}
