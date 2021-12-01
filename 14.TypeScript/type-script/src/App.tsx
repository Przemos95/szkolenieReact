import React from "react";
import MonthPage from "./components/monthPage/MonthPage";
import { Provider } from 'react-redux'
import configureStore from "./reducers/configureStore";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from "./components/mainPage/MainPage";

interface LanguageContextInterface {
    languge: () => string;
    setLanguage: (lang: string) => void;
}

class App extends React.Component {
    state = {
        languge: 'PL'
    };

    setLanguage = (lang: string): void => {
        this.setState({languge: lang});
    }
    
    languageContextValue: LanguageContextInterface = {
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
            </LanguageContext.Provider>
        );
    } 
}

export const LanguageContext = React.createContext<LanguageContextInterface | null>(null);

export default App;

export const LINKS = {
    HOME: '/',
    MAIN: '/main',
    MONTH: '/month'
}