import React from 'react'
import './styles/style.css'
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <nav>
        <ul>
        
          <li><Link to="/" style={{textDecoration:'none',color:'white'}}>Tic-Tac-Toe</Link></li>
          </ul>
      </nav>
    )
}

export default Nav
