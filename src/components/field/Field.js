import React from 'react'
import Cell from '../cell/Cell'
import cls from './Field.module.css'

const Field = () => {
    const cells = new Array(24).fill(0)
    return (
        <div className={cls.field}>
            {cells.map(cell => <Cell></Cell>)}
        </div>
    )
}

export default Field