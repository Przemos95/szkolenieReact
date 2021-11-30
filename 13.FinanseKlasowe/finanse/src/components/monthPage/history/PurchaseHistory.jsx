import React from "react";
import CategoryService from "../../../service/CategoryService";
import HistoryService from "../../../service/HistoryService";
import SelectCategory from "./SelectCategory";
import PurchaseItem from './PurchaseItem';
import './purchaseHistory.css';
import AddPurchase from "./AddPurchase";

class PurchaseHistory extends React.Component {
    state = {
        categoryList: [],
        categoryId: null,
        productHistoryList: [],
        selectedProductHistoryList: []
    };

    componentDidMount() {
        this.getCategories();
        this.getProductHistory();
    }
    
    updateSelectedCategory = (id) => {
        if (id) {
            const filteredProduct = this.state.productHistoryList.filter(x => x.categoryId === id);
            this.setState({selectedProductHistoryList: filteredProduct});
        } else {
            this.setState({selectedProductHistoryList: this.state.productHistoryList});
        }
    };
    
    getCategories = () => {
        const service = new CategoryService();
        service.getAllCategories()
            .then(res => this.setState({categoryList: res}));
    }

    getProductHistory = () => {
        const service = new HistoryService();
        service.getAllProducts()
            .then(res => this.setState({
                productHistoryList: res,
                selectedProductHistoryList: res
            }));
    }

    onSelectChange = (id) => {
        this.setState({
            categoryId: id
        });
        this.updateSelectedCategory(id);
    };

    convertedProducts = this.state.selectedProductHistoryList.map(x => {
        x.category = this.state.categoryList.find(cat => cat.id === x.categoryId)?.name;
        return x;
    });

    render() {
    return(
        <>
            <div className="purchaseItemMenu">
                <SelectCategory
                    categoryList={this.state.categoryList}
                    onSelectedCategory={this.onSelectChange}
                    categoryId={this.state.categoryId}
                />
                <AddPurchase
                    categoryList={this.state.categoryList}
                />
            </div>

            {this.convertedProducts.map(x => (<PurchaseItem key={x.id} item={x} />))}
        </>
    )
    }
}

export default PurchaseHistory;