import React from 'react'
import './select.css'
export default function Select() {
  return (
<>
    <div className='selectContainer'>
     <label for="Deeline">Ariza topshirish muddati <span>*</span></label>

<select name="Deeline" id="Deeline">
<option value="1Deeline">Deeline</option>
  <option value="12.09.2024">12.09.2024</option>
  <option value="18.12.2023">18.12.2023</option>
 
</select> 
    </div>

    <div className='selectContainer'>
     <label for="Deeline">Ish turi <span>*</span></label>

<select name="Deeline" id="Deeline">
  <option value="Ish turi">Ish turi</option>
  <option value="Oshpaz">Oshpaz</option>
  <option value="Sartarosh">Sartarosh</option>
  <option value="Suvoqchi">Suvoqchi</option>
  <option value="Tikuvchi">Tikuvchi</option>
</select> 
    </div>
    <div className='selectContainer'>
     <label for="Ish vaqti ">Ish vaqti <span>*</span></label>

<select name="Ish vaqti " id="Ish vaqti ">
  <option value="Ish vaqti ">Ish vaqti</option>
  <option value="8:30-16:30">8:30-16:30</option>
  <option value="10:00-20:00 ">10:00-20:00</option>
  <option value="16:30-3:00">16:30-3:00</option>
</select> 
    </div>
</>
  )
}
