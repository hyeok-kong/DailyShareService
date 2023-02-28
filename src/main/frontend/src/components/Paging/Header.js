import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    
    return (
        <>
        <header>
          {props.isLogin ? 
          <Link to = '/'><h1 className = "title">Daily Share</h1></Link>
          :
          <Link to = '/Login'><h1 className = "title">Daily Share</h1></Link>}
          <div align = "right">🤷‍♀️</div>
        </header>
        </>    
    );
}

export default Header;