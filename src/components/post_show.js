import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostsShow extends Component{
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchPosts(id);
    }

    render(){
        // posts[this.props.params.id]; //the post we want to show
        return(
            <div>
                Post Show
            </div>
        );
    };
}

function mapToStateProps ( {posts}, ownProps){
    // return {posts};
    return { post: posts[ownProps.match.params.id] };
}

export default connect (mapToStateProps, {fetchPosts})(PostsShow);