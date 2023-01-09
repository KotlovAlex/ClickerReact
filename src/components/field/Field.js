import React, { useState } from 'react'
import CellComponent from '../cellComponent/CellComponent'
import cls from './Field.module.css'

const Field = ({field, setField}) => {
    const [active, setActive] = useState(null)

    const changeCells = (field, i, j) => {
        let res = [...field]
        if (!active) {
            if (res[i][j].value === null) return
            setActive([i,j])
            return
        } else {
            if (i === active[0] && j === active[1]) {
                setActive(null)
                return
            }
            if (res[active[0]][active[1]].value === res[i][j].value) {
                res[i][j].changeValue()
                res[active[0]][active[1]].reset()
                setField(res)
                setActive(null)
                return
            }
            let temp = res[active[0]][active[1]]
            res[active[0]][active[1]] = res[i][j]
            res[i][j] = temp
            setField(res)
            setActive(null)
        }
    }
    return (
        <div className={cls.field}>
            {field.map((row, i) => row.map((el, j) => {
                return <CellComponent
                    cell={el}
                    change={() => changeCells(field, i, j)}
                    readble={() => el.readble()}
                    color={active ? ((i === active[0] && j === active[1]) ? 'active' : el.color) : el.color}
                    key={i*4 + j}
                    active={active}
                    setActive={setActive}
                    row={i}
                    col={j}
                />}
            ))}
        </div>
    )
}

export default Field