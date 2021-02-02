import { useState, useEffect } from 'react'
import Landing from '../Landing/Landing'
import VDayBanner from '../VDayBanner/VDayBanner'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import style from './App.module.scss'

import palomaStamp from '../../assets/images/palomaStamp.png'

function App() {
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div>
      {loading && (
        <div className={`d-flex flex-direction-column ${style.pieContainer}`}>
          <img
            className={`justify-self-center align-self-center ${style.palomaStamp}`}
            src={palomaStamp}
            alt="paloma pies logo"
          />
        </div>
      )}
      <div className={loading ? style.hidden : ""}>
        <Landing />
        <VDayBanner />
        <Menu />
        <Footer />
      </div>
    </div>
  );
}

export default App
