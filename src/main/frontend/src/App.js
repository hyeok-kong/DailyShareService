import React, { useState } from 'react';
import './App.css';

function Tbody(){
  return <tbody>
      <tr>
        <td>_</td>
        <td>_</td>
        <td>_</td>
        <td>_</td>
        <td>_</td>
      </tr>
    </tbody>
}

function Thead(){
  return <thead>
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>작성자</th>
        <th>작성일</th>
        <th>조회수</th>
      </tr>
    </thead>
}

function App() {
  let [maxpage,setmaxpage] = useState(10);

  return (
    <div className="App">
<<<<<<< Updated upstream
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jss</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
      <h1 className = "title">
      Daily Share<div align = "right">🤷‍♀️</div>
      
      </h1 >
      <p align = "right">
        <strong><a id="/oauth2/authorization/google">로그인</a></strong>   
      </p>
  
      <table width = "1500px"  height = "500px" margin = "500px">
        <Thead></Thead>
        <Tbody></Tbody>
        <Tbody></Tbody>
        <Tbody></Tbody>
        <Tbody></Tbody>
        <Tbody></Tbody>
        <Tbody></Tbody>
        <Tbody></Tbody>
        <Tbody></Tbody>
        <Tbody></Tbody>
        <Tbody></Tbody>
      </table>
      <a href=''> 1 </a>
      <a href=''> 2 </a>
      <a href=''> 3 </a>
      <a href=''> 4 </a>
      <a href=''> 5 </a>
      <button type = "button" onClick="location.href=''">글작성</button>      
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
