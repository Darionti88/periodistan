
import React from 'react'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Header from './Components/Header'
import LandingPage from '../src/Pages/LandingPage'
import Footer from './Components/Footer'
import AsiaPage from '../src/Pages/AsiaPage.jsx'
import AfricaPage from './Pages/AfricaPage.jsx'
import AmericaPage from '../src/Pages/AmericaPage.jsx'
import EuropaPage from '../src/Pages/EuropaPage.jsx'
import MundoPage from '../src/Pages/MundoPage.jsx'
import BlogPost from '../src/Pages/BlogPost.jsx'
import Layout from '../src/Pages/Layout'


function App() {


  return (
    <Router>
          <Header />
          <Layout>
      <Switch>
      
        <Route path='/asia'><AsiaPage /></Route>
        <Route path='/africa'><AfricaPage /></Route>
        <Route path='/america'><AmericaPage /></Route>
        <Route path='/europa'><EuropaPage /></Route>
        <Route path='/world'><MundoPage /></Route>
        <Route exact path={'/europ/:postId'| 'asian/:postId'}><BlogPost /></Route>
        <Route path='/'><LandingPage /></Route>
      </Switch>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
