import React from 'react'
import cls from './Header.module.css'
import logo from '../../static/images/logo.svg'

const Header = () => {
  return (
    <div className={cls.header}>
        <img className={cls.logo} src={logo} alt='logo'/>
    </div>
  )
}

export default Header