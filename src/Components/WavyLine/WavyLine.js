import React from 'react'
import style from './WavyLine.module.scss'

const WavyLine = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className={style.downWave}></div>
      <div className={style.upWave}></div>
      <div className={style.downWave}></div>
      <div className={style.upWave}></div>
      <div className={style.downWave}></div>
      <div className={style.upWave}></div>
      <div className={style.downWave}></div>
      <div className={style.upWave}></div>
      <div className={style.downWave}></div>
      <div className={style.upWave}></div>
      <div className={style.downWave}></div>
      <div className={style.upWave}></div>
      <div className={style.downWave}></div>
      <div className={style.upWave}></div>
      <div className={style.downWave}></div>
    </div>
  )
}

export default WavyLine