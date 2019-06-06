import React from 'react';
import '../styles/App.css';
import Post from './Post';

const NewsFeed = ({ feed, HandleLike, HandleComment }) => {
    return (
        <div>
            {feed.map(post => <Post  key={post.id} id={post.id} post={post} HandleLike={HandleLike} HandleComment={HandleComment} />)}
        </div>
    )}

export default NewsFeed;