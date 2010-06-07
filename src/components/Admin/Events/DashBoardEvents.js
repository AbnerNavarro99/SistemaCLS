import React, { Component } from 'react';
import './DashBoardEvents.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ModalEvent from './ModalEvent';



export default class DashBoardEvents extends Component {

    render() {
        const ButtonNuevoEvento =
            <div className="col s3 offset-s1 ButtonNuevoEvento">
                <div className="container">
                    <div className="row">
                        <div className="col offset-s2 ButtonAdd">
                            <i class="large material-icons">add</i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <h4>Nuevo Evento</h4>
                        </div>
                    </div>
                </div>
            </div>;
        {/* // const [value, onChange] = useState(new Date()); */ }
        return (
            <div className="container-fluid dashboardEvents">
                <div className="row">
                    <div className="col s12">
                        <div className="container-fluid">
                            <div className="row gestionEventos">
                                <ModalEvent trigger={ButtonNuevoEvento} />
                                <div className="col s6 offset-s1 calendarCol">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col s12">
                                                <Calendar className="calendar" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col s4">
                                                <p>Próximo Evento:</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col s4">
                                                <p>Fecha y Hora:</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className="col s12">
                                    <hr />
                                </div>
                            </div> */}
                            <div className="row Events">
                                <div className="col s12">
                                    <p>Evento de hoy: Tributo a las madres de Héroes y  Mártires</p>
                                    <br />
                                    <p>Fecha y Hora:</p>
                                    <br />
                                </div>
                                <div className="col s12">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col s8 offset-s2">
                                                <input type="text" placeholder="Buscar Personas en el Registro" />
                                            </div>
                                        </div>
                                        <div className="row tableRegistradosEnEvento">
                                            <div className="col s12">
                                                <table className="responsive-table highlight" style={{ border: '1px solid grey' }}>
                                                    <thead>
                                                        <tr>
                                                            <th>No</th>
                                                            <th>Nombre Completo</th>
                                                            <th>No. Cedula</th>
                                                            <th>Cargo</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                01
                                                            </td>
                                                            <td>
                                                                Abner Geovanny Navarro Meza
                                                            </td>
                                                            <td>
                                                                001-200299-0003P
                                                            </td>
                                                            <td>
                                                                Estudiante
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                02
                                                            </td>
                                                            <td>
                                                                Carlos Manuel Herrera Fuentes
                                                            </td>
                                                            <td>
                                                                001-281092-0025G
                                                            </td>
                                                            <td>
                                                                Responsable Corum
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                03
                                                            </td>
                                                            <td>
                                                                Cristopher Alexander Chávez Larios
                                                            </td>
                                                            <td>
                                                                001-170498-0009Y
                                                            </td>
                                                            <td>
                                                                Estudiante
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                01
                                                            </td>
                                                            <td>
                                                                Abner Geovanny Navarro Meza
                                                            </td>
                                                            <td>
                                                                001-200299-0003P
                                                            </td>
                                                            <td>
                                                                Estudiante
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                02
                                                            </td>
                                                            <td>
                                                                Carlos Manuel Herrera Fuentes
                                                            </td>
                                                            <td>
                                                                001-281092-0025G
                                                            </td>
                                                            <td>
                                                                Responsable Corum
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                01
                                                            </td>
                                                            <td>
                                                                Abner Geovanny Navarro Meza
                                                            </td>
                                                            <td>
                                                                001-200299-0003P
                                                            </td>
                                                            <td>
                                                                Estudiante
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                02
                                                            </td>
                                                            <td>
                                                                Carlos Manuel Herrera Fuentes
                                                            </td>
                                                            <td>
                                                                001-281092-0025G
                                                            </td>
                                                            <td>
                                                                Responsable Corum
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                02
                                                            </td>
                                                            <td>
                                                                Carlos Manuel Herrera Fuentes
                                                            </td>
                                                            <td>
                                                                001-281092-0025G
                                                            </td>
                                                            <td>
                                                                Responsable Corum
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}