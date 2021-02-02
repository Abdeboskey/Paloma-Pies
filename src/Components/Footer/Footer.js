import React from 'react'
import style from './Footer.module.scss'

import zigZagBanner from '../../assets/images/zigZagBanner.png'
import borderLeft from '../../assets/images/borderLeft.png'
import borderRight from '../../assets/images/borderRight.png'
import palomaStamp from '../../assets/images/palomaStamp.png'
import instaIcon from '../../assets/icons/instaIcon.png'
import fbIcon from '../../assets/icons/fbIcon.png'
import crystalBall from '../../assets/icons/crystalBall.png'

const orderForm = 'https://docs.google.com/forms/d/e/1FAIpQLSeArz3bQT3gvbQ_PCHv4p3nr5-g6cZnQTAxkWlhl7BttINSLA/viewform'


const Footer = () => {
  return (
    <div className={style.Footer}>
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
      <p className={`${style.disclaimer} text-center mt-5`}>
        Ordering is open from now until midnight MST on Sunday, 2/7/21.
        <br />
        🕊
        <br />
        These products were produced in a home kitchen that is not subject to
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
          <p className="mt-3">
            Contact:{" "}
            <a href="mailto: info@palomapies.com">info@palomapies.com</a>
          </p>
          <div className={`d-flex ${style.icons}`}>
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