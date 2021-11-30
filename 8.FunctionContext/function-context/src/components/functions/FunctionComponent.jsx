import React from 'react';
import ChildComponent from './ChildComponent';

class FunctionComponent extends React.Component {
    state = {
        name: '',
    };

    constructor(props) {
        super(props);
        // this.RegularFunction = this.RegularFunction.bind(this);
    }

    RegularFunction() {
        console.log(this, this && this.state);
    }

    ArrowFunction = () => {
        console.log(this, this && this.state);
    };

    render() {
        return( 
        <>
            Główny komponent:
            <button onClick={this.RegularFunction.bind(this)}>
                Regularne wywołanie RegularFunction
            </button>
            <br />
            <button onClick={() => this.RegularFunction()}>
                Wywołanie RegularFunction przez Arrow
            </button>
            <br />
            
            <button onClick={this.ArrowFunction}>
                Regularne wywołanie ArrowFunction
            </button>
            <br />

            <button onClick={() => this.ArrowFunction()}>
                Wywołanie ArrowFunction przez Arrow
            </button>
            <br />

            <ChildComponent
                RegularFunction={this.RegularFunction}
                ArrowFunction={this.ArrowFunction}
            />
        </>)
    }
}

export default FunctionComponent;
export const A = () => {
    
}