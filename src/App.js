
import React from 'react'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Header from './Components/Header'
import LandingPage from '../src/Pages/LandingPage/Index'
import Footer from './Components/Footer'
import AfricaPage from '../src/Pages/AfricaPage/Index'
import AmericaPage from '../src/Pages/AmericaPage/Index'
import ContinentPostsPage from './Pages/ContinentPostsPage/Index'
import BlogPostLocal from './Pages/BlogPostLocalPage/Index'
import AxiosBlogPost from './Pages/BlogPostAxiosPage/Index'
import Layout from '../src/Pages/Layout'


function App() {
  return (
    <Router>
          <Header />
          
      <Switch>
        <Route exact path='/'><LandingPage /></Route>
        <Layout>
        <Route path='/europa'><ContinentPostsPage /></Route>
        <Route path='/asia' ><ContinentPostsPage /></Route>
        <Route path='/africa'><AfricaPage /></Route>
        <Route path='/america'><AmericaPage /></Route>
        <Route path='/world'><ContinentPostsPage /></Route>
        <Route path={['/afrika/:postId']}><AxiosBlogPost /></Route>
        <Route path={['/amerika/:postId']}><AxiosBlogPost /></Route>
        <Route path={['/europ/:postId']}><BlogPostLocal /></Route>
        <Route path={['/asi/:postId']}><BlogPostLocal /></Route>
        </Layout>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
