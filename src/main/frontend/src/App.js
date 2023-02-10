import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
function Thead(){
  return <thead>
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>내용</th>
        <th>페이지번호</th>
      </tr>
    </thead>
}
function Tbody(props){
  const list = []
  for(let i = (props.page-1)*10; i < props.D_B.length - (props.page-1)*10; i++){                            //중요
    let t = props.D_B[i]
    list.push(
    <>
    <tr>
      <td>{t.id}</td>
      <td>{t.title}</td>
      <td><a href=''>{t.body}</a></td>
      <td>{t.userId}</td>
    </tr>
    </>
    )
  }
  return <tbody>{list}</tbody>
}

function A(props){                                                                    //페이지숫자 컴포넌트 게시글 개수에 맞춰 페이지 숫자가 생성되고 누를때마다 현페이를 나타내슨 변수를 변경하도록 함
  const index = []
  let pagesu = 0
  if(props.maximum%10 === 0){pagesu = props.maximum/props.zip}
  else{pagesu = props.maximum/props.zip +1}
  for(let i = 1; i <= pagesu; i++){
    index.push(<a href = {i}>{i}</a>)
  }
  return <>{index}</>
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
function App() {
  const D_B = [                                                                              //DB역활 이후 수정 페이지 이동구현 완료후 제거
    {id:1, title:"제대하고싶은 상준이", writer:"상준서", date:20001101, click:5},
    {id:2, title:"비트코인 떡상하는 법", writer:"루나", date:20200917, click:200},
    {id:3, title:"인수인계하는법", writer:"박크승도", date:2023209, click:200}
    // {id:4, title:"ㄱ", writer:"루나ㄱ", date:10200917, click:100},
    // {id:5, title:"ㄴ", writer:"루나ㄴ", date:20200917, click:200},
    // {id:6, title:"ㄷ", writer:"루나ㄷ", date:3200917, click:300},
    // {id:7, title:"ㄹ", writer:"루나ㄹ", date:40200917, click:400},
    // {id:8, title:"ㅁ", writer:"루나ㅁ", date:50200917, click:500},
    // {id:9, title:"ㅂ", writer:"루나ㅂ", date:60200917, click:600},
    // {id:10, title:"ㅅ", writer:"루나ㅅ", date:70200917, click:700},
    // {id:11, title:"ㅇ", writer:"루나ㅇ", date:80200917, click:800}
  ]

  const [maximum,setmaximum] = useState(100)                                                //전체글의 수
  const [page,setpage] = useState(10)                                                      //밑에 a태그를 누르면 같이 적용되도록 구현 (현재 41로 가정!!)
  const [zip,setzip] = useState(10)                                                       //한페이지에 나타낼 글의 개수
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {                                                          //불러오기한 배열 posts에 저장
    const fetchData = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data);
    };
    fetchData();
  }, []);

  const Posts = (post) => {
    return (
      <>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </>
    );
  };
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------

    return (
      <div className="App">
      <header>
        <h1 className = "title">
        Daily Share
        <div align = "right">🤷‍♀️</div>
        </h1 >
      </header>

      <p align = "right">
        <strong><a id="/oauth2/authorization/google">로그인</a></strong>
      </p>

      <table width = "1500px"  height = "100px" margin = "500px">
        <Thead></Thead>
        <Tbody D_B={posts} page = {page}></Tbody>
      </table>
      <A maximum={maximum} zip = {zip}></A>
      <button type = "button" onClick="location.href=''">글작성</button>
    </div>
    );
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
export default App;
