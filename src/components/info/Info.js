import React from 'react'
import cls from './Info.module.css'

const Info = ({name, value}) => {
  return (
    <div className={cls.info}>{name}: {value}</div>
  )
}

export default Info