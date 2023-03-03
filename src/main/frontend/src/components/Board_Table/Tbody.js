import React from 'react';
import { Link } from 'react-router-dom';

function Tbody(props) {
    const list = props.DB.map(function(element) {
        let url = `/posts/${element.id}`;
        return (
            <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.writer}</td>
                <td><Link to={url}>{element.title}</Link></td>
                <td>{element.viewCount}</td>
            </tr>
        );
    });

    return <tbody>{list}</tbody>;
}

export default Tbody;