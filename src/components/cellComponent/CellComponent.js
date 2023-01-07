import React, {} from 'react'
import cls from './CellComponent.module.css'
import './colors.css'

const CellComponent = ({change, readble, color}) => {
    let classes = `${cls.cell} color${color}`

    const clickHandler = () => {
        change()
    }

    return (
        <div onClick={() => clickHandler()} className={classes}>{readble()}</div>
    )
}

export default CellComponent