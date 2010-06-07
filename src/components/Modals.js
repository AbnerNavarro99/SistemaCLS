import React from 'react';
import {Modal, Button} from 'react-materialize';

export default function Modals(props) {
    return (
        <div>
            <Modal
                actions={[
                    <Button flat modal="close" node="button" 
                    waves="teal"
                    >Close</Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                header="Modal Header"
                id={props.id}
                open={false}
                options={{
                    dismissible: true,
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                }}
                // root={[object HTMLBodyElement]}
                trigger={<Button 
                    node="button"
                    style={{
                        backgroundColor:props.color, 
                        width:"100%", border: "none", boxShadow:"none", fontFamily:"Roboto", fontSize:"1em"}}
                    >{props.title}</Button>}
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            </Modal>
        </div>
    )
}


function ValidarCambiodeOpciondeMenu(condicion){
    if(condicion){

    }
}