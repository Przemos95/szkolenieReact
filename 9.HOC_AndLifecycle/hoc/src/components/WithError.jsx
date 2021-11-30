// function WithError(props) {
//     function add() {
//         const a = props.data.a;
//     }

//     return (
//         <>
//          <button onClick={add}>Click</button>
//         </>
//     );
// }

// export default WithError;

import React from 'react';
class WithError extends React.Component {

    render() {
        return (
                    <>
                    
                   
                    <div>{this.props.data.a}</div>
                    
                     
                    </>
                );
    }
}
export default WithError;