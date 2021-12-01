export const GET_CATEGORY_LIST = 'GET_CATEGORY_LIST';

export function GetCategoryListActionResult(categoryList) {
    return {
        type: GET_CATEGORY_LIST,
        payload: categoryList
    };
};

export function GetCategoryList() {
    return (dispatch, getState, services) => {
        services
            .categoryService
            .getAllCategories()
            .then(x => dispatch(GetCategoryListActionResult(x)));
    }
}