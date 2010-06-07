import React, { useState, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { DatePicker } from "react-materialize";

const PickDate = (props) => {

    const [state, setState] = useState({myDate: (new Date()).toLocaleDateString()});

    const handleChange = (e) => {
        const key = e.target.id;
        const val = e.target.value;

        const newState = {...state};
        newState[key] = val;
        setState(newState);
    }

    return (
        <React.Fragment>
            <DatePicker
                label="Fecha de Inicio"
                value={state.myDate}
                id="myDate"
                onChange={(newDate) => {
                    handleChange({
                        target: {
                            id: "myDate",
                            value: newDate.toLocaleDateString()
                        }
                    })
                }} />
        </React.Fragment>
    );
}

export default PickDate;