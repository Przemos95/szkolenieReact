import React from 'react';
import { Link } from 'react-router-dom';
import { LINKS } from '../App';

class MainPage extends React.Component {
    render() {
        return (
            <>
                Wybierz miesiąc:
                <Link to={LINKS.MONTH + '/11'}>
                    Listopad 2021
                </Link>
                <Link to={LINKS.MONTH + '/10'}>
                    Październik 2021
                </Link>
                <Link to={LINKS.MONTH + '/9'}>
                    Wrzesień 2021
                </Link>
            </>
        )
    }
}

export default MainPage;