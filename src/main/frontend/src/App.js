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
      index.push(<button onClick = { () => {alert()} }>{i}</button>)
    }
    return <>{index}</>
  }

function App() {
  const [maximum,setmaximum] = useState(100)                                              //!!!!함수로 게시판 개수 가져오기
  const [page,setpage] = useState(0)                                                      //밑에 a태그를 누르면 같이 적용되도록 구현 (현재 41로 가정!!)
  const [bundle,setbundle] = useState(10)                                                 //한페이지에 나타낼 글의 개수

  const D_B = [                                                                         //DB역활 이후 수정 페이지 이동구현 완료후 제거
    {id:1, title:"제대하고싶은 상준이", writer:"상준서", date:20001101, click:5},
    {id:2, title:"비트코인 떡상하는 법", writer:"루나", date:20200917, click:200},
    {id:3, title:"인수인계하는법", writer:"박크승도", date:2023209, click:200}
    ]
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
  // 데이터 가져오기
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const URL = "http://localhost:8080/api/v1/posts"
    //http://localhost:8080/api/v1/posts     http://localhost:8080/posts?page=2
    
  useEffect((PageNum) => {
    const fetchData = async () => {
        const response = await axios.get(URL,);
        setData(response.data.content);
    };

    fetchData();
  }, []);
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------
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
