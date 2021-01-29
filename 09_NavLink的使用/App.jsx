import React, { Component } from 'react'
import { NavLink ,Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './component/Header'

export default class App extends Component {
  
 
  render() {
    return (
      <div>
    <Header a={1}/>
    <div className="row">
      <div className="col-xs-2 col-xs-offset-2">
        <div className="list-group">
          {/* 原生html中，靠<a>跳转不同的页面
          <a className="list-group-item" href="./about.html">About</a>
          <a className="list-group-item active" href="./home.html">Home</a> */}
          {/* 在React中靠路由链接实现切换组件---编写路由链接 */}
          <NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink>
          <NavLink activeClassName="atguigu" className="list-group-item" to="/home">Home</NavLink>

        </div>
      </div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            {/* 注册路由 */}
            <Route path="/about" component={About}/>
            <Route path="/home" component={Home}/>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
  }
}
