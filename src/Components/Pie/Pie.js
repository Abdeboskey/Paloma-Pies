import React from 'react'
import style from './Pie.module.scss'

const orderForm = 'https://docs.google.com/forms/d/e/1FAIpQLSeArz3bQT3gvbQ_PCHv4p3nr5-g6cZnQTAxkWlhl7BttINSLA/viewform'

const Pie = (props) => {
const {
  id,
  name,
  description,
  img1,
  img2,
} = props

  return (
    <div className={style.Pie} key={id}>
      <img
        className={style.piePic}
        src={img1}
        alt={`${name} on table with plants and sunlight`}
      />
      <a href={orderForm} target="_blank" rel="noreferrer">
        <div className={style.pieDetail}>
          <div className={style.film}></div>
          <h2 className={id % 2 === 0 ? style.pieTitleRight : style.pieTitleLeft}>
            {name}
          </h2>
          <p className={id % 2 === 0 ? style.descLeft : style.descRight}>“{description}”</p>
          <img
            className={style.piePic}
            src={img2}
            alt={`slice of ${name}`}
          />
        </div>
      </a>
    </div>
  );
}

export default Pie 