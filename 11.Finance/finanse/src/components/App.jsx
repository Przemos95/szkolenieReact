import React, { useContext, useState } from "react";
import PurchaseHistory from "./monthPage/history/PurchaseHistory";
import Settings from "./settings/Settings";

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

    render() {
        console.log(this.state.languge);
        return (
            <LanguageContext.Provider value={this.languageContextValue}>
                <Settings />
                <PurchaseHistory />
            </LanguageContext.Provider>   
        );
    } 
}

export const LanguageContext = React.createContext();

export default App;