import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Paging_A from './components/Paging/Elements/Paging_A'
import Paging_Header from './components/Paging/Elements/Paging_Header'
import Board_Table from './components/Board_Table/Board_Table'
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
function App() {
  const [maximum,setmaximum] = useState(100)                                              //!!!!함수로 게시판 개수 가져오기
  const [page,setpage] = useState(0)                                                      //밑에 a태그를 누르면 같이 적용되도록 구현 (현재 41로 가정!!)
  const [bundle,setbundle] = useState(20)                                                 //한페이지에 나타낼 글의 개수

  const D_B = [                                                                         //DB역활 이후 수정 페이지 이동구현 완료후 제거
    {id:1, title:"제대하고싶은 상준이", writer:"상준서", date:20001101, click:5},
    {id:2, title:"비트코인 떡상하는 법", writer:"루나", date:20200917, click:200},
    {id:3, title:"인수인계하는법", writer:"박크승도", date:2023209, click:200}
    ]
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
  // 데이터 가져오기
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)
  const URL = "/posts?page=2"
    //http://localhost:8080/api/v1/posts     http://localhost:8080/posts?page=2
    
  useEffect(() => {                                                             
    const fetchData = async () => {
      setLoading(true)
      try{
        const response = await axios.get(URL,);
        console.log(response)
      }
      catch (e){
        console.log(e)
      }
      setLoading(false)
      // setData(response.data);
    };

    fetchData();
  }, []);
  // console.log(data)
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------
    return (
      <div className="App">
        <Paging_Header />
        {/* <Board_Table DB = {D_B}/>
        <Paging_A maximum={maximum} bundle = {bundle}/> */}
      </div>
    );
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
export default App;
