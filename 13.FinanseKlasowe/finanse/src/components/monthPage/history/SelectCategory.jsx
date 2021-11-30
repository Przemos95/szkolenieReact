import React from 'react';
import Select from 'react-select';

class SelectCategory extends React.Component {
    getOptions = () => [
        { value: null, label: 'Wybierz' },
        ...this.props.categoryList.map(cat => { return { value: cat.id, label: cat.name }})
    ];

    getValue = () => {
        const category = this.props.categoryList.find(x => x.id === this.props.categoryId);
        if (category) {
            return { value: category.id, label: category.name };
        } else {
            return null;
        }
    }

    render() {
    return (
        <div className="selectCategory">
            <Select options={this.getOptions()} value={this.getValue()} onChange={(e) => this.props.onSelectedCategory(e.value)} />
        </div>
    );
    }
}

export default SelectCategory;