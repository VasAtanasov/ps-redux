import * as types from '../actions/actionTypes';

const courseReducer = (state = [], action) => {
    const { type } = action;

    const reducer = {
        [types.CREATE_COURSE]: [...state, { ...action.course }]
    };

    return reducer[type] || state;
};

export default courseReducer;
