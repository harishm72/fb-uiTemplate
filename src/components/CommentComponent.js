import React, { Component } from 'react';

import Comment from './Comment';
import NewComment from './NewComment';
//import '../styles/App.css';

class CommentComponent extends Component{
    render(){
        let comments = this.props.comments
        
        return(
            <div>
                <h3>Comments..</h3>
                {
                    comments.map((comment, index) => {
                    return <Comment comment={comment} key={index}/>
                    })
                }
                <NewComment  id ={this.props.id}/>
            </div>
        )
    }
}
export default CommentComponent;