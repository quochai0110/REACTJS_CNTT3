import React, { Component } from 'react'
import Lifecycle from './components/Lifecycle'
import Form from './components/Form'
import New_Form from './components/New_Form'

export default class App extends Component {
  render() {
    return (
      <div>
        SESSION14 _ LIFECYCLE & FORM
        <Lifecycle></Lifecycle> <hr />
        <Form></Form>
        <hr />
        <New_Form></New_Form>
      </div>
    )
  }
}
