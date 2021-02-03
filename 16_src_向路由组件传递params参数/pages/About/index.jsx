import React, { Component } from 'react'

export default class About extends Component {
   
    render() {
        console.log(this.props,'about组件')
        return (
            <h3>我是About的内容</h3>
        )
    }
}
