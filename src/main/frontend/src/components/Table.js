import React, { Component } from 'react';

function Tbody(){
  return <tbody>
      <tr>
        <td>_</td>
        <td>_</td>
        <td>_</td>
        <td>_</td>
        <td>_</td>
      </tr>
    </tbody>
}

function Thead(){
  return <thead>
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>작성자</th>
        <th>작성일</th>
        <th>조회수</th>
      </tr>
    </thead>
}

class Table extends Component {
  render() {
    return (
      <Thead></Thead>
    );
  }
}