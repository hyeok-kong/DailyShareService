import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Product(props) {
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        const fetchDetail = async () => {
            const response = await axios.get(`http://localhost:8080/api/v1/posts/${props.id}`,);
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