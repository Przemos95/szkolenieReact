import React from 'react';
import ProductService from "../../services/ProductService";


class ComponentWithState extends React.Component {
    state = {
        list: [],
    }

    componentDidMount() {
        const service = new ProductService();
        service
            .getProducts()
            .then(x => {
                this.setState({list: x})
            });
    }

    render() {
        return (
            <>
                {this.state.list.map(x => 
                    <div key={x} className="products">
                        {x}
                    </div>)}
            </>
        );
    }
}

export default ComponentWithState;