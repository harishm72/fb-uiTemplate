import React, { Component } from 'react';
import '../styles/App.css';

class LikeButton extends Component{

    render(){
        let {isLiked} = this.props 
        isLiked = isLiked ? "UnLike" : "Like";
        let {id} = this.props
        return(
            <div>
                {this.props.likes} Likes
                <button className="like-button" onClick={() => this.props.HandleLike(id)}>{isLiked}</button>
            </div>
        )
    }
}

export default LikeButton;