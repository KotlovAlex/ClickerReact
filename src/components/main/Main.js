import React, {useState} from 'react'
import ProgressBar from '../progressBar/ProgressBar'
import Info from '../info/Info'
import Field from '../field/Field'
import Shop from '../shop/Shop'
import Button from '../UI/button/Button'
import cls from './Main.module.css'

const Main = ({score, sum}) => {

    const [progress, setProgress] = useState(0)

    const clickHandler = () => {
        if (progress<= 95)
            setProgress(prev => prev + 5)
        else
            setProgress(prev => prev - 95)
    }

    return (
        <div className={cls.main}>
            <ProgressBar progress={progress} setProgress={setProgress}></ProgressBar>
            <Button onClick={clickHandler} text='Click'></Button>
            <Info name='Score' value={score}></Info>
            <Info name='Sum' value={sum}></Info>
            <div className={cls.container}>
                <Field></Field>
                <Shop></Shop>
            </div>
        </div>
    )
}

export default Main