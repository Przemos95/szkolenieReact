
import Button from './Button';
// import { Button } from './Button' - element nie default
import React from 'react';

class PanelComponent extends React.Component {
    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <>
                {this.props.buttons.map(b =>
                    <Button
                        key={b.text}
                        text={b.text}
                        handleClick={b.handleClick}
                    />
                    )}
            </>
        );
    }
}

export default PanelComponent;
