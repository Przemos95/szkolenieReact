import React from 'react';

class ChildComponent extends React.Component {
    componentDidMount() {
        console.log("child mount");
    }

    componentDidUpdate() {
        console.log('child update');
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default ChildComponent;