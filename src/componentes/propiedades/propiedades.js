import React, { Component } from 'react'
import axios from 'axios'
class Propiedades extends Component {
    state = {
        veces: 0,
        propiedades: [],
        image: "https://loremflickr.com/320/240/house"
    };


    componentDidMount() {
        this.getPropiedades()
        // this.getImages()
        // console.log(this.state);
        // axios.get('http://localhost:2000/propiedad  ')
        //     .then(res => {
        //         console.log(res, "res")
        //         this.setState({ propiedades: res.data });

        //     })


        // axios.get('http://localhost:2000/propiedad/2  ')
        //     .then(res => {
        //         console.log(res, "res");
        //         console.log(res.data, "res.data ");
        //         console.log(res.data.id, " id ");
        //         console.log(res.data.direccion, " dirección ");
        //         console.log(res.data.precio, " precio ");
        //         console.log(res.data.nombre, " nombre ");
        //         console.log(res.data.apellido, " apellido ");
        //         console.log(res.data.edad, " edad");


        //         //NESTED JSON 
        //         // console.log(res.data.datos[0].nombre, " nombre ");
        //         // console.log(res.data.datos[0].apellido, " apellido ");
        //         // console.log(res.data.datos[0].edad, " edad");

        //         this.setState({ propiedades: res.data });
        //     })
    }
    getImages() {
        // var req = require.context("., false, /.*\.jpg$/);
        // req.keys().forEach(function (key) {
        //     req(key);
        // });
    }
    getPropiedades() {
        axios.get('http://localhost:2000/propiedades  ')
            .then(res => {
                console.log(res, "res")
                console.log(res.data, "res.data ");
                console.log(res.data[1], "res.data1 ");


                this.setState({ propiedades: res.data });

                console.log(this.state.propiedades, "propiedades state");

            })
    }
    getNumeroPropiedades() {
        const veces = Propiedades.length
        console.log(veces);
        // console.log(this.state.propiedades, "propiedades state");


    }
    render() {
        return (
            <div>
                <h1>Propiedaes </h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: ' space-evenly' }}>
                    {this.state.propiedades.map(propiedades =>
                        <div key={propiedades.id} style={{ maxWidth: '20rem' }} className="card text-white bg-secondary mb-3" >
                            <div style={{ display: 'flex' }} className="card-header">{propiedades.titulo}
                                <div style={{ marginLeft: "auto" }}>
                                    <button type="button" className="btn btn-primary">edit</button>
                                    <button type="button" className="btn btn-danger">x</button>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="card-title"> {propiedades.direccion} </p>
                                <p className="card-text">Datos del Dueño </p>
                                <ul>
                                    <li> {propiedades.nombre} {propiedades.apellido}  </li>
                                    <li> {propiedades.edad} años </li>
                                </ul>
                                <p className="card-text"> Precio {propiedades.precio} $ </p>

                                <img src={this.state.image} style={{ maxWidth: '90%' }} alt="benis" />
                                {/* <img style="height: 200px; width: 100%; display: block;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image"> */}

                            </div>
                        </div>
                    )}

                </div>
            </div >
        );
    }
}

export default Propiedades;