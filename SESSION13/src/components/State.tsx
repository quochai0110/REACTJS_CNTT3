import React, { Component } from "react";
type Task={
    id:number,
    name:string,
    completed:boolean
}
type InitialState={
    taskName:string,
    todos:Task[],
    fullName:string,
    isActive:boolean
}
export default class State extends Component<{},InitialState> {
  constructor(props:{}) {
    super(props);
    this.state={
        taskName:"",
        todos:[
            {
                id:1,
                name:"học reactjs",
                completed:false
            },
            {
                id:2,
                name:"học reactjs với state",
                completed:false
            }
        ],
        fullName:"Vũ Hồng Vân",
        isActive:true
    }
  }
  render() {
    return <div>
        Học về state
        <p>Tên Sinh Viên: {this.state.fullName}</p>
        <p>{this.state.isActive? "hoạt động":"không hoạt động"}</p>
    </div>;
  }
}
