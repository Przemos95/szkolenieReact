import React from "react";
import MonthPage from "./monthPage/MonthPage";
import { Provider } from 'react-redux'
import configureStore from "../reducers/configureStore";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from "./mainPage/MainPage";
import ProductListComponent from "./products/productList/ProductListComponent";

class App extends React.Component {
    state = {
        languge: 'PL'
    };

    setLanguage = (lang) => {
        this.setState({languge: lang});
    }
    
    languageContextValue = {
        languge: () => this.state.languge,
        setLanguage: this.setLanguage
    }

    store = configureStore();

    render() {
        return (
            <LanguageContext.Provider value={this.languageContextValue}>
                <Provider store={this.store}>
                    <BrowserRouter>
                        <Routes>
                            <Route path={LINKS.HOME} element={<MainPage />} />
                            <Route path={LINKS.MAIN} element={<MainPage/>} />
                            <Route path={LINKS.MONTH} element={<MonthPage/>} />
                            <Route path={LINKS.MONTH + '/:id'} element={<MonthPage />} />
                        </Routes>
                    </BrowserRouter>
                </Provider>
                <ProductListComponent />
            </LanguageContext.Provider>
        );
    } 
}

export const LanguageContext = React.createContext();

TDD

export default App;

export const LINKS = {
    HOME: '/',
    MAIN: '/main',
    MONTH: '/month'
}