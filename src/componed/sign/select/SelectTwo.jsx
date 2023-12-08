import React from 'react'
import './select.css'
export default function Selescts() {
  return (
    <div className='Container'>
          <div className="selectInfoContainer">
     <div className="selectContainer">
     <label for="Davlat">Davlat<span>*</span></label>

<select name="Davlat " id="Davlat ">
  <option value="Davlat ">Davlat</option>
  <option value="O'zbekiston">O'zbekiston</option>
  <option value="Qozog'iston">Qozog'iston</option>
  <option value="Litva">Litva</option>
</select> 
     </div>

     <div className="selectContainer">
     <label for="Shahar">Shahar<span>*</span></label>

<select name="Shahar " id="Shahar ">
  <option value="Shahar ">Shahar</option>
  <option value="Qo'qon">Qo'qon</option>
  <option value="Guliston">Guliston</option>
  <option value="Toshkent">Toshkent</option>
</select> 
     </div>
    </div>
          <div className="selectContainerTwo">
     <div className="selectContainer">
     <label for="Til">Til<span>*</span></label>

<select name="Til " id="Til ">
  <option value="Til ">Til</option>
  <option value="O'zbek tili">O'zbek tili</option>
  <option value="Qozoq tili">Qozoq tili</option>
  <option value="ingliz tili">Ingliz tili</option>
</select> 
     </div>

     <div className="selectContainer">
     <label for="Shahar">Darajasi<span>*</span></label>

<select name="Darajasi " id="Darajasi ">
  <option value="Darajasi ">Darajasi</option>
  <option value="Beginner">Beginner</option>
  <option value="Hard">Hard</option>
  <option value="Expert">Expert</option>
</select> 
     </div>
    </div>
    </div>
  )
}
