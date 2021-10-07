import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ProyectsPage } from '../pages/proyectsPage/ProyectsPage'
import { PortfolioApp } from '../PortfolioApp'
export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        exact
                        path="/all-proyects"
                        component={ProyectsPage}
                    />
                    <Route path="/" component={PortfolioApp} />
                </Switch>
            </div>
        </Router>
    )
}
