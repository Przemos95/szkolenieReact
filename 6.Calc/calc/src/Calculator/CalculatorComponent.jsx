import React from 'react';
import Display from '../Display/Display';
import PanelComponent from '../Panel/PanelComponent';

class CalculatorComponent extends React.Component {
    state = {
        display: '',
        actualNumber: '',
        firstNumber: 0,
        operation: ''
    };

    handleButtonClick = (value) => {
        switch (value) {
            case '+':
            case '-':
            case '*':
            case '/':
                this.setState((state) => ({
                    firstNumber: Number.parseInt(state.actualNumber),
                    operation: value,
                    actualNumber: '',
                    display: state.actualNumber + value
                }));
                break;
            case '<-':
                console.log(this.state);
                const lastChar = this.state.display.slice(this.state.display.length - 1);
                if (['*', '+', '-', '/'].find(x => x === lastChar)) {
                    this.setState((state) => ({
                        operation: '',
                        display: state.display.slice(0, -1),
                        actualNumber: state.firstNumber.toString(),
                        firstNumber: 0
                    }));
                } else {
                    this.setState((state) => ({
                        display: state.display.slice(0, -1),
                        actualNumber: state.actualNumber.slice(0, -1)
                    }));
                }
                break;
            
            case '=':
                if (this.state.firstNumber && this.state.operation) {
                    const secondNum = Number.parseInt(this.state.actualNumber);
                    const result = this.calcResult(this.state.firstNumber, secondNum, this.state.operation);
                    this.setState((state) => ({
                        display: result.toString(),
                        actualNumber: result.toString(),
                        firstNumber: result,
                        operation: ''
                    }));
                }
                break;
            default:
                if (this.state.actualNumber.length > 8)
                    break;

                this.setState((state) => ({
                    display: state.display + value,
                    actualNumber: state.actualNumber + value
                }));
                break;
        }
    };
    
    calcResult = (num1, num2, operation) => {
        switch (operation) {
            case '+': return num1 + num2;
            case '-': return num1 - num2;
            case '*': return num1 * num2;
            case '/': return num1 / num2;
            default: return 0;
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
            <div className="calculator">
                <Display 
                    text={this.state.display}
                />
                <PanelComponent
                    buttons={this.buttons}
                />
            </div>
        );
    }
}

export default CalculatorComponent;