import React, { lazy, Suspense } from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import PageLoader from 'components/PageLoader'
import GlobalStyle from './style/Global'
import history from './routerHistory'

// Route-based code splitting
const About = lazy(() => import('./views/About'))
const Home = lazy(() => import('./views/Home'))
const NotFound = lazy(() => import('./views/NotFound'))

const App: React.FC = () => {
  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* Redirect */}
          <Route path="/nft">
            <Redirect to="/about" />
          </Route>
          {/* 404 */}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
