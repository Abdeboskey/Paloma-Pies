import React from 'react'
import style from './Landing.module.scss'
import pieSill from '../../assets/images/pieSill.jpg'
import borderLeft from '../../assets/images/borderLeft.png'
import borderRight from '../../assets/images/borderRight.png'

const Landing = () => {

  return (
    <section className={style.Landing}>
      <img
        className={`img-fluid ${style.landingSlices}`}
        src={pieSill}
        alt="a pie on a sunlit windowsill with plants and a bicycle"
      />
      <div className={`row ${style.headings}`}>
        <img
          className={`col-2 ${style.border}`}
          src={borderLeft}
          alt="zig zag border"
        />
        <div className="d-flex flex-column col-8 justify-content-center">
          <h1>Paloma Pies</h1>
          <h2 className="text-muted">Pies made with ❤️ in Denver, CO</h2>
        </div>
        <img
          className={`col-2 ${style.border}`}
          src={borderRight}
          alt="zig zag border"
        />
      </div>
    </section>
  );
}

export default Landing