import React from 'react';
import '../App.css';

const Comment = ({comment, index }) => {
        return(
            <div key={index} className="comment">
                <p>{comment['comment']}</p>
                <p>{comment['created_at']}</p>
            </div>
        )
    }

export default Comment;