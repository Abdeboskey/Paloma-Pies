import { useState, useEffect } from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Landing from '../Landing/Landing'
import Footer from '../Footer/Footer'
import ClosedForBusiness from '../ClosedForBusiness/ClosedForBusiness'
import NotFound from '../NotFound/NotFound'
import style from './App.module.scss'

import palomaStamp from '../../assets/images/palomaStamp.png'

function App() {
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
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
      <Router>
        <div className={loading ? style.hidden : style.main}>
          <Switch>
            <Route exact path="/">
              <Landing />
              <ClosedForBusiness />
              <Footer />
            </Route>
            <Route>
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App
