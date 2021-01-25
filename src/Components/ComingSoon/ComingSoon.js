import React from 'react'
import comingSoonBanner from '../../assets/images/comingSoonBanner.jpg'
import IMG_7839 from '../../assets/images/IMG_7839.jpg'

const ComingSoon = () => {
  return (
    <main>
      <h1>Welcome to Paloma Pies!<span>🕊</span></h1>
      <p>This page is currently under construction in preparation for our Valentine's Day Sale! Please check back on Monday, February 1st to see our new menu and place an order!</p>
      <img src={IMG_7839} alt="creme pie with sliced fruit and sunlight" style={{ width: '100%' }}/>
    </main>
  )
}

export default ComingSoon