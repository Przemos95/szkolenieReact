import React from 'react';

class ReactPureComponent extends React.PureComponent {
    

    render() {
        console.log('Render ReactPureComponent');
        return(
            <div>
                React pure component:
                {this.props.text}
                {this.props.car.brand}
            </div>
        );
    }
}

const areEqual = () => {
    return true;
}

export default React.memo(ReactPureComponent, areEqual);