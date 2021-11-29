import React from 'react';
import Display from '../Display/Display';
import PanelComponent from '../Panel/PanelComponent';

class CalculatorComponent extends React.Component {
    state = {
        display: '',
        actualNumber: '',
        numbers: [],
        operations: []
    };

    handleButtonClick = (value) => {
        // console.log(this.state.actualNumber);
        // this.setState((state) => ({
        //     actualNumber: state.actualNumber + 1
        // }));
        // console.log(this.state.actualNumber);

        // return;
        switch (value) {
            case '+':
            case '-':
            case '*':
            case '/':
                this.setState((state) => ({
                    numbers: [...state.numbers, Number.parseInt(state.actualNumber)],
                    operations: [...state.operations, value],
                    actualNumber: '',
                    display: state.display + value
                }));
                // this.setState((state, props) => {
                //     if(2 < 0) {
                //         const finalNumber = Number.parseInt(state.actualNumber);
                //         return {
                //             numbers: [...state.numbers, finalNumber],
                //             operations: [...state.operations, value],
                //             actualNumber: '',
                //             display: state.display + value
                //         };
                //     }
                // });

                return;
            
            case '<-':
                // if na to czy to liczba czy operacja. Czy tam cokolwiek jest
                this.setState((state) => ({
                    display: state.display.slice(0, -1),
                    actualNumber: state.display.slice(0, -1)
                }));
                return;
            
            case '=':
                // dopisać
                return;
            default:
                this.setState((state) => ({
                    display: state.display + value,
                    actualNumber: state.actualNumber + value
                }));
                return;
        }
    };
    
    constructor(props) {
        super(props);

        const btn = ['1', '2', '3', '<-',
            '4', '5', '6', '+',
             '7', '8', '9', '-',
            '*', '0', '/', '='
        ];

        this.buttons = [];
        for (let element of btn) {
            this.buttons.push(
                { text: element, handleClick: () => this.handleButtonClick(element) }
            );
        }
    }

    render() {
        return (
            <>
                <Display 
                    text={this.state.display}
                />
                <PanelComponent
                    buttons={this.buttons}
                />
            </>
        );
    }
}

export default CalculatorComponent;