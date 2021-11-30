const PurchaseItem = (props) => {
    const displayMoney = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    };

    return(
        <div className="item">
            <div>{props.item.desc}</div>
            <div>{props.item.category}</div>
            <div>{displayMoney(props.item.value)}</div>
            <button>
                Usuń
            </button>
        </div>
    )
};

export default PurchaseItem;