import React, { useState } from 'react'
import CellComponent from '../cellComponent/CellComponent'
import cls from './Field.module.css'
import CField from '../../utils/field'

const Field = () => {
    const field = new CField()
    const [cells, setCells] = useState(field.field)

    const changeCells = (field, i, j) => {
        console.log(field);
        let res = [...field]
        res[i][j].changeValue()
        setCells(res)
    }
    // Взаимодействие с ячейками
    // cells[0][0].value = 8
    // cells[0][0].setColor()
    // console.log(cells);
    return (
        <div className={cls.field}>
            {cells.map((row, i) => row.map((el, j) => {
                return <CellComponent
                    change={() => changeCells(cells, i, j)}
                    readble={() => el.readble()}
                    color={el.color}
                    key={i*4 + j}
                />}
            ))}
        </div>
    )
}

export default Field