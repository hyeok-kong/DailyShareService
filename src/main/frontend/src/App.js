
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './components/Paging/Header';
import Main from './components/Paging/Main'                                                               //라우터 준비
import Login from './components/Paging/Login'
import Product from './components/Paging/Product'
import NotFound from './components/Paging/NotFound'


function App() {
  // 데이터 가져오기
  const [URL, setURL] = useState("http://localhost:8080/api/v1/posts")                                     //http://localhost:8080/posts?page=2  
  const [data, setData] = useState([]);
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
  
  //페이징
  const [maximum,setmaximum] = useState(100)                                                                //게시글 총 개수
  const [bundle,setbundle] = useState(10)                                                                   //한페이지에 나타낼 글의 개수
  const [page,setpage] = useState(maximum%bundle === 0 ? maximum/bundle : parseInt(maximum/bundle)+1)       //나타낼 페이지 수
  const pagebuttons = [];                     for(let i = 1 ; i <= page ; i++)  {pagebuttons.push(i)}       //페이지 버튼에 쓸 배열
  
  return (
    <div className="App">
      <a href="http://localhost:8080/oauth2/authorization/google?redirect_uri" target="_blank">
        <img src="https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_medium_narrow.png" alt="카카오톡로그인"></ img>
      </a>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main DB = {data} pagebuttons = {pagebuttons} setURL = {setURL}/>}></Route>
          <Route path="/Login/*" element={<Login />}></Route>
          <Route path="/posts/*" element={<Product/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}
export default App;
