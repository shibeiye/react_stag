
 

import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <section className="jumbotron">
            <h3 className="jumbotron-heading">搜索 Github 用户</h3>
            <div>
              <input type="text" placeholder="输入关键字搜索"/>&nbsp;<button>搜索</button>
            </div>
          </section>
        )
    }
}
