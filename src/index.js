import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import defaultTheme from './default-theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'


const theme = defaultTheme

ReactDOM.render(
    <Provider store={ store }>
      <BrowserRouter>
        <PersistGate persistor={ persistor }>
          <ThemeProvider theme={ theme }>
            <App/>
          </ThemeProvider>
        </PersistGate>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

