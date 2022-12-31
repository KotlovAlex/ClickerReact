import React from 'react'
import cls from './Cell.module.css'

const Cell = ({value}) => {
  return (
    <div className={cls.cell}>{value}</div>
  )
}

export default Cell