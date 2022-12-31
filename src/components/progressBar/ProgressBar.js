import React, {useEffect} from 'react'
import cls from './ProgressBar.module.css'

const ProgressBar = ({progress, setProgress, time}) => {

    useEffect(() => {
        const interval = setInterval(() => {
            if (progress <= 99)
                setProgress(prev => prev + 1)
            else
                setProgress(prev => prev - 99)

    // }, time);
    }, 60);
        return () => {
            clearInterval(interval)
        };
    }, [progress, setProgress]);

    return (
        <div>
            <div className={cls.progressBar}>
                <div className={cls.progressLine} style={{width: `${progress}%`}}></div>
            </div>
        </div>
    )
}

export default ProgressBar