import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Propiedades from "./componentes/propiedades/propiedades";
import nuevaPropiedad from "./componentes/propiedades/nuevaPropiedad";
import mostrarPropiedad from "./componentes/propiedades/mostrarPropiedad";
import editarPropiedad from "./componentes/propiedades/editarPropiedad";
import Navbar from "./componentes/layout/navbar"

function App() {
  return (

    <Router>
      <Navbar />
      <div className="container" style={{}}>
        <Switch>
          <Route
            exact
            path="/Propiedades"
            component={Propiedades} />




          < Route exact path="/propiedades/nuevo" component={nuevaPropiedad} />
          <Route exact path="/propiedades/mostrar/:id" component={mostrarPropiedad} />
          <Route exact path="/propiedades/editar/:id" component={editarPropiedad} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
