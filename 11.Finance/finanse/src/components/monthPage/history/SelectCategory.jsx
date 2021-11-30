import React from 'react';
import Select from 'react-select';

const SelectCategory = (props) => {
    const options = [
        { value: null, label: 'Wybierz' },
        ...props.categoryList.map(cat => { return { value: cat.id, label: cat.name }})
    ];

    let value = null;
    const category = props.categoryList.find(x => x.id === props.categoryId);
    if (category) {
        value = { value: category.id, label: category.name };
    }

    return (
        <div className="selectCategory">
            <Select options={options} value={value} onChange={(e) => props.onSelectedCategory(e.value)} />
        </div>
    );
}

export default SelectCategory;