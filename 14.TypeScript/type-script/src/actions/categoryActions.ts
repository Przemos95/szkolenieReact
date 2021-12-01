import Category from "../models/Category";
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { MyRootState, Services } from "../reducers/configureStore";

export const GET_CATEGORY_LIST = 'GET_CATEGORY_LIST';

export interface ActionType {
    type: string,
    payload: Category[]
}

export function GetCategoryList(): (dispatch: ThunkDispatch<MyRootState, Services, AnyAction>, getState: () => MyRootState, services: Services) => void {
    return (dispatch: ThunkDispatch<MyRootState, Services, AnyAction>, getState: () => MyRootState, services: Services): void => {
        services
            .categoryService
            .getAllCategories()
            .then(x => dispatch(GetCategoryListActionResult(x)));
    }
}

export function GetCategoryListActionResult(categoryList: Category[]): ActionType {
    return {
        type: GET_CATEGORY_LIST,
        payload: categoryList
    };
};
