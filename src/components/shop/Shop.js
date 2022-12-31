import React from 'react'
import ShopItem from './shop_item/ShopItem'
import cls from './Shop.module.css'

const Shop = () => {
    const items = new Array(2).fill(0)
    return (
        <div className={cls.shop}>
            <h2>Shop</h2>
            {items.map(item => <ShopItem></ShopItem>)}
        </div>
    )
}

export default Shop