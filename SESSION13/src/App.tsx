import React, { Component } from 'react'
import Parent from './components/Parent'
import State from './components/State'
import Event from './components/Event'
/* 
  1. props : properties : dùng để truyền dữ liệu từ component cha sang con
  2. state : dùng để quản lý trạng thái dữ liệu 
  3. event
*/
export default class App extends Component {
  render() {
    return (
      <div>
        Học class component
        <Parent></Parent>
        <hr />
        <State></State>
        <hr />
        <Event></Event>
      </div>
    )
  }
}
