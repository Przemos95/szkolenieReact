
import Button from './Button';
// import { Button } from './Button' - element nie default
import React from 'react';
import './PanelComponent.css';

class PanelComponent extends React.Component {
    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <div id="panel">
                {this.props.buttons.map(b =>
                    <Button
                        key={b.text}
                        text={b.text}
                        handleClick={b.handleClick}
                    />
                    )}
            </div>
        );
    }
}

export default PanelComponent;
