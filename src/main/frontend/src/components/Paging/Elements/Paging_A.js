import React from 'react';

function Paging_A(props){                                                                    //페이지숫자 컴포넌트 게시글 개수에 맞춰 페이지 숫자가 생성되고 누를때마다 현페이를 나타내슨 변수를 변경하도록 함
    const index = []
    let pagesu = 0
    if(props.maximum%10 === 0){pagesu = props.maximum/props.bundle}
    else{pagesu = props.maximum/props.bundle +1}
    for(let i = 1; i <= pagesu; i++){
      index.push(<a href = {i}>{i}</a>)
    }
    return <>{index}</>
  }

  export default Paging_A;