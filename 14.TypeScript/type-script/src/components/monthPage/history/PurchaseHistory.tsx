import React from "react";
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import SelectCategory from "./SelectCategory";
import PurchaseItem from './PurchaseItem';
import './purchaseHistory.css';
import AddPurchase from "./AddPurchase";
import { GetCategoryList } from "../../../actions/categoryActions";
import { GetHistoryList } from "../../../actions/historyAction";
import { connect } from "react-redux";
import Category from "../../../models/Category";
import Product from "../../../models/Product";
import { MyRootState, Services } from "../../../reducers/configureStore";

interface IProps {
    categoryList: Category[];
    productHistoryList: Product[];
    getCategoryList: () => void;
    getProductList: () => void;
}

interface IState {
    categoryId: number | undefined;
}

export interface ProductExtended {
    id: number;
    desc: string;
    category: string | undefined;
    value: number;
}

class PurchaseHistory extends React.Component<IProps, IState> {
    state: IState = {
        categoryId: undefined
    };

    componentDidMount() {
        this.props.getCategoryList();
        this.props.getProductList();
    }
    
    onSelectChange = (id: number | undefined) => {
        this.setState({
            categoryId: id
        });
    };

    convertedProducts: () => ProductExtended[] = () => {
        let filteredProduct: Product[];
        if (this.state.categoryId) {
            filteredProduct = this.props.productHistoryList.filter(x => x.categoryId === this.state.categoryId);
        } else {
            filteredProduct = this.props.productHistoryList;
        }

        return filteredProduct.map(x => {
            const category = this.props.categoryList.find(cat => cat.id === x.categoryId)?.name;
            return {
                id: x.id,
                desc: x.desc,
                category: category,
                value: x.value
            };
        });
    };

    render() {        
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

function mapStateToProps(state: MyRootState) {
    return {
        categoryList: state.categoryReducer.categoryList,
        productHistoryList: state.historyReducer.historyList,
    }
}

function mapDispatchToProps(dispatch: ThunkDispatch<MyRootState, Services, AnyAction>) {
    return {
        getCategoryList: () => dispatch(GetCategoryList()),
        getProductList: () => dispatch(GetHistoryList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseHistory);