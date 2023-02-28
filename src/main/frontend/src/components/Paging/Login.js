import React from 'react';
import { Link } from 'react-router-dom';
import Tbody from '../Board_Table/Tbody';

function Login(props) {
    
    return (
        <>
        <Link to ='/Login'><button onClick={ () => {props.setisLogin(true); alert("로그인 성공!");}}>로그인</button></Link>
        <Tbody DB = {props.DB}/>
        {props.pagebuttons.map(function(p){
        return <button key={p} onClick = {() => {props.setURL(`http://localhost:8080/api/v1/posts?page=${p-1}`)}}>{p}</button>
        })}
        </>  
    );
}

export default Login;