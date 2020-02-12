import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
    const { type } = action;

    const reducer = {
        [types.LOAD_AUTHORS_SUCCESS]: action.authors
    };

    return reducer[type] || state;
}
