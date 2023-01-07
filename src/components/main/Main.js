import React, {useState ,useEffect} from 'react'
import ProgressBar from '../progressBar/ProgressBar'
import Info from '../info/Info'
import Field from '../field/Field'
import Shop from '../shop/Shop'
import cls from './Main.module.css'
import CField from '../../utils/field'

const Main = ({}) => {
    const [field, setField] = useState(+localStorage.getItem('field') || new CField().field)
    const [score, setScore] = useState(+localStorage.getItem('score') || 0)
    const [sum, setSum] = useState(+localStorage.getItem('sum') || 0)
    const [time, setTime] = useState(+localStorage.getItem('sum') || 70)
    const [progress, setProgress] = useState(+localStorage.getItem('progress') || 0)
    const [speed_cost, setSpeed_cost] = useState(+localStorage.getItem('speed_cost') || 4500)
    const [value_cost, setValue_cost] = useState(+localStorage.getItem('value_cost') || 4500)

    useEffect(() => {
        setInterval(() => {
            localStorage.setItem('field', field)
            localStorage.setItem('score', score)
            console.log(localStorage.getItem('field'));
            console.log('saved');
        },500)
    }, []);

    return (
        <div className={cls.main}>
            <ProgressBar progress={progress} setProgress={setProgress} time={time}></ProgressBar>
            <Info name='Score' value={score}></Info>
            <Info name='Sum' value={sum}></Info>
            <div className={cls.container}>
                <Field field={field} setField={setField}></Field>
                <Shop time={time} speed_cost={speed_cost} value_cost={value_cost}></Shop>
            </div>
        </div>
    )
}

export default Main