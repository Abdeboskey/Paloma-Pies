import React from 'react'
import style from './ComingSoon.module.scss'
// import comingSoonBanner from '../../assets/images/comingSoonBanner.jpg'
import instaIcon from '../../assets/icons/instaIcon.png'
import fbIcon from '../../assets/icons/fbIcon.png'

const ComingSoon = () => {
  return (
    <main className={style.ComingSoon}>
      <h1 className={style.title}>Welcome to Paloma Pies</h1>
      <div className={style.topBanner}>
        <p className={style.message}>
          This page is currently under construction
          <br />
          in preparation for our Valentine's Day Sale! Please check back on
          Monday, February 1st to see our new menu and place an order!
        </p>
      </div>
      <p className={style.bottomBanner}>
        -xoxo <span>❤️</span>
      </p>
      <div className={style.social}>
        <a
          href="https://www.instagram.com/paloma_pies/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instaIcon} alt="instagram icon" />
        </a>
        <a
          href="https://www.facebook.com/PalomaPiesCO/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={fbIcon} alt="facebook icon" />
        </a>
      </div>
    </main>
  );
}

export default ComingSoon