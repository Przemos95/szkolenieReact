import React from 'react';

class ChildComponent extends React.Component {
    render() {
        return(
        <>
            Child:
            <button onClick={this.props.RegularFunction}>
                Regularne wywołanie RegularFunction
            </button>
            <br />

            <button onClick={() => this.props.RegularFunction()}>
                Wywołanie RegularFunction przez Arrow
            </button>
            <br />
            
            <button onClick={this.props.ArrowFunction}>
                Regularne wywołanie ArrowFunction
            </button>
            <br />

            <button onClick={() => this.props.ArrowFunction()}>
                Wywołanie ArrowFunction przez Arrow
            </button>
            <br />
        </>)
    }
}

export default ChildComponent;