import React from 'react'
import Pie from '../Pie/Pie'
import valentinesMenu from './ValentinesMenuData.js'
import style from './Menu.module.scss'
import zigZagBanner from '../../assets/images/zigZagBanner.png'

const orderForm = 'https://docs.google.com/forms/d/e/1FAIpQLSeArz3bQT3gvbQ_PCHv4p3nr5-g6cZnQTAxkWlhl7BttINSLA/viewform'


const Menu = () => {

  const makePies = () => {
    return valentinesMenu.map((pie, index) => {
      const {
        id,
        name,
        description,
        img1,
        img2,
      } = pie

      if (index === valentinesMenu.length - 1) {
        return (
          <div className="d-flex">
            <span className={`align-self-center ${style.heart}`}>❤️</span>
            <Pie
              id={id}
              name={name}
              description={description}
              img1={img1}
              img2={img2}
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
          img1={img1}
          img2={img2}
        />
      )
    })
  }
  
  return (
    <div className={style.Menu}>
      <div className={style.banner}>
        <img
          className={`img-fluid ${style.zigZag}`}
          src={zigZagBanner}
          alt="hand drawn zig zag design"
        />
        <div className={style.menuCard}>
          <h1 className={`${style.heading}`}>Menu</h1>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center mt-2">
        {makePies()}
      </div>
      <div className={style.orderBanner}>
        <img
          className={`img-fluid ${style.zigZag}`}
          src={zigZagBanner}
          alt="hand drawn zig zag design"
        />
        <a
          className={style.orderLink}
          href={orderForm}
          target="_blank"
          rel="noreferrer"
        >
          <h2>Click Here To Place Your Order</h2>
        </a>
      </div>
    </div>
  );
}

export default Menu