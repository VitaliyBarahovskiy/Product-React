import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postsActions from '../actions/posts';
import App from '../components/App';
import orderBy from 'lodash/orderBy';


const sortBy = (posts, filterBy) => {
    switch (filterBy) {
        case 'price_high':
            return orderBy(posts, 'price', 'desc');
        case 'price_low':
            return orderBy(posts, 'price', 'asc');
        case 'author':
            return orderBy(posts, 'author', 'asc');
        default:
            return posts;
    }
};

const filterPosts = (posts, searchQuery) =>
    posts.filter(
        o =>
            o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
    );

const searchPosts = (posts, filterBy, searchQuery) => {
    return sortBy(filterPosts(posts, searchQuery), filterBy);
};

const mapStateToProps = ({ posts, filter }) => ({
    posts: posts.items && searchPosts(posts.items, filter.filterBy, filter.searchQuery),
    isReady: posts.isReady,
});


const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(postsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);