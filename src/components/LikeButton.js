import React, { Component } from 'react';
import '../App.css';

class LikeButton extends Component{

    constructor(props){
        super(props)

        this.state ={
            isLiked : false
        }
    }
    liked = (event) =>{
        this.setState(prev => ({isLiked : !prev.isLiked}))
    }
    render(){
        let like = this.state.isLiked ? "Liked" : "Like"
        return(
            <div>
                {this.props.likes} Likes
                <button className="like-button" onClick={this.liked}>{like}</button>
            </div>
        )
    }
}

export default LikeButton;