import React from "react";
import MonthPage from "./monthPage/MonthPage";

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
                <MonthPage />
            </LanguageContext.Provider>   
        );
    } 
}

export const LanguageContext = React.createContext();

export default App;