import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    getStudentData=()=>{
        axios.get('http://localhost:3000/api1/students').then(
            response =>{console.log('学生成功了',response.data)},
            error =>{console.log('学生失败了',error)}
        )
    }
    getCarData=()=>{
        axios.get('http://localhost:3000/api2/cars').then(
            response =>{console.log('汽车成功了',response.data)},
            error =>{console.log('汽车失败了',error)}
        )
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点学生获取数据</button>
                <button onClick={this.getCarData}>点汽车获取数据</button>
            </div>
        )
    }
}
