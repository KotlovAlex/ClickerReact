import React from 'react'
import ShopItem from './shop_item/ShopItem'
import cls from './Shop.module.css'

import {intervalToSec} from '../../utils/helper'

const Shop = ({score, setScore, value, setValue, time, setTime, speed_cost, value_cost, setSpeed_cost, setValue_cost}) => {
    const items = [{
        name: 'speed',
        value: `${intervalToSec(time)}s`,
        cost: speed_cost,
        setCost: setSpeed_cost,
        setValue: setTime
    }, {
        name: 'value',
        value: `${value}`,
        cost: value_cost,
        setCost: setValue_cost,
        setValue: setValue
    }]
    return (
        <div className={cls.shop}>
            <h2>Shop</h2>
            {items.map(({name, value, cost, setCost, setValue}) => 
            <ShopItem 
                name={name} 
                value={value} 
                setValue={setValue}
                cost={cost} 
                setCost={setCost} 
                score={score} 
                setScore={setScore}
                key={name} 
            />)}
        </div>
    )
}

export default Shop