import React from 'react';

const Comment = ({ comment, index }) => {
    return (
        <div key={index} className="comment">
            <p>{comment['comment']}</p>
            <p className="comment-time">Created at : {comment['created_at']}</p>
        </div>
    )
}
export default Comment;