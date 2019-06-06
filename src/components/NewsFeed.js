import React, { Component } from 'react';
import '../styles/App.css';
import Post from './Post';

const NewsFeed = ({ feed, HandleLike, HandleComment }) => {
    return (
        <div>
            {feed.map(post => <Post post={post} HandleLike={HandleLike} HandleComment={HandleComment} />)}
        </div>
    )}

export default NewsFeed;