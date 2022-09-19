import React from 'react'
import ReactDOM from 'react-dom'
import { PortfolioApp } from './PortfolioApp'
import './index.css'
import { AppRouter } from './router/AppRouter'
ReactDOM.render(
  <AppRouter>
    <PortfolioApp />
  </AppRouter>,
  document.getElementById('root')
)
