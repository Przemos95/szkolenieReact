import React from 'react';

class ReactComponent extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.text !== this.props.text
            || nextProps.car.brand !== this.props.car.brand;
    }

    render() {
        console.log('Render ReactComponent');
        return(
            <div>
                React component:
                {this.props.text}
                {this.props.car.brand}
            </div>
        );
    }
}

export default ReactComponent;