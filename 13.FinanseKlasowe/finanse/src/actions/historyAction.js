export const GET_HISTORY_LIST = 'GET_HISTORY_LIST';
export const ADD_PURCHASE = 'ADD_PURCHASE';
export const REMOVE_PURCHASE = 'REMOVE_PURCHASE';


export function GetHistoryListActionResult(historyList) {
    return {
        type: GET_HISTORY_LIST,
        payload: historyList
    }
}

export function AddPurchase(purchase) {
    return {
        type: ADD_PURCHASE,
        payload: purchase,
    };
}

export function RemovePurchase(id) {
    return {
        type: REMOVE_PURCHASE,
        payload: id,
    }
}

export function GetHistoryList() {
    return (dispatch, getState, services) => {
        services
            .historyService
            .getAllProducts()
            .then(x => dispatch(GetHistoryListActionResult(x)));
    }
}