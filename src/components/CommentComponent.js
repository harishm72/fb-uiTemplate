import React, { Component } from 'react';

import Comment from './Comment';
import NewComment from './Newcomment';
import '../App.css';

class CommentComponent extends Component{
    render(){
        let comments = this.props.comments
        return(
            <div>
                <h3>Comments..</h3>
                {
                    comments.map((comment, index) =>
                    <Comment comment={comment} index={index}/>
                    )
                }
                <NewComment />
            </div>
        )
    }
}
export default CommentComponent;