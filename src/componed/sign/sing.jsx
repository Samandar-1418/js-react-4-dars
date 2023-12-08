import React from 'react'
import Select from './select/select'
import './sign.css'
import Input from './Input/input'
import InputOne from './Input/inputOne'
import InputTwo from './Input/inputTwo'
import Selescts from './select/SelectTwo'
import Selectthree from './select/SelectThree'
import Checkbooks from './chechbooks/checkbooks'
export default function Sing() {
  return (
    <div className='container'>
      <h1>Vakansiya yaratish</h1>
      <p>Yangi vakansiya uchun ma’lumotlar</p>
      <Input></Input>
         <div>
         <Select></Select>
         </div>
            <Selescts></Selescts>
            <InputOne></InputOne>
            <InputTwo></InputTwo>
             <SelectFour></SelectFour>
            <Checkbooks></Checkbooks>
            <Selectthree></Selectthree>
    </div>
  )
}
