import { useContext, useEffect, useMemo, useRef, useState, } from "react";
import CategoryService from "../../../service/CategoryService";
import HistoryService from "../../../service/HistoryService";
import { LanguageContext } from "../../App";
import SelectCategory from "./SelectCategory";

const PurchaseHistory = (props) => {
    const [categoryList, setCategoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(null);
    const [productHistoryList, setProductHistoryList] = useState([]);
    const [selectedProductHistoryList, setSelectedProductHistoryList] = useState([]);
    const languageContext = useContext(LanguageContext);

    useEffect(() => {
        console.log('Use effect');
        getCategories();
        getProductHistory();
    }, []);

    useEffect(() => {
        console.log('Filtruje produkty', categoryId);
        if (categoryId) {
            const filteredProduct = productHistoryList.filter(x => x.categoryId === categoryId);
            console.log(productHistoryList, filteredProduct, categoryId);
            setSelectedProductHistoryList(filteredProduct);
        } else {
            setSelectedProductHistoryList(productHistoryList);
        }
    }, [categoryId, productHistoryList]);

    const getCategories = () => {
        const service = new CategoryService();
        service.getAllCategories()
            .then(res => setCategoryList(res))
            .finally(() => setIsLoading(false));
    }

    const getProductHistory = () => {
        const service = new HistoryService();
        service.getAllProducts()
            .then(res => {
                setProductHistoryList(res);
                setSelectedProductHistoryList(res);
            });
    }

    // const buttonRef = useRef(null);
    // const changeButton = () => {
    //     console.log('change button');
    //     buttonRef.current.title = 'kliknij';
    //     buttonRef.current.onclick = () => console.log('Hello');
    // };

    console.log('Wywołanie funckji');
    const onSelectChange = (e) => {
        setCategoryId(e.target.value ? Number.parseInt(e.target.value) : null);
    };

    const convertedProducts = useMemo(() => selectedProductHistoryList.map(x => {
        console.log('Wywołanie');
        x.value = x.value / (languageContext.languge() === "PL" ? 1 : 4.5);
        return x;
    }), [selectedProductHistoryList, languageContext.languge()]);

    const onChangeHandler = useCallback((isAdmin) => {
        return (e) => { isAdmin ? console.log(e.target.value) : null; };
    }, [isAdmin]);

    return(
        <>
            <SelectCategory
                categoryList={categoryList}
                onSelectedCategory={onSelectChange}
                categoryId={categoryId}
            />
            {
                convertedProducts.map(x => (
                    <div key={x.id}>
                        {x.desc} {x.categoryId} {x.value}
                    </div>
                ))
            }
            {languageContext.languge()}
            
            <button onClick={() => setIsLoading(true)}>Zmiana ładowania</button>
            {/* <button ref={buttonRef} onClick={changeButton}>
                Przycisk
            </button> */}
        </>
    )
}

export default PurchaseHistory;