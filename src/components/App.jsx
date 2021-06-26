import React, { Component } from 'react';
import {Card, Container} from 'semantic-ui-react';
import axios from 'axios';
import PostCard from '../containers/PostCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';



class App extends Component {


    componentWillMount() {
        const { setPosts } = this.props;
        axios.get('/posts.json').then(({ data }) => {
            setPosts(data);
        });
    }


    render() {
        const { posts, isReady } = this.props;
        return (
            <Container>
                <Menu />
                <Filter  />
                <Card.Group itemsPerRow={4}>
                    {!isReady
                        ? 'Загрузка...'
                        : posts.map((post, i) => <PostCard key={i} {...post} />)}
                </Card.Group>

            </Container>
        );
    }
}

export default App;
