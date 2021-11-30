import React from 'react'
import FunctionComponent from './FunctionComponent';
import ReactComponent from './ReactComponent';
import ReactPureComponent from './ReactPureComonent';

class MainComponent extends React.Component {
    state = {
        text: 'Tekst startowy',
        car: {
            brand: 'AUDI'
        }
    };

    onTextChange = () => {
        this.setState((state) => ({
            text: 'Zmieniony tekst'
        }));
    }

    onCarChange = () => {
        this.setState((state) => ({
            car: {
                ...state.car,
                brand: 'BMW'
            }
        }));
    }

    render() {
        return (
             <>
                <FunctionComponent
                    text={this.state.text}
                    car={this.state.car}
                />
                <ReactComponent
                    text={this.state.text}
                    car={this.state.car}
                />
                <ReactPureComponent
                    text={this.state.text}
                    car={this.state.car}
                />
                <button onClick={this.onTextChange}>Zmiana tektu</button>
                <button onClick={this.onCarChange}>Zmiana samochodu</button>
             </>
        );
    }
}

export default MainComponent;