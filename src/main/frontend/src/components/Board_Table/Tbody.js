import React from 'react';

function Tbody(props) {
    const list = []
    for(const element of props.DB){
        let t = element
        list.push(
        <>
        <tr>
            <td>{t.id}</td>
            <td>{t.writer}</td>
            <td>{t.title}</td>
            <td>{t.viewCount}</td>
        </tr>
        </>
        )
    }
    return <tbody>{list}</tbody>
}

export default Tbody;