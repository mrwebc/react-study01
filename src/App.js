import React from 'react'//JSX 사용하려면 필요
import './App.css'

const name = "React"
const tit = '리액트를 이용한 페이지'

function App(){

  return (

    <div>
      <h1 style={{color : 'green'}} tit={tit}>안녕, {name}~!</h1>

      <p>리액트 컴포넌트</p>

    </div>



  )

}

export default App

