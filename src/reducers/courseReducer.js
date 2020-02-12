import * as types from '../actions/actionTypes';
import initialState from './initialState';

const courseReducer = (state = initialState.courses, action) => {
    const { type } = action;

    const reducer = {
        [types.CREATE_COURSE]: [...state, { ...action.course }],
        [type.LOAD_COURSES_SUCCESS]: action.courses
    };

    return reducer[type] || state;
};

export default courseReducer;
