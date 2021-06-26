import { combineReducers } from 'redux';

import posts from './posts';
import cart from './cart';
import filter from './filter';

export default combineReducers({
    posts,
    cart,
    filter,
});