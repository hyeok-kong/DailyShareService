import React from 'react';

function Tbody(props) {
    const list = []
    for(let i = 0; i < props.DB.length; i++){
        let t = props.DB[i]
        list.push(
        <>
        <tr>
            <td>{t.userId}</td>
            <td>{t.id}</td>
            <td>{t.title}</td>
            <td><a href=''>{t.body}</a></td>
        </tr>
        </>
        )
    }
    return <tbody>{list}</tbody>
}

export default Tbody;