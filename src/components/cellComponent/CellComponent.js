import React from 'react'
import cls from './CellComponent.module.css'
import './colors.css'

const CellComponent = ({change, readble, color}) => {
    let classes = color === 'active' ? `${cls.cell} active` : `${cls.cell} color${color}`

    return (
        <div onClick={() => change()} className={classes}>{readble()}</div>
    )
}

export default CellComponent