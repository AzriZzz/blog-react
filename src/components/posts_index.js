import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, FETCH_POSTS } from '../actions';


class PostsIndex extends Component{
    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        return(
        <div>
            Posts Index
        </div>
        );
    }
}

// { fetchPosts: fetchPosts } == { fetchPosts } es6 command
export default connect( null, {fetchPosts} )(PostsIndex); 
