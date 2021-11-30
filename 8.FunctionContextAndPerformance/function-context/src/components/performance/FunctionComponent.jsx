import React from 'react';

function FunctionComponent(props) {
    console.log('Render FunctionComponent');
    return (
        <div>
            Function component:
            {props.text}
            {props.car.brand}
        </div>
    );
}

const areEqual = (prevProps, nextProps) => {
    return prevProps.text === nextProps.text
        && prevProps.car.brand === nextProps.car.brand;
};

export default React.memo(FunctionComponent, areEqual);