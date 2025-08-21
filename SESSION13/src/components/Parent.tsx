import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  render() {
    return (
      <div>
        Class cha
        <Child fullName="Minh Thu" company="Rikkei"></Child>
      </div>
    )
  }
}
