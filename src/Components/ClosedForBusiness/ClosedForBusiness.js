import React from 'react'
import style from './ClosedForBusiness.module.scss'

const ClosedForBusiness = () => {
  return (
    <div className={`container ${style.ClosedForBusiness}`}>
      <div className="row d-flex justify-content-around m-5">
        <h2 className={`col-md-6 row-sm p-3 ${style.ohHi}`}>Oh, Hi!</h2>
        <p className={` col-md-4 p-3 align-self-center ${style.p}`}>
          Paloma Pies is all about handmade pies and treats. Everything is made
          from scratch in Denver, CO.
        </p>
      </div>
      <p className={`col-md-6 mx-auto m-5 ${style.p}`}>
        ⪦ The pie shop is currently closed ⪧<br />
        Our next sale will be for Mother's Day 2021, 
        and please <a href="mailto: info@palomapies.com">reach out</a> if you have any
        questions or need a special order in the meanwhile ☺️
      </p>
    </div>
  );
}

export default ClosedForBusiness