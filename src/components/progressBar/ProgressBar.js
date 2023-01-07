import React, {useEffect, useState} from 'react'
import { valueToRead } from '../../utils/helper';
import Button from '../UI/button/Button';
import cls from './ProgressBar.module.css'

const ProgressBar = ({sum, setScore, spawn, value, time, progress,setProgress}) => {

    const clickHandler = () => {
        if (progress<= 95)
        setProgress(prev => prev + 5)
        else {
            setProgress(prev => prev - 95)
            spawn()
            setScore(prev => prev + sum)
        }
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (progress <= 99)
                setProgress(prev => prev + 1)
            else {
                setProgress(prev => prev - 99)
                spawn()
                setScore(prev => prev + sum)
            }
    }, time);
        return () => {
            clearInterval(interval)
        };
    }, [progress, setProgress]);

    return (
        <div className={cls.container}>
            <div className={cls.progressBar}>
                <div className={cls.progressLine} style={{width: `${progress}%`}}></div>
            </div>
            <Button onClick={clickHandler} text='Click'></Button>
        </div>
    )
}

export default ProgressBar