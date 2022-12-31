import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Main from '../main/Main'
import cls from './Container.module.css'

const Container = () => {
  return (
    <div className={cls.container}>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
  )
}

export default Container