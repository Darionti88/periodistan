
import React from 'react'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Header from './Components/Header'
import LandingPage from '../src/Pages/LandingPage/Index'
import Footer from './Components/Footer'
import AsiaPage from '../src/Pages/AsiaPage/Index'
import AfricaPage from '../src/Pages/AfricaPage/Index'
import AmericaPage from '../src/Pages/AmericaPage/Index'
import EuropaPage from '../src/Pages/EuropaPage/Index'
import MundoPage from '../src/Pages/WorldPage/Index'
import BlogPost from '../src/Pages/BlogPostPage/Index'
import Layout from '../src/Pages/Layout'


function App() {
  return (
    <Router>
          <Header />
          <Layout>
      <Switch>
      
        <Route exact path='/'><LandingPage /></Route>
        <Route path='/asia'><AsiaPage /></Route>
        <Route path='/africa'><AfricaPage /></Route>
        <Route path='/america'><AmericaPage /></Route>
        <Route path='/europa'><EuropaPage /></Route>
        <Route path='/world'><MundoPage /></Route>
        <Route path={'/europ/:postId'| '/asian/:postId' | '/afrika/:postId'| '/amerika/:postId'}><BlogPost /></Route>
        
      </Switch>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
