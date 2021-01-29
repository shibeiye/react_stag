
 

import axios from 'axios'
import PubSub from 'pubsub-js'
import React, { Component } from 'react'

export default class Search extends Component {

    search = ()=>{
      // 获取用户的输入
      const {keyWordElememt:{value:keyWord}} = this
      //  发送请求前通知List更新状态
      PubSub.publish('atguigu',{isFirst:false,isLoading:true})
      // 发起网络请求
      axios.get(`/api1/search/users?q=${keyWord}`).then(
        response =>{
          //请求成功后通知List更新状态
          PubSub.publish('atguigu',{isLoading:false,users:response.data.items})
        },
        error=>{
          // 请求失败后通过List更新状态
          PubSub.publish('atguigu',{isLoading:false,err:error.message})
          
        }
      )
    }
    render() {
        return (
            <section className="jumbotron">
            <h3 className="jumbotron-heading">搜索 Github 用户</h3>
            <div>
              <input ref={c=>this.keyWordElememt = c} type="text" placeholder="输入关键字搜索"/>&nbsp;
              <button onClick={this.search}>搜索</button>
            </div>
          </section>
        )
    }
}
