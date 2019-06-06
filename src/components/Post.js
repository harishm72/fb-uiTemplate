import React from 'react';
import LikeButton from './LikeButton';
import CommentComponent from './CommentComponent';

const Post = ({ post, id, HandleComment, HandleLike }) => {
    return (
        <div className="post-item">
            <p>{JSON.stringify(post["item_description"])}</p>
            {post['image'] ? <img src={post['image']} alt="" /> : null}
            <LikeButton likes={post.likes} isLiked={post.isLiked} HandleLike={HandleLike} id={id} />
            <CommentComponent comments={(post['comments'])} HandleComment={HandleComment} id={id} />
        </div>
    )
}

export default Post;