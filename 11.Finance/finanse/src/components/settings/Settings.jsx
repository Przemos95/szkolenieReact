import { useContext } from "react";
import { LanguageContext } from "../App";

const Settings = () => {
    const langContext = useContext(LanguageContext);


    return (
        <div>
            Wybierz walutę
            <select onChange={(e) => langContext.setLanguage(e.target.value)}>
                <option value="PL">Złoty</option>
                <option value="EU">Euro</option>
            </select>
        </div>
    )
};

export default Settings;