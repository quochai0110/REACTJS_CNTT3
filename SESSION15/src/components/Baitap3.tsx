import React, { Component } from "react";
type State = {
  date: string;
  check:boolean
};
export default class Baitap3 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      date: "",
      check:false
    };
  }
  handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
    this.setState({check:true})
  }
  handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    this.setState({date:e.target.value})
    this.setState({check:false})
  }
  render() {
    return (
      <div>
        <h1>Bài tập 3</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <h2>ngày sinh :{this.state.check?this.state.date:""}</h2>
          <input type="date" onChange={this.handleChange} />
          <button>submit</button>
        </form>
      </div>
    );
  }
}
