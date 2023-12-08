import React from 'react'
import './select.css'
export default function Selescts() {
  return (
    <div className='Container'>
          <div className="selectInfoContainer">
     <div className="selectContainer">
     <label for="Maosh muddati ">Maosh muddati <span>*</span></label>

<select name="Maosh muddati  " id="Maosh muddati  ">
  <option value="Period">Period</option>
  <option value="Kunlik">Kunlik</option>
  <option value="Oy">Oy</option>
  <option value="1 yillik">1 yillik</option>
</select> 
     </div>

     <div className="selectContainer">
     <label for="Shahar">Valyuta<span>*</span></label>

<select name="Valyuta " id="Valyuta ">
  <option value="Currency ">Currency</option>
  <option value="Sum">Sun</option>
  <option value="Evro">Evro</option>
  <option value="Dollar">Dollar</option>
</select> 
     </div>
    </div>

    </div>
  )
}
