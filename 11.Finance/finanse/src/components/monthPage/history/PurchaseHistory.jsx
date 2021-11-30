import { useEffect, useMemo, useState, } from "react";
import CategoryService from "../../../service/CategoryService";
import HistoryService from "../../../service/HistoryService";
import SelectCategory from "./SelectCategory";
import PurchaseItem from './PurchaseItem';
import './purchaseHistory.css';
import AddPurchase from "./AddPurchase";

const PurchaseHistory = (props) => {
    const [categoryList, setCategoryList] = useState([]);
    const [categoryId, setCategoryId] = useState(null);
    const [productHistoryList, setProductHistoryList] = useState([]);
    const [selectedProductHistoryList, setSelectedProductHistoryList] = useState([]);

    useEffect(() => {
        console.log('Use effect');
        getCategories();
        getProductHistory();
    }, []);

    useEffect(() => {
        if (categoryId) {
            const filteredProduct = productHistoryList.filter(x => x.categoryId === categoryId);
            setSelectedProductHistoryList(filteredProduct);
        } else {
            setSelectedProductHistoryList(productHistoryList);
        }
    }, [categoryId, productHistoryList]);

    const getCategories = () => {
        const service = new CategoryService();
        service.getAllCategories()
            .then(res => setCategoryList(res));
    }

    const getProductHistory = () => {
        const service = new HistoryService();
        service.getAllProducts()
            .then(res => {
                setProductHistoryList(res);
                setSelectedProductHistoryList(res);
            });
    }

    const onSelectChange = (e) => {
        setCategoryId(e);
    };

    const convertedProducts = useMemo(() => selectedProductHistoryList.map(x => {
        x.category = categoryList.find(cat => cat.id === x.categoryId)?.name;
        return x;
    }), [selectedProductHistoryList, categoryList]);

    return(
        <>
            <div className="purchaseItemMenu">
                <SelectCategory
                    categoryList={categoryList}
                    onSelectedCategory={onSelectChange}
                    categoryId={categoryId}
                />
                <AddPurchase
                    categoryList={categoryList}
                />
            </div>

            {convertedProducts.map(x => (<PurchaseItem key={x.id} item={x} />))}
        </>
    )
}

export default PurchaseHistory;