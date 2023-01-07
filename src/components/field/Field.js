import React, { useState } from 'react'
import CellComponent from '../cellComponent/CellComponent'
import cls from './Field.module.css'
import CField from '../../utils/field'

const Field = ({field, setField}) => {
    const [active, setActive] = useState(null)

    const changeCells = (field, i, j) => {
        let res = [...field]
        // res[i][j].changeValue()
        if (!active) {
            setActive([i,j])
            setField(res)
            return
        } else {
            if (i === active[0] && j === active[1]) {
                console.log('gi');
                setActive(null)
                return
            }
            if (res[active[0]][active[1]].value === res[i][j].value) {
                res[i][j].changeValue()
                res[active[0]][active[1]].reset()
                setActive(null)
                return
            }
            let temp = res[active[0]][active[1]]
            res[active[0]][active[1]] = res[i][j]
            res[i][j] = temp
            setActive(null)
        }
        setField(res)
    }
    // Взаимодействие с ячейками
    // field[0][0].value = 8
    // field[0][0].setColor()
    // console.log(cells);
    return (
        <div className={cls.field}>
            {field.map((row, i) => row.map((el, j) => {
                return <CellComponent
                    change={() => changeCells(field, i, j)}
                    readble={() => el.readble()}
                    color={el.color}
                    key={i*4 + j}
                />}
            ))}
        </div>
    )
}

export default Field