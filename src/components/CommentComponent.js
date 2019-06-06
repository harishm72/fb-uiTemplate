import React from 'react';

import Comment from './Comment';
import NewComment from './NewComment';

const CommentComponent = ({ comments, id, HandleComment }) => (
    <div>
        <h3>Comments..</h3>
        {comments.map((comment, index) => <Comment comment={comment} key={index} />)}
        <NewComment HandleComment={HandleComment} id={id} />
    </div>
)

export default CommentComponent;