import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Content from './components/Content'



export default function App() {
  return (
    <div>
      <h1>Học component</h1>
      <Header></Header>
      <Banner></Banner>
      <Content></Content>
      <div className="footer">
        Phần chân trang
      </div>
    </div>
  )
}
