import React, { Component } from 'react';
import './DashBoard.css';
import { ReactComponent as ReactMenuIcon } from './../../menu.svg';
import DashBoardAssistance from "./Assistance/DashBoardAssistance";
import DashBoardEvents from "./Events/DashBoardEvents";
import DashBoardHistory from "./History/DashBoardHistory";
import DashBoardRegistry from "./Registry/DashBoardRegistry";

export default class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuIndexSelected: 0,
        }
    }

    ComponenteAMostrar = () => {
        const { menuIndexSelected } = this.state;
        let ComponenteAMostrar;
        switch (menuIndexSelected) {
            case 0:
                ComponenteAMostrar = <DashBoardEvents />;
                break;

            case 1:
                ComponenteAMostrar = <DashBoardAssistance />;
                break;

            case 2:
                ComponenteAMostrar = <DashBoardRegistry />;
                break;

            case 3:
                ComponenteAMostrar = <DashBoardHistory />;
                break;
            default:
                break;
        }
        return (
            <div className="container-fluid">
                {ComponenteAMostrar}
            </div>
        )

    }

    onMenuItemSelect = (e) => {
        const { menuIndexSelected } = this.state;
        console.log(e.target.value);
        if (menuIndexSelected !== e.target.value) {
            this.setState({
                menuIndexSelected: e.target.value,
            })
        }
    }


    render() {

        return (
            <div className="container-fluid DashBoardContainer">
                <div className="row">
                    <div className="col s3 containerMenu">
                        <div className="container-fluid">
                            <div className="row MenuHeader ">
                                <div className="col s12 valign-wrapper">
                                    <ReactMenuIcon width="50px" height="50px" className="menu-icon" />
                                    <span style={{ color: 'white', fontSize: '2em', marginTop: '-10px' }}>Menú</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 menu-item-list">
                                    <ul className="ul-list">
                                        <li value="0" onClick={this.onMenuItemSelect}>Eventos</li>
                                        <li value="1" onClick={this.onMenuItemSelect}>Asistencia</li>
                                        <li value="2" onClick={this.onMenuItemSelect}>Registro</li>
                                        <li value="3" onClick={this.onMenuItemSelect}>Historial</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s9 containerConsole">
                        <div className="container-fluid Console">
                            <div className="row componenteAMostrar">
                                <div className="col s12">
                                    <this.ComponenteAMostrar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
