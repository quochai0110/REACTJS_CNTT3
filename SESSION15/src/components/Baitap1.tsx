import { Component } from 'react'
type State = {
    user: {email:string}
}
export default class Baitap1 extends Component<{}, State>{
    constructor(props:{}){
        super(props);
        this.state = {
            user: {email:""}
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({user:{email:e.target.value}})
    }
    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Gia tri nguoi dung nhap la: ", this.state.user);  
    }
  render() {
    return (
      <div>
        <h1>Bài tập 1</h1>
        <h1>FORM</h1>
        <form onSubmit={(this.handleSubmit)}>
            <input type="email" onChange={(this.handleChange)}/>
            <button type = "submit">Submit</button>
        </form>
       
      </div>
    )
  }
}
