import Product from "../models/Product";
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { MyRootState, Services } from "../reducers/configureStore";

export const GET_HISTORY_LIST = 'GET_HISTORY_LIST';
export const ADD_PURCHASE = 'ADD_PURCHASE';
export const REMOVE_PURCHASE = 'REMOVE_PURCHASE';

interface GetActionType {
    type: 'GET_HISTORY_LIST';
    historyList: Product[];
}

interface AddActionType {
    type: 'ADD_PURCHASE';
    purchase: Product;
}

interface RemoveActionType {
    type: 'REMOVE_PURCHASE';
    id: number;
}

export type ActionType = GetActionType | AddActionType | RemoveActionType;

export function GetHistoryListActionResult(historyList: Product[]): GetActionType {
    return {
        type: GET_HISTORY_LIST,
        historyList: historyList
    }
}

export function AddPurchase(purchase: Product): AddActionType {
    return {
        type: ADD_PURCHASE,
        purchase: purchase,
    };
}

export function RemovePurchase(id: number): RemoveActionType {
    return {
        type: REMOVE_PURCHASE,
        id: id,
    }
}

export function GetHistoryList(): (dispatch: ThunkDispatch<MyRootState, Services, AnyAction>, getState: () => MyRootState, services: Services) => void {
    return (dispatch: ThunkDispatch<MyRootState, Services, AnyAction>, getState: () => MyRootState, services: Services): void => {
        services
            .historyService
            .getAllProducts()
            .then(x => dispatch(GetHistoryListActionResult(x)));
    }
}