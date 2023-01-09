import React, {useState ,useEffect} from 'react'
import ProgressBar from '../progressBar/ProgressBar'
import Info from '../info/Info'
import Field from '../field/Field'
import Shop from '../shop/Shop'
import cls from './Main.module.css'
import CField from '../../utils/field'

import { fromFieldToSave, fromSaveToField, valueToRead } from '../../utils/helper'
import Cell from '../../utils/cell'

const cfield = new CField(fromSaveToField(localStorage.getItem('field'))) || new CField()

const Main = ({}) => {
    const [field, setField] = useState(cfield.field)
    const [score, setScore] = useState(+localStorage.getItem('score') || 0)
    const [sum, setSum] = useState(+localStorage.getItem('sum') || 0)
    const [time, setTime] = useState(+localStorage.getItem('time') || 70)
    const [progress, setProgress] = useState(+localStorage.getItem('progress') || 0)
    const [speed_cost, setSpeed_cost] = useState(+localStorage.getItem('speed_cost') || 4500)
    const [value_cost, setValue_cost] = useState(+localStorage.getItem('value_cost') || 4500)
    const [current_value, setCurrent_value] = useState(+localStorage.getItem('current_value') || 1)
    
    const updateField = (field) => {
        let res = [...field]
        for (let i = 0; i < res.length; i++) {
            for (let j = 0; j < res[0].length; j++) {
                if (res[i][j].value && res[i][j].value < current_value) {
                    res[i][j].value *= 2
                    res[i][j].setColor()
                }
            }
        }
        return res
    }
    
    useEffect(() => {
        setInterval(() => {
            setSum(cfield.sum())
        },0)
    }, []);

    useEffect(() => {
        setField(updateField(field))
        // console.log(fromSaveToField(localStorage.getItem('field')));
        // console.log(field);
    }, [current_value])

    useEffect(() => {
        localStorage.setItem('score', score)
        localStorage.setItem('sum', sum)
        localStorage.setItem('time', time)
        localStorage.setItem('progress', progress)
        localStorage.setItem('speed_cost', speed_cost)
        localStorage.setItem('value_cost', value_cost)
        localStorage.setItem('current_value', current_value)
        localStorage.setItem('field', fromFieldToSave(field))
    }, [progress])

    return (
        <div className={cls.main}>
            <ProgressBar 
                spawn={() => cfield.spawn(current_value, current_value)} 
                value={current_value} 
                progress={progress} 
                setProgress={setProgress} 
                time={time}
                setSum={setSum}
                setScore={setScore}
                sum={sum}
            />
            <Info name='Score' value={valueToRead(score)}></Info>
            <Info name='Sum' value={valueToRead(sum)}></Info>
            <div className={cls.container}>
                <Field field={field} setField={setField}></Field>
                <Shop 
                    time={time} 
                    speed_cost={speed_cost} 
                    value_cost={value_cost} 
                    value={current_value}
                    score={score}
                    setScore={setScore}
                    setSpeed_cost={setSpeed_cost}
                    setValue_cost={setValue_cost}
                    setTime={setTime}
                    setValue={setCurrent_value}
                />
            </div>
        </div>
    )
}

export default Main