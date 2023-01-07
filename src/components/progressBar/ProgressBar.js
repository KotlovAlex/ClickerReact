import React, {useEffect, useState} from 'react'
import Button from '../UI/button/Button';
import cls from './ProgressBar.module.css'

const ProgressBar = ({time, progress,setProgress}) => {

    const clickHandler = () => {
        if (progress<= 95)
        setProgress(prev => prev + 5)
        else
        setProgress(prev => prev - 95)
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (progress <= 99)
                setProgress(prev => prev + 1)
            else
                setProgress(prev => prev - 99)
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