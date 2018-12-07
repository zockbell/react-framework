import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from "./style";
import { IconGlobalStyle } from "./statics/iconfont/iconfont";
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store/index';
import Header from './common/header';
import Home from './views/home';
import Detail from './views/detail/loadable.js';
import Login from './views/login';
import Write from './views/write';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <IconGlobalStyle />
        <Provider store={store}>
          <Fragment>
            {/* 路由区域 */}
            <BrowserRouter>
              <Fragment>
                <Header />
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail/:id?' component={Detail}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/write' exact component={Write}></Route>
              </Fragment>
            </BrowserRouter>            
          </Fragment>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
