import React, { useEffect, useState } from 'react';
import ChildComponent from './ChildComponent';

class LifecycleComponent extends React.Component {
    state = {
        value: ''
    };
    // const name
    // const birthDate
    // const address
    // const hobby

    // const state = 

    constructor(props) {
        super(props);
        console.log('construktor');
        this.state = {
            name: '',
            birthDate: '',
            address: {
                street: ''
            },
            hobby: []
        }
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    
    render() {
        console.log('Render');
        return (
            <div>
                <ChildComponent />
                <button onClick={() => this.setState({value: 'New value'})}>Zmień stan</button>
            </div>
        )
    }
}

export default LifecycleComponent;