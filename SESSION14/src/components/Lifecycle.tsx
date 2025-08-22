import React, { Component } from 'react'

type InitialState={
    fullName:string
}
export default class Lifecycle extends Component<{} ,InitialState> {
    constructor(props:{}){
        super(props);
        this.state={
            fullName:"Hồng Vân"
        }
    }
    componentDidMount(): void {
        console.log("component didmount được gọi!");
        // Thường dùng để gọi API lấy dữ liệu để gắn vào DOM
        
    }
    changeName=()=>{
        this.setState({fullName:"Minh Huyền"})
    }
    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<InitialState>, nextContext: any): boolean {
            return true
    }
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<InitialState>, snapshot?: any): void {
            console.log("quay về component didupdate");
            
    }
    componentWillUnmount(): void {
        
    }
  render() {
    console.log("component re-render");
    
    return (
      <div>
        Vòng đời một class component
        {/* 
            Vòng đời 1 class component trải qua 3 giai đoạn
            1. mounting (khởi tạo constructor, state, hiển thị dom ra giao diện)
                + componentDidMount()
            2. updating (khi props hoặc state thay đổi )
            3. unmount  (gỡ bỏ khỏi dom)
            com

        */}
        <p>Họ và tên : {this.state.fullName} </p>
        <button onClick={this.changeName}>click</button>
      </div>
    )
  }
}
