import React from 'react'
import { valueToRead } from '../../../utils/helper'
import Button from '../../UI/button/Button'
import cls from './ShopItem.module.css'

const ShopItem = ({name, value, setValue, cost, setScore, score, setCost}) => {
    const clickHandler = () => {
        let score_value = +(score.toString().replaceAll(',',''))
        if (score_value > cost) {
            setScore(prev => prev - cost)
            setCost(prev => (prev * 3.7).toFixed(0))
            if (name === 'speed') {
                setValue(prev => prev - 1) 
            } else {
                setValue(prev => prev * 2) 
            }
            
        }
    }
    return (
        <div className={cls.shop_item}>
            <span>Current {name} is:</span>
            <span>{value}</span>
            <span>Cost to upgrage is:</span>
            <span>{valueToRead(cost)}</span>
            <Button className={cls.button} text='Upgrage' onClick={() => clickHandler()}></Button>
        </div>
    )
}

export default ShopItem