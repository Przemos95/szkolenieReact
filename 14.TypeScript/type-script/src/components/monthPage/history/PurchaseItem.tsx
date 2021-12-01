import React from "react";
import { ProductExtended } from "./PurchaseHistory";

interface IProps {
    item: ProductExtended;
}

interface IState {}

class PurchaseItem extends React.Component<IProps, IState> {
    displayMoney = (num: number) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    };

    render() {
    return(
        <div className="item">
            <div>{this.props.item.desc}</div>
            <div>{this.props.item.category}</div>
            <div>{this.displayMoney(this.props.item.value)}</div>
            <button>
                Usuń
            </button>
        </div>
    )
    }
};

export default PurchaseItem;