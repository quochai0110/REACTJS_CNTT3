import React, { Component } from 'react'
type PropsType={
    fullName:string,
    company:string
}
export default class Child extends Component<PropsType> {
  render() {
    console.log("giá trị nhận về từ class cha",this.props);
    const {fullName,company}= this.props
    // thường dùng destructoring 
    /* 
        {
        fullName:"minh thu"
        }
    */
    return (
      <div>
        Class con
        <p>giá trị fullName: {fullName}</p>
        <p>công ty : {company}</p>
      </div>
    )
  }
}
