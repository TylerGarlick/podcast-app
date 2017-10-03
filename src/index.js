import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import registerServiceWorker from './registerServiceWorker'

import theme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Router from './router'

const Wrapped = (
  <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
    <section name="container">
      <header>
        Something
      </header>
      <main>
        <Router />
      </main>
      <footer>
        Something
      </footer>
    </section>
  </MuiThemeProvider>
)

ReactDOM.render(Wrapped, document.getElementById('root'))
registerServiceWorker()
