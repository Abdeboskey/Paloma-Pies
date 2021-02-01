import React from 'react'
import style from './Pie.module.scss'

const Pie = (props) => {
const {
  id,
  name,
  description,
  ingredients,
  img1,
  img2, 
  availableGF,
  availableVegan
} = props

  return (
    <div className={style.Pie} key={id}>
      {/* <h2 className={id % 2 === 0 ? style.pieTitleRight : style.pieTitleLeft}>{name}</h2> */}
      <img className={style.piePic} src={img1} alt={`${name} on table with plants and sunlight`}/>
    </div>
  )
}

export default Pie