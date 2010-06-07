import React, { Component } from 'react';
import './SignIn.css';
import img1 from './../../ANECYS_LOGO.png';
import img2 from './../../UNI_LOGO.png';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/AuthActions';


class Form extends Component {
    render() {
        return (
            <div className="container-fluid loginFormInputs">
                <div className="row">
                    <div className="col s12">
                        <form onSubmit={this.props.onHandleSubmit}>
                            <div className="input-field">
                                <label htmlFor="correo">Correo</label>
                                <input type="text" id="correo" onChange={this.props.onHandleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="contrasenha">Contraseña</label>
                                <input type="password" id="contrasenha" onChange={this.props.onHandleChange} />
                            </div>

                            <button id="ButtonIniciarSesion" className="btn waves-effect waves-light" type="submit" name="action">
                                Entrar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            correo: "",
            contrasenha: "",
        }
    }

    onHandleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    // componentDidMount=() =>{
    //     console.log("componentDidMount")
    //     this.setState({
    //         User: document.getElementById('User').defaultValue,
    //         Password: document.getElementById('Password').value
    //     })
    // }

    onHandleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    render() {
        const { authError, auth } = this.props;
        console.log(this.props);
        if (auth.uid) {
            return <Redirect to="/dashboard" />
        }

        return (
            <div className="container-fluid contenedorPadreLogIn">
                <div className="container-fluid SigninContainerMobile">
                    <div className="row">
                        <div className="col s12">
                            <p className="TituloIniciarSesion">Control de Usuarios</p>
                        </div>
                    </div>

                    <div className="row valign-wrapper logos">
                        <div className="col s6">
                            <img src={img1} alt="logo1" className="logo" />
                        </div>

                        <div className="col s6">
                            <img src={img2} alt="logo2" className="logo" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="s12">
                            <div className="container">
                                <div className="row">
                                    <div className="col s12">
                                        <Form onHandleSubmit={this.onHandleSubmit} onHandleChange={this.onHandleChange} />
                                    </div>
                                    <div className="col s12">
                                        <p>{authError}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid SigninContainerDesktop">
                    <div className="row valign-wrapper">
                        <div className="col s6">
                            <div className="container-fluid">
                                <div className="row valign-wrapper logosRow">
                                    <div className="col s12 ">
                                        <img src={img1} alt="logo1"
                                            className="logo"
                                        />
                                    </div>
                                </div>
                                <div className="row valign-wrapper">
                                    <div className="col s12">
                                        <img src={img2} alt="logo2"
                                            className="logo"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col s6 loginForm">
                            <div className="container-fluid loginFormContainer">
                                <div className="row valign-wrapper">
                                    <div className="col s10 offset-s1">
                                        <div className="container-fluid">
                                            <div className="col s12">
                                                <p id="TituloIniciarSesionDesktop" className="TituloIniciarSesion">Control de Usuarios</p>
                                            </div>
                                            <div className="col s12">
                                                <Form onHandleSubmit={this.onHandleSubmit} onHandleChange={this.onHandleChange} />
                                            </div>
                                            <div className="col s12">
                                                <p>{authError}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
