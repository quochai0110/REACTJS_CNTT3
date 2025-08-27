import React, { Component } from 'react'
type State={
    color:string
    tempColor:string
}
export default class Baitap2 extends Component<object,State> {
    constructor(props:object){
        super(props)
        this.state={
            color:"",
            tempColor:""
        }
    }
    handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({tempColor:e.target.value})
    }
    handleClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        this.setState({color:this.state.tempColor})
    }
  render() {
    return (
      <div>
        <h1>Bài tập 2</h1>
        <form action="">
            <h1>Color:{this.state.color}</h1>
            <label htmlFor="">Màu sắc</label> <br />
            <input type="color" onChange={this.handleChange} /> <br />
            <button onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    )
  }
}
