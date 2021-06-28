import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Conteudo1 from '../views/contents/Conteudo1';
import Conteudo2 from '../views/contents/Conteudo2';
import Conteudo3 from '../views/contents/Conteudo3';
import Home from '../views/contents/Home';
import NaoEncontrado from '../views/contents/NaoEncontrado';

import './styles.css';

function Content() {
  return (
    <main className="content">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Conteudo1/:user">
          <Conteudo1 />
        </Route>
        <Route path="/Conteudo2">
          <Conteudo2 />
        </Route>
        <Route path="/Conteudo3">
          <Conteudo3 />
        </Route>
        <Route path="*">
          <NaoEncontrado />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
}

export default Content;
