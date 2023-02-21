import React from 'react';
import Tbody from '../Board_Table/Tbody';

function Paging_Header(props) {
    
    return (
        <>
        <header>
          <h1 className = "title">
            Daily Share
            <div align = "right">🤷‍♀️</div>
          </h1 >
        </header>
        </>    
    );
}

function Main(props) {
    
    return (
        <>
        <Paging_Header />
        <Tbody DB = {props.DB}/>
        </>   
    )
       
}

export default Main;
