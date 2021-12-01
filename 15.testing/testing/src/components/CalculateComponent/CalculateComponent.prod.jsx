import React from 'react';

class CalculateComponent extends React.Component {
    render() {
        return(
            <div>
                Witaj!
                {this.props.name}
            </div>
        )
    }
}

export default CalculateComponent;