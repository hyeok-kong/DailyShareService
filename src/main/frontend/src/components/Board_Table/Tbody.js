import React from 'react';
import { Link } from 'react-router-dom';

function Tbody(props) {
    const list = []
    {props.DB && props.DB.map(function(elements){
        let t = elements
        let url = `/posts/${t.id}`
        list.push(
            <>
            <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.writer}</td>
                <Link to = {url}><td>{t.title}</td></Link>
                {/* <td onClick={() => {}}>{t.title}</td> */}
                <td>{t.viewCount}</td>
                
            </tr>
            </>
        )

    })}

    return <tbody>{list}</tbody>
}

export default Tbody;