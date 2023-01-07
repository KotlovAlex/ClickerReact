import React, {useState} from 'react'
import ProgressBar from '../progressBar/ProgressBar'
import Info from '../info/Info'
import Field from '../field/Field'
import Shop from '../shop/Shop'
import cls from './Main.module.css'

const Main = ({}) => {
    const [score, setScore] = useState(+localStorage.getItem('score') || 0)
    const [sum, setSum] = useState(+localStorage.getItem('sum') || 0)
    const [time, setTime] = useState(+localStorage.getItem('sum') || 70)

    return (
        <div className={cls.main}>
            <ProgressBar time={time}></ProgressBar>
            <Info name='Score' value={score}></Info>
            <Info name='Sum' value={sum}></Info>
            <div className={cls.container}>
                <Field></Field>
                <Shop time={time}></Shop>
            </div>
        </div>
    )
}

export default Main