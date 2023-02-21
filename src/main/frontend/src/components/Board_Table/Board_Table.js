import React from 'react';
import Thead from './Thead';
import Tbody from './Tbody';

function Board_Table(props) {
    return (
    <table className = "Table" width = "1500px"  height = "100px" margin = "500px">
        <Thead />
        <Tbody DB = {props.DB}/>
    </table>
    );
}

export default Board_Table;