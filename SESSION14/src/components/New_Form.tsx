import React, { Component } from "react";
type User = {
  email: string;
  password: string;
};
type InitialState = {
  user: User;
};
export default class New_Form extends Component<{}, InitialState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
      },
    };
  }
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("thong tin user", this.state.user);
    
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value}= e.target;
        this.setState({
          user:{
            ...this.state.user,
            email:value,
            password:value,
            // [name]:value

          }
        })
    
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <h1> Form đăng nhập 2 </h1>
          <label htmlFor="">Email</label>
          <input type="text" onChange={this.handleChange} 
          name="email" /> <br />
          <label htmlFor="">Password</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="password"
          />{" "}
          <br />
          <button>login</button>
        </form>
      </div>
    );
  }
}
// const a= [1,2,3,4,5];
// const b=[...a,6];
// const obj1= {
//   name:"hoa",
//   address:"hn",
//   name:"minh thu"
// }
// const obj2= {...obj1,id:1}

