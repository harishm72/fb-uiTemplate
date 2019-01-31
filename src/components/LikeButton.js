import React, { Component } from 'react';
import '../styles/App.css';

class LikeButton extends Component{

    render(){
        let {isLiked, id} = this.props 
        let isLikedRenderText = isLiked ? "UnLike" : "Like";
        // let {id} = this.props
        return(
            <div>
                {this.props.likes} Likes
                <button className="like-button" onClick={() => this.props.HandleLike(id)}>{isLikedRenderText}</button>
            </div>
        )
    }
}

export default LikeButton;