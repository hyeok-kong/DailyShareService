import React from 'react';
import Tbody from './Tbody';

function Board_Table(props) {
    return (
    <table >
        <thead>
            <tr>
                <th>일련번호</th>
                <th>제목</th>
                <th>내용</th>
                <th>조회수</th>
            </tr>
        </thead>
        <Tbody DB = {props.DB}/>
    </table>
    );
}
// className = "Table" width = "500px"  height = "100px" margin = "500px"
export default Board_Table;