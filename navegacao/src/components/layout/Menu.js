import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

function Menu() {
  return (
    <aside className="menu">
      <nav>
        <ul>
          <li><Link to="/">Nome</Link></li>
          <li><Link to="/Conteudo1/123">Conteúdo 1</Link></li>
          <li><Link to="/Conteudo2">Conteúdo 2</Link></li>
          <li><Link to="/Conteudo3">Conteúdo 3</Link></li>
          <li><Link to="/Conteudo4">Conteúdo 4</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Menu;
