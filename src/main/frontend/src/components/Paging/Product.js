import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


function Product(props) {
    const [detail, setDetail] = useState([]);
    const location = useLocation();
    useEffect(() => {
        const fetchDetail = async () => {
            const response = await axios.get(`http://localhost:8080/api/v1${location.pathname}`,);
            setDetail(response.data);
        };
        fetchDetail();
      },);



    return (
        <>
        <h1>유저아이디</h1>
        <p>{detail.id}</p>

        <h1>제목</h1>
        <p>{detail.title}</p>

        <h2>작성자</h2>
        <p>{detail.writer}</p>

        <h2>내용</h2>
        <p>{detail.content}</p>
        
        </>    
    );
}

export default Product;