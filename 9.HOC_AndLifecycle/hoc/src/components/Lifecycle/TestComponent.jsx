import React from 'react';
import LifecycleComponent from './LifecycleComponent';

class TestComponent extends React.Component {
    state = {
        show: true
    };

    render() {
        return(
            <>
            {
                this.state.show
                ? <LifecycleComponent />
                : <div>Hello</div>
            }
            <button onClick={() => this.setState((state) => ({
                show: !state.show
            }))}>
                Zmień komponent
            </button>
            </>
        )
    }
}

export default TestComponent;