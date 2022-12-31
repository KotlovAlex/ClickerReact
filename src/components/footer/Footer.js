import React from 'react'
import cls from './Footer.module.css'
import logo from '../../static/images/logo.svg'

export const Footer = () => {
  return (
    <div className={cls.footer}>
        <div className={cls.llc}>
            <span>© 2021 Alexkot LLC</span>
        </div>
        <img class={cls.logo} src={logo} alt='logo'/>
    </div>
  )
}

export default Footer