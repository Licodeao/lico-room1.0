import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import { ThemeProvider } from 'styled-components'

import App from '@/App';
import "normalize.css"
import "antd/dist/reset.css"
import "./assets/css/index.less"
import store from "./store/index"
import theme from './assets/theme/index'
import Loading from './components/loading';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Suspense fallback={<Loading/>}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  </Provider>
);
