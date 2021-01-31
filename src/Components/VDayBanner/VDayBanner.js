import React from 'react'
import style from './VDayBanner.module.scss'
import bloodOrangeBanner from '../../assets/images/bloodOrangeBanner.jpg'

const VDayBanner = () => {
  return (
    <section className={style.VDayBanner}>
      <h2 className={style.neon}>Happy Valentine's Day</h2>
      <img
        className={`img-fluid ${style.bannerImg}`}
        src={bloodOrangeBanner}
        alt="blood orange creme pie with orange slices and flowers"
      />
      <div className={style.text}>
        <p>
          Paloma Pies is all about handcrafted pies and treats – Everything is
          made from scratch here in Denver, CO.
        </p>
        <p>
          Shop our Valentine's Day sale below and treat yourself (or your loved
          ones!) to a homemade pie and some of our pie peripherals!
        </p>
      </div>
    </section>
  );
}

export default VDayBanner