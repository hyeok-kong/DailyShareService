import React from 'react';

function Tbody(props) {
    const list = []
    props.DB.map(function(elements){
        let t = elements
        list.push(
            <>
            <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.writer}</td>
                <td>{t.title}</td>
                <td>{t.viewCount}</td>
            </tr>
            </>
        )

    })

    return <tbody>{list}</tbody>
}

export default Tbody;