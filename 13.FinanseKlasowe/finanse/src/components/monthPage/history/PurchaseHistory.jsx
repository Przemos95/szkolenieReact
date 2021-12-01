import React from "react";
import SelectCategory from "./SelectCategory";
import PurchaseItem from './PurchaseItem';
import './purchaseHistory.css';
import AddPurchase from "./AddPurchase";
import { GetCategoryList } from "../../../actions/categoryActions";
import { GetHistoryList } from "../../../actions/historyAction";
import { connect } from "react-redux";

class PurchaseHistory extends React.Component {
    state = {
        categoryId: null,
        selectedProductHistoryList: []
    };

    componentDidMount() {
        this.props.getCategoryList();
        this.props.getProductList();
    }
    
    updateSelectedCategory = (id) => {
        if (id) {
            const filteredProduct = this.props.productHistoryList.filter(x => x.categoryId === id);
            this.setState({selectedProductHistoryList: filteredProduct});
        } else {
            this.setState({selectedProductHistoryList: this.props.productHistoryList});
        }
    };

    onSelectChange = (id) => {
        this.setState({
            categoryId: id
        });
        this.updateSelectedCategory(id);
    };

    convertedProducts = () => this.state.selectedProductHistoryList.map(x => {
        x.category = this.props.categoryList.find(cat => cat.id === x.categoryId)?.name;
        return x;
    });

    render() {
        console.log(this.props.categoryList);
    return(
        <>
            <div className="purchaseItemMenu">
                <SelectCategory
                    categoryList={this.props.categoryList}
                    onSelectedCategory={this.onSelectChange}
                    categoryId={this.state.categoryId}
                />
                <AddPurchase />
            </div>

            {this.convertedProducts().map(x => (<PurchaseItem key={x.id} item={x} />))}
        </>
    )
    }
}

function mapStateToProps(state) {
    return {
        categoryList: state.categoryReducer.categoryList,
        productHistoryList: state.historyReducer.historyList,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCategoryList: () => dispatch(GetCategoryList()),
        getProductList: () => dispatch(GetHistoryList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseHistory);