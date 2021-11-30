import React, { useContext } from "react";
import { LanguageContext } from "../App";

class Settings extends React.Component {
    render() {
        return (
            <LanguageContext>
                {value => (
                    <>
                        Wybierz walutę
                        <select onChange={(e) => value.setLanguage(e.target.value)}>
                            <option value="PL">Złoty</option>
                            <option value="EU">Euro</option>
                        </select>
                    </>)
                }
            </LanguageContext>
        )
    }
};

export default Settings;