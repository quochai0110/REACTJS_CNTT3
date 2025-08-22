import React, { Component } from "react";
type InitialState = {
    email:string,
    password:string
};
export default class Form extends Component<{},InitialState> {
  constructor(props: {}) {
    super(props);
    this.state = {
        email:"",
        password:""
    };
  }
  handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
     e.preventDefault();
     console.log(` thông tin người dùng nhập: EMAIL : ${this.state.email}_ PASS: ${this.state.password} `);
     
  }
  handleChangeEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
        // console.log("giá trị người dùng nhập: ", e.target.value);
        this.setState({email:e.target.value});
  }
  handleChangePassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
         this.setState({password:e.target.value});
  }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <h1> Form đăng nhập 1 </h1>
          <label htmlFor="">Email</label>
          <input 
            type="text"
            onChange={this.handleChangeEmail}
             /> <br />
          <label htmlFor="">Password</label>
          <input 
             type="text"
             onChange={this.handleChangePassword}
           /> <br />
          <button>login</button>
        </form>
      </div>
    );
  }
}
