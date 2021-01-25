import React from 'react'
const comingSoonBanner = require('../../assets/images/comingSoonBanner.jpg')

const ComingSoon = () => {
  return (
    <main>
      <h1>Welcome to Paloma Pies!<span>🕊</span></h1>
      <p>This page is currently under construction in preparation for our Valentie's Day Sale! Please check back on Monday, February 1st to see our new menu and place an order!</p>
      <img src={comingSoonBanner} alt="creme pie with sliced fruit and sunlight" />
    </main>
  )
}

export default ComingSoon