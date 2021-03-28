import React from 'react'
import { Link } from 'react-router-dom'
import PalomaCube from '../PalomaCube/PalomaCube'
import style from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={style.NotFound}>
      <h2 className={style.greeting}>Oh my, how did you get here?</h2>
      <PalomaCube />
      <h3 className={style.homelink}>
        Let's get you <Link to="/">back on track</Link>
      </h3>
    </div>
  );
}

export default NotFound