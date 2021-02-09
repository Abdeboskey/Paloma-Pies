import React from 'react'
import style from './ClosedForBusiness.module.scss'

const ClosedForBusiness = () => {
  return (
    <div className={`container ${style.ClosedForBusiness}`}>
      <div className="row d-flex justify-content-around m-5">
        <h2 className={`col-md-6 row-sm p-3 ml-5 ${style.ohHi}`}>Oh, Hi!</h2>
        <p className={` col-md-4 p-3 mr-5 align-self-center ${style.p}`}>
          Paloma Pies is all about handmade pies and treats. Everything is made
          from scratch in Denver, CO!
        </p>
      </div>
      <p className={`col-md-6 mx-auto m-5 ${style.p}`}>
        Ordering for the Valentine's day sale has closed - please check back for
        our next sale (Mother's Day 2021) and reach out if you have any
        questions!
      </p>
    </div>
  );
}

export default ClosedForBusiness