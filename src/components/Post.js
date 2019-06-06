import React from 'react';
import LikeButton from './LikeButton';
import CommentComponent from './CommentComponent';

const Post = ({ post }) => (
    <div className="post-item">
        <p>{JSON.stringify(post["item_description"])}</p>
        {post['image'] ? <img src={post['image']} alt="" /> : null}
        <LikeButton likes={post.likes} isLiked={post.isLiked} id={post.id} />
        <CommentComponent comments={(post['comments'])} id={post.id} />
    </div>
)

export default Post;