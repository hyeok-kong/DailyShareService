import React from 'react';
import { Link } from 'react-router-dom';
import Board_Table from '../Board_Table/Board_Table';

function Main(props) {
    
    return (
        <>
        {/* <Link to ='/Login'><button onClick={ () => {props.setisLogin(false); alert("로그아웃 되었습니다.!")}}>로그아웃</button></Link> */}
        <Board_Table DB = {props.DB}/>
        {props.pagebuttons.map(function(p){
        return <button key={p} onClick = {() => {props.setURL(`http://localhost:8080/api/v1/posts?page=${p-1}`)}}>{p}</button>
        })}
        </>   
    )
       
}

export default Main;
