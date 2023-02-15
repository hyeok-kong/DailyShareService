import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Paging_A from './components/Paging_A';
import Paging_Header from './components/Paging_Header';
import Thead from './components/Board_Table/Thead';
import Tbody from './components/Board_Table/Tbody';

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
function App() {
  const [maximum,setmaximum] = useState(100)                                                //!!!!함수로 게시판 개수 가져오기
  const [page,setpage] = useState(0)                                                      //밑에 a태그를 누르면 같이 적용되도록 구현 (현재 41로 가정!!)
  const [zip,setzip] = useState(20)                                                       //한페이지에 나타낼 글의 개수

  const D_B = [                                                                              //DB역활 이후 수정 페이지 이동구현 완료후 제거
    {id:1, title:"제대하고싶은 상준이", writer:"상준서", date:20001101, click:5},
    {id:2, title:"비트코인 떡상하는 법", writer:"루나", date:20200917, click:200},
    {id:3, title:"인수인계하는법", writer:"박크승도", date:2023209, click:200},
    {id:4, title:"ㄱ", writer:"루나ㄱ", date:10200917, click:100},
    {id:5, title:"ㄴ", writer:"루나ㄴ", date:20200917, click:200},
    {id:6, title:"ㄷ", writer:"루나ㄷ", date:3200917, click:300},
    {id:7, title:"ㄹ", writer:"루나ㄹ", date:40200917, click:400},
    {id:8, title:"ㅁ", writer:"루나ㅁ", date:50200917, click:500},
    {id:9, title:"ㅂ", writer:"루나ㅂ", date:60200917, click:600},
    {id:10, title:"ㅅ", writer:"루나ㅅ", date:70200917, click:700},
    {id:11, title:"ㅇ", writer:"루나ㅇ", date:80200917, click:800}
  ]
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
  // const [posts, setPosts] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(10);

  // useEffect(() => {                                                          //불러오기한 배열 posts에 저장
  //   const fetchData = async () => {
  //     const response = await axios.get("http://localhost:8080/posts?page=2");
  //     setPosts(response.data);
  //   };
  //   fetchData();
  // }, []);

  // const Posts = (posts) => {
  //   return (
  //     <>
  //       <ul>
  //         {posts.map((posts) => (
  //           <li key={posts.id}>{posts.title}</li>
  //         ))}
  //       </ul>
  //     </>
  //   );
  // };
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------

    return (
      <div className="App">
        <Paging_Header />
        <table width = "1500px"  height = "100px" margin = "500px">
          <Thead />
          <Tbody D_B={D_B}></Tbody>
        </table>
        <Paging_A maximum={maximum} zip = {zip}/>
      </div>
    );
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
export default App;
