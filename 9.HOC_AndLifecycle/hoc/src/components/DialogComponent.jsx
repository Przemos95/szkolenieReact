import React from 'react';

class DialogComponent extends React.Component {
    render() {
        return(
            <div>
                Dialog
                {this.props.title}
                {this.props.children}
            </div>
        )
    }
}

export default DialogComponent;