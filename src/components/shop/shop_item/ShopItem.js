import React from 'react'
import Button from '../../UI/button/Button'
import cls from './ShopItem.module.css'

const ShopItem = ({name, value, cost}) => {
  return (
    <div className={cls.shop_item}>
        <span>Current {name} is:</span>
        <span>{value}</span>
        <span>Cost to upgrage is:</span>
        <span>{cost}</span>
        <Button className={cls.button} text='Upgrage'></Button>
    </div>
  )
}

export default ShopItem