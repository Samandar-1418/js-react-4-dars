import React from 'react';
import Navbar from '../navbar/navbar';
import './header.css'


export default function Header() {
  const data = { 
    text: 'Home',
    textOne:'Kandidatlar',
    textTwo:'Vakansiyalar',
    textThree:'Chat',
    textFour:'Habarlar',
    textFive: 'Xabarlar',
    textSix:'Sozlamalar'
  };

  return (
    <div>
      <Navbar data={data} />
    </div>
   
  );
}
