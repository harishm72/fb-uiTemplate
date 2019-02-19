import React, { Component } from 'react';

class LikeButton extends Component{

    render(){
        let {isLiked, id} = this.props 
        let isLikedRenderText = isLiked ? "UnLike" : "Like";
        // let {id} = this.props
        return(
            <div>
                <p>{this.props.likes} Likes</p>
                <button className="like-button" onClick={() => this.props.HandleLike(id)}>{isLikedRenderText}</button>
            </div>
        )
    }
}

export default LikeButton;