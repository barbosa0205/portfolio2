import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Page404 } from '../pages/Page404'
import { ProyectPage } from '../pages/proyectsPage/ProyectPage'
import { ProyectsPage } from '../pages/proyectsPage/ProyectsPage'
import { ServerErrorPage } from '../pages/ServerErrorPage'
import { TechnologyPage } from '../pages/technologyPage/TechnologyPage'
import { PortfolioApp } from '../PortfolioApp'
export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/all-proyects' component={ProyectsPage} />
          <Route exact path='/proyect/:id' component={ProyectPage} />
          <Route exact path='/technology/:id' component={TechnologyPage} />
          <Route path='/server-error' component={ServerErrorPage} />
          <Route path='/' component={PortfolioApp} />
          <Route path='*' component={Page404} />
        </Switch>
      </div>
    </Router>
  )
}
