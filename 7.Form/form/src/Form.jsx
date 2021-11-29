import React from 'react';

class Form extends React.Component {
    state = {
        name: 'Jan',
        surname: ''
    };

    handleChange(key, value) {
        this.setState({[key]: value});
    }

    handleSave = () => {
        console.log(this.state);
    }

    constructor(props) {
        super(props);

        // this.handleSave = this.handleSave.bind(this);
    }

    render() {
        return (
            <div>
                Podaj dane:
                <form>
                    <label>
                        Imie:
                        <input type="text" value={this.state.name} onChange={(e) => this.handleChange('name', e.target.value)} />
                    </label>

                    <label>
                        Nazwisko
                        <input type="text" value={this.state.surname} onChange={(e) => this.handleChange('surname', e.target.value)} />
                    </label>

                    <button type="button" onClick={this.handleSave}>
                        Zapisz
                    </button>
                </form>
            </div>
        )
    }
}

export default Form;