import React from 'react';

class MainPage extends React.Component {
    render() {
        return (
            <>
                Wybierz miesiąc:
                <button>
                    Listopad 2021
                </button>
                <button>
                    Październik 2021
                </button>
                <button>
                    Wrzesień 2021
                </button>
            </>
        )
    }
}

export default MainPage;