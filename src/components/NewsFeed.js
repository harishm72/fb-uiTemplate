import React, { Component } from 'react';
//import '../styles/App.css';
import Post from './Post';

class NewsFeed extends Component{
    render(){
        let posts = this.props.feed
        return(
            <div>
                {posts.map((post) => {
                    return <Post key={post.id} post={post}  />
                    })
                } 
            </div>
        )
    }
}
export default NewsFeed;