
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Paging_Header from './components/Paging/Paging_Header'
import Board_Table from './components/Board_Table/Board_Table'
// import Main from './components/Paging/Main'                                                            //라우터 준비


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
      <Paging_Header />
      <Board_Table DB = {data}/>
      {/* <Main DB = {data}/> */}

      {pagebuttons.map(function(p){
        return <button key={p} onClick = {() => {setURL(`http://localhost:8080/api/v1/posts?page=${p-1}`)}}>{p}</button>
      })
    }
    </div>

  );
}


export default App;
