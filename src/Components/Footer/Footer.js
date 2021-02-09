import React from 'react'
import style from './Footer.module.scss'

import borderLeft from '../../assets/images/borderLeft.png'
import borderRight from '../../assets/images/borderRight.png'
import palomaStamp from '../../assets/images/palomaStamp.png'
import instaIcon from '../../assets/icons/instaIcon.png'
import fbIcon from '../../assets/icons/fbIcon.png'
import crystalBall from '../../assets/icons/crystalBall.png'



const Footer = () => {
  return (
    <div className={style.Footer}>
      
      <p className={`${style.disclaimer} text-center mt-5`}>
        <br />
        🕊
        <br />
        <br />
        <br />
        These products are produced in a home kitchen that is not subject to
        state licensure or inspection. These products are not intended for
        resale.
      </p>
      <div className={`row mt-5 ${style.headings}`}>
        <img
          className={`col-2 ${style.border}`}
          src={borderLeft}
          alt="zig zag border"
        />
        <div className="d-flex flex-column col-8 justify-content-center align-items-center">
          <img
            className={style.palomaStamp}
            src={palomaStamp}
            alt="paloma pies logo"
          />
          <div className={`d-flex mt-3 ${style.icons}`}>
            <a
              href="https://www.instagram.com/paloma_pies/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instaIcon} alt="instagram camera icon" />
            </a>
            <a
              href="https://www.facebook.com/PalomaPiesCO/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={fbIcon} alt="facebook f icon" />
            </a>
            <a
              href="https://www.witchesandscience.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={crystalBall} alt="crystal ball" />
            </a>
          </div>
          <p>© 2021 Chenoa Rangel</p>
          <p>
            Contact:{" "}
            <a href="mailto: info@palomapies.com">info@palomapies.com</a>
          </p>
          <p>
            All photos by{" "}
            <a
              href="https://www.instagram.com/aciano_studios/"
              target="_blank"
              rel="noreferrer"
            >
              @aciano_studios
            </a>
          </p>
          <p>
            Website by{" "}
            <a
              href="https://github.com/Abdeboskey"
              target="_blank"
              rel="noreferrer"
            >
              Aaron Burris-DeBoskey
            </a>
          </p>
        </div>
        <img
          className={`col-2 ${style.border}`}
          src={borderRight}
          alt="zig zag border"
        />
      </div>
    </div>
  );
}

export default Footer