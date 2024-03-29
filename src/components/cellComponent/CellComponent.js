import React from 'react'
import cls from './CellComponent.module.css'
import './colors.css'

const CellComponent = ({setActive, value, row, col, change, readble, color}) => {
    let classes = color === 'active' ? `${cls.cell} active` : `${cls.cell} color${color}`
    classes = value  ? `${classes} ${cls.grabble}` : classes

    const onDragStartHandler = (e) => {
        if (value) {
            setActive([row, col])
        }
    }
    
    const onDragLeaveHandler = (e) => {
        onDragEndHandler(e)
    }

    const onDragEndHandler = (e) => {
        e.target.classList.remove(cls.over)
        e.target.classList.add(color === 'active' ? 'active' : `color${color}`)
    }

    const onDragOverHandler = (e) =>  {
        e.preventDefault()
        e.target.classList.add(cls.over)
        e.target.classList.remove(color === 'active' ? 'active' : `color${color}`)
    }

    const onDropHandler = (e) => {
        e.preventDefault()
        e.target.classList.remove(cls.over)
        change()
    }

    return (
        <div 
            draggable={value ? true : false}
            onDragStart={(e) => onDragStartHandler(e)}
            onDragLeave={(e) => onDragLeaveHandler(e)}
            onDragEnd={(e) => onDragEndHandler(e)}
            onDragOver={(e) => onDragOverHandler(e)}
            onDrop={(e) => onDropHandler(e)}
            onClick={(e) => change()} 
            className={classes}>{readble()}
        </div>
    )
}

export default CellComponent