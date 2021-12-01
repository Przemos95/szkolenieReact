import React from 'react';
import Select from 'react-select';
import Category from '../../../models/Category';

interface IProps {
    categoryList: Category[];
    categoryId: number | undefined;
    onSelectedCategory: (e: number | undefined) => void;
}

interface IState {}

interface Option {
    value: number;
    label: string;
}

class SelectCategory extends React.Component<IProps, IState> {
    getOptions = () => [
        { value: 0, label: 'Wybierz' },
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
            <Select options={this.getOptions()} value={this.getValue()} onChange={(option: Option | null) => this.props.onSelectedCategory(option?.value)} />
        </div>
    );
    }
}

export default SelectCategory;