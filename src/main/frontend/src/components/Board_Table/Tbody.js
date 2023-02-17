import React from 'react';

function Tbody(props) {
    const list = []
    for(let i = 0; i < props.DB.length; i++){
        let t = props.DB[i]
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