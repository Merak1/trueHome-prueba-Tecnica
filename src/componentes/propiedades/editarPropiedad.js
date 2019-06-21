import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import editarDireccion from './editar/editarDireccion.js'
import editarDueno from './editar/editarDueno.js'
import editarPrecio from './editar/editarPrecio.js'
class editarPropiedad extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <h2>editar propiedad</h2>
                <Router>
                    <div className="container">
                        <Switch>
                            <Route exact path="/propiedades/editar/:id/dirección" component={editarDireccion} />
                            <Route exact path="//propiedades/editar/:id/dueño" component={editarDueno} />
                            <Route exact path="/propiedades/editar/:id/precio" component={editarPrecio} />
                        </Switch>
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

export default editarPropiedad;