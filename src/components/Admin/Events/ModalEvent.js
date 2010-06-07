import React, { Component } from 'react';
import { Modal, Button, TimePicker } from 'react-materialize';
import './ModalEvent.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { RegistrarEvento } from './../../../store/actions/EventsActions';
import DatePickerAdmin, { TimePickerAdmin } from './../../DatePickerAdmin';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { newEventDateStartChanged, InputDateSelected, newEventDateEndChanged } from '../../../store/actions/DatesActions';
import PickDate from './../../PickDate';

function switchDateSelect(date, context) {
    // switch (context.InputDateSelected) {
    //     case "dateStart": {
    //         console.log('dateStart Select')
    //         context.NuevoFechaInicio(date);
    //         break;
    //     }
    //     case "dateEnd": {
    //         console.log('dateEnd Select')
    //         context.NuevoFechaFinal(date);
    //         break;
    //     }
    //     default: {
    //         console.log('not apply')
    //     }
    // }

    if (context.InputDateSelected === "DateStart") {
        console.log('dateStart Select')
        context.NuevoFechaInicio(date);
    }

    if (context.InputDateSelected === "DateEnd") {
        console.log('dateEnd Select')
        context.NuevoFechaFinal(date);
    }
}

class ModalEvent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            descripcion: '',
            dateStart: props.dateStartNewEvent,
            dateEnd: props.dateEndNewEvent,
            dateSelected: props.dateInputSelected
        }
    }

    componentDidMount() {
        let context = this.props;
        const datePickerOptions = {
            autoClose: true,
            // minDate: new Date(2018, 11, 3)
            // defaultDate: new Date(2018, 1, 3),
            // setDefaultDate: true
            onSelect(date) {
                switchDateSelect(date, context);
            }
        };
        const dateElement1 = M.Datepicker.init(this.DatepickerStart, datePickerOptions);
        const dateElement2 = M.Datepicker.init(this.DatepickerEnd, datePickerOptions);


        // let instance1 = M.Datepicker.getInstance(this.DatepickerStart);
        // let instance2 = M.Datepicker.getInstance(this.DatepickerEnd);

        // instance.setDate(new Date(2018, 2, 3));
    }
    // onSelectNuevaFechaInicio(date) {
    //     console.log(date)
    // }



    onSubmit = () => {

        this.props.RegistrarEvento(this.state);
    }

    onHandleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }


    render() {

        return (
            <Modal
                actions={[
                    <Button
                        style={{ margin: '-10px 10px 10px 10px', backgroundColor: 'green', color: 'white' }}
                        flat node="button" waves="green"
                        onClick={this.onSubmit}
                    >Registrar Evento</Button>,

                    <Button
                        style={{ margin: '-10px 10px 10px 10px', border: '1px solid gray' }}
                        flat modal="close" node="button" waves="purple">Cancelar</Button>
                ]}
                // bottomSheet
                fixedFooter={false}
                header="Nuevo Evento"
                id="Modal-Eventos"
                open={false}
                options={{
                    dismissible: true,
                    // endingTop: '15%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    // startingTop: '4%'
                }}
                // root={[object HTMLBodyElement]}
                // trigger={<Button node="button">MODAL BUTTOM SHEET STYLE</Button>}
                trigger={this.props.trigger}
            >
                <div className="container-fluid" style={{ padding: '20px' }}>
                    <div className="row">
                        <div className="col s12">
                            <div className="input-field">
                                <label htmlFor="titulo">Titulo del Evento</label>
                                <input type="text" id="titulo"
                                    onChange={this.onHandleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12">
                            <textarea id="descripcion"
                                style={{ height: "100px" }}
                                onChange={this.onHandleChange}
                                placeholder="Descripción del Evento"
                            ></textarea>
                        </div>
                    </div>

                    <div className="row paneFecha">
                        <div className="col s6">
                            <div className="container-fluid">
                                <div className="row valign-wrapper">
                                    <div className="col s12">
                                        <p>Inicio</p>
                                    </div>
                                    <div className="col s12">
                                        {/* <DatePickerAdmin className="date" id="dateTimeStart"
                                            onSelect={this.onSelectNuevaFechaInicio} 
                                            /> */}
                                        {/* <div>
                                            <label>Datepicker</label>
                                            <input
                                                ref={DatePickerStart => {
                                                    this.DatepickerStart = DatePickerStart;
                                                }}
                                                onClick={() => this.props.NuevoInputFechaSeleccionado("dateStart")}
                                                placeholder="new Event Date"
                                                id="dateStart"
                                                type="text"
                                                className="datepicker"
                                            />
                                        </div> */}
                                        <PickDate />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s6">
                            <TimePickerAdmin id="timeStart" />
                        </div>
                    </div>

                    <div className="row paneFecha">
                        <div className="col s6">
                            <div className="container-fluid">
                                <div className="row valign-wrapper">
                                    <div className="col s12">
                                        <p>Cierre</p>
                                    </div>
                                    <div className="col s12">
                                        {/* <DatePickerAdmin className="date" id="dateEnd" /> */}
                                        {/* <div>
                                            <label>Datepicker</label>
                                            <input
                                                ref={DatePickerEnd => {
                                                    this.DatepickerEnd = DatePickerEnd;
                                                }}
                                                onClick={() => this.props.NuevoInputFechaSeleccionado("dateEnd")}
                                                placeholder="new Event Date"
                                                id="dateEnd"
                                                type="text"
                                                className="datepicker"
                                            />
                                        </div> */}
                                        <PickDate />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s6">
                            <TimePickerAdmin id="timeEnd" />
                        </div>
                    </div>


                </div>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        dateStartNewEvent: state.date.dateStartNewEvent,
        dateEndNewEvent: state.date.dateEndNewEvent,
        dateInputSelected: state.date.dateInputSelected
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        RegistrarEvento: (evento) => dispatch(RegistrarEvento(evento)),
        NuevoFechaInicio: (date) => dispatch(newEventDateStartChanged(date)),
        NuevoFechaFinal: (date) => dispatch(newEventDateEndChanged(date)),
        NuevoInputFechaSeleccionado: (inputName) => dispatch(InputDateSelected(inputName))
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(ModalEvent)
