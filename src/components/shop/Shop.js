import React from 'react'
import ShopItem from './shop_item/ShopItem'
import cls from './Shop.module.css'

import {intervalToSec} from '../../utils/helper'

const Shop = ({time, speed_cost, value_cost}) => {
    const items = [{
        name: 'speed',
        value: `${intervalToSec(time)}s`,
        cost: speed_cost // +localStorage.getItem('speed_cost') || 4500
    }, {
        name: 'value',
        value: `0`,
        cost: value_cost // +localStorage.getItem('value_cost') || 4500
    }]
    return (
        <div className={cls.shop}>
            <h2>Shop</h2>
            {items.map(({name, value, cost}) => <ShopItem name={name} value={value} cost={cost} key={name}></ShopItem>)}
        </div>
    )
}

export default Shop