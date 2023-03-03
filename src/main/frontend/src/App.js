
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
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
  const [isLogin,setisLogin] = useState(true);                                                             //로그인 여부

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
    <><div className="App">
      <a href="http://localhost:8080/oauth2/authorization/google?re" target="_self">
        <img src="https://developers.google.com/static/identity/images/btn_google_signin_dark_normal_web.png?hl=ko" alt="구글로그인"></img>
      </a>
    </div><BrowserRouter>
        <Header isLogin={isLogin} />
        <Routes>
          <Route path="/" element={<Main DB={data} pagebuttons={pagebuttons} setURL={setURL} setisLogin={setisLogin} />}></Route>
          <Route path="/Login" element={<Login DB={data} pagebuttons={pagebuttons} setURL={setURL} setisLogin={setisLogin} />}></Route>
          <Route path="/posts/*" element={<Product />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter></>
    

  );
}
export default App;
