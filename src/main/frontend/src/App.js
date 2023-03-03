import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './components/Paging/Header';
import Main from './components/Paging/Main'                                                               //라우터 준비
import Login from './components/Paging/Login'
import Product from './components/Paging/Product'
import NotFound from './components/Paging/NotFound'
import jwt_decode from 'jwt-decode';
//----------------------------------------------------------------------------------------------------------------------------------------------
function App() {
//----------------------------------------------------------------------------------------------------------------------------------------------
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
//----------------------------------------------------------------------------------------------------------------------------------------------
  //페이징
  const [maximum,setmaximum] = useState(100)                                                                //게시글 총 개수
  const [bundle,setbundle] = useState(10)                                                                   //한페이지에 나타낼 글의 개수
  const [page,setpage] = useState(maximum%bundle === 0 ? maximum/bundle : parseInt(maximum/bundle)+1)       //나타낼 페이지 수
  const pagebuttons = [];                     for(let i = 1 ; i <= page ; i++)  {pagebuttons.push(i)}       //페이지 버튼에 쓸 배열
//----------------------------------------------------------------------------------------------------------------------------------------------
  //구글 로그인
  const [ user, setUser] = useState({})

  function CallbackResponse(response){
    console.log("Encoded JWT ID token: " + response.credential)
    const usercode = jwt_decode(response.credential)
    console.log(usercode)
    setUser(usercode)
    document.getElementById("signInDiv").hidden = true
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "1044621345581-at246cfr7u9tij5eel2s061b0c7d7pkt.apps.googleusercontent.com",
      callback: CallbackResponse
      });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    )
  },[]);
//----------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <>
    <div className="App">
      <div id="signInDiv"></div>
      { user &&
        <div>
            <img src={user.picture}></img>
            <h2>{user.name}</h2>
        </div>
      }
    </div>
    <BrowserRouter>
        <Header isLogin={isLogin} />
        <Routes>
          <Route path="/" element={<Main DB={data} pagebuttons={pagebuttons} setURL={setURL} setisLogin={setisLogin} />}></Route>
          <Route path="/Login" element={<Login DB={data} pagebuttons={pagebuttons} setURL={setURL} setisLogin={setisLogin} />}></Route>
          <Route path="/posts/*" element={<Product />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
//----------------------------------------------------------------------------------------------------------------------------------------------
export default App;
