import React from 'react'
// import Pie from '../Pie/Pie'
import style from './Menu.module.scss'
import zigZagBanner from '../../assets/images/zigZagBanner.png'

const Menu = (props) => {
  const { menuData } = props

  const makePies = () => {
    // return menuData.map(pie => {
    //   const {
    //     name,
    //     ingredients,
    //   } = pie

    //   return (
    //     <Pie 
    //       name={name}
    //       filling={ingredients.filling}
    //       crust={ingredients.crust}
    //     />
    //   )
    // })
  }
  
  return (
    <div className={style.Menu}>
      <img className={`img-fluid ${style.zigZig}`} src={zigZagBanner} alt="hand drawn zig zag design"/>
      <div className={style.menuCard}>
        <h1 className={`${style.heading}`}>Menu</h1>
      </div>
      <div className={`${style.menuSection}`}></div>
      {makePies}
    </div>
  )
}

export default Menu