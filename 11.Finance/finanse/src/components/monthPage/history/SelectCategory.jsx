const SelectCategory = (props) => {

    return (
        <select
        //value={props.categoryId}
        onChange={(e) => props.onSelectedCategory(e)}>
            <option value={null}>Wybierz</option>
            
            {props.categoryList.map(cat => 
                <option value={cat.id}>{cat.name}</option>
            )}
        </select>
    );
}

export default SelectCategory;