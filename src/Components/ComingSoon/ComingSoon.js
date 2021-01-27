import React from 'react'
import style from './ComingSoon.module.scss'
// import comingSoonBanner from '../../assets/images/comingSoonBanner.jpg'
import instaIcon from '../../assets/icons/instaIcon.png'
import fbIcon from '../../assets/icons/fbIcon.png'

const ComingSoon = () => {
  return (
    <main className={style.ComingSoon}>
      <h1>
        Welcome to Paloma Pies<span>🕊</span>
      </h1>
      <p className={style.topBanner}>
        This page is currently under construction
        <br />
        in preparation for our Valentine's Day Sale!
        <br />
        Please check back on Monday, February 1st
        <br />
        to see our new menu and place an order!
        <br />
      </p>
      <p className={style.bottomBanner}>
        -xoxo{' '}
        <span>❤️</span>
      </p>
      <div className={style.social}>
        <img src={instaIcon} alt="instagram icon" />
        <img src={fbIcon} alt="facebook icon" />
      </div>
    </main>
  );
}

export default ComingSoon