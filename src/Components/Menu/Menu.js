import React from 'react'
import Pie from '../Pie/Pie'
import valentinesMenu from './ValentinesMenuData.js'
import style from './Menu.module.scss'
import zigZagBanner from '../../assets/images/zigZagBanner.png'

const Menu = () => {

  const makePies = () => {
    return valentinesMenu.map((pie, index) => {
      const {
        id,
        name,
        description,
        ingredients,
        img1,
        img2,
        availableGF,
        availableVegan
      } = pie

      if (index === valentinesMenu.length - 1) {
        return (
          <div className="d-flex">
            <span className={`align-self-center ${style.heart}`}>❤️</span>
            <Pie
              id={id}
              name={name}
              description={description}
              ingredients={ingredients}
              img1={img1}
              img2={img2}
              availableGF={availableGF}
              availableVegan={availableVegan}
            />
            <span className={`align-self-center ${style.heart}`}>❤️</span>
          </div>
        );
      }
      
      return (
        <Pie
          id={id}
          name={name}
          description={description}
          ingredients={ingredients}
          img1={img1}
          img2={img2}
          availableGF={availableGF}
          availableVegan={availableVegan}
        />
      )
    })
  }
  
  return (
    <div className={style.Menu}>
      <div className={style.banner}>
        <img className={`img-fluid ${style.zigZig}`} src={zigZagBanner} alt="hand drawn zig zag design"/>
        <div className={style.menuCard}>
          <h1 className={`${style.heading}`}>Menu</h1>
        </div>
      </div>
      <div className={`d-flex flex-wrap justify-content-center mt-2 ${style.piePan}`}>
        {makePies()}
      </div>
    </div>
  )
}

export default Menu