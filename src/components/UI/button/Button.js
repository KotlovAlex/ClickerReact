import React from 'react'
import cls from './Button.module.css'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick} className={cls.button}>{text}</button>
  )
}

export default Button