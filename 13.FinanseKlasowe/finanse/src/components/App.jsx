import React from "react";
import MonthPage from "./monthPage/MonthPage";
import { Provider } from 'react-redux'
import configureStore from "../reducers/configureStore";

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
        console.log(this.state.languge);
        return (
            <LanguageContext.Provider value={this.languageContextValue}>
                <Provider store={this.store}>
                    <MonthPage />
                </Provider>
            </LanguageContext.Provider>   
        );
    } 
}

export const LanguageContext = React.createContext();

export default App;