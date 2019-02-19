import React, { Component } from 'react';

import Comment from './Comment';
import NewComment from './NewComment';

class CommentComponent extends Component{
    render(){
        let comments = this.props.comments
        
        return(
            <div>
                <h3>Comments..</h3>
                {
                    comments.map((comment, index) =>
                    <Comment key={index} comment={comment}/>
                    )
                }
                <NewComment HandleComment={this.props.HandleComment} id ={this.props.id}/>
            </div>
        )
    }
}
export default CommentComponent;