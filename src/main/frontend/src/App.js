/* eslint-disable */

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Paging_Header from './components/Paging/Elements/Paging_Header'
import Board_Table from './components/Board_Table/Board_Table'
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
function Paging_A(props){                                                                    //페이지숫자 컴포넌트 게시글 개수에 맞춰 페이지 숫자가 생성되고 누를때마다 현페이를 나타내슨 변수를 변경하도록 함
  const index = []
  let pagesu = 0
  if(props.maximum%10 === 0){pagesu = props.maximum/props.bundle}
  else{pagesu = props.maximum/props.bundle +1}
  for(let i = 1; i <= pagesu; i++){
    index.push(<button onClick = { (i) => {setURL(`http://localhost:8080/api/v1/posts?page=${i-1}`)} }>{i}</button>)
  }
  return <>{index}</>
}

function App() {
  // 데이터 가져오기
  const [data, setData] = useState([]);
  const [URL, setURL] = useState("http://localhost:8080/api/v1/posts")                                     //http://localhost:8080/posts?page=2  
  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(URL,);
        setData(response.data.content);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(URL,);
        setData(response.data.content);
    };
    fetchData();
  }, [URL]);
  
  //페이징 구현
  const [maximum,setmaximum] = useState(100)                                              //!!!!함수로 게시판 개수 가져오기
  const [page,setpage] = useState(0)                                                      //밑에 a태그를 누르면 같이 적용되도록 구현 (현재 41로 가정!!)
  const [bundle,setbundle] = useState(10)                                                 //한페이지에 나타낼 글의 개수
    return (
      <div className="App">
        <Paging_Header />
        <Board_Table DB = {data}/>
        <Paging_A maximum = {maximum} bundle = {bundle}/>
      </div>
    );
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
export default App;
