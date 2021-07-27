import {FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_FAILED} from "../../../constants/ActionTypes";

//this is the initial state which is the redux states called.
const initialState = {
    loading: false,
    error: null,
    list: [],
    total: 0,
    count: 0,
    limit: 0,
    offset: 0
};

//this is the list reducer.
const ListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                list: action.payload.results,
                total: action.payload.total,
                count: action.payload.count,
                limit: action.payload.limit,
                offset: action.payload.offset
            };
        case FETCH_LIST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default ListReducer;