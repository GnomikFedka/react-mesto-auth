import React from 'react';
import vector from '../images/Vector.svg';
export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={vector} alt="логотип Место Россия" />
    </header>
  )
}