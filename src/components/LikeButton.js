import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';
import { toggleLike} from '../actions/index';
class LikeButton extends Component{

    render(){
        let {isLiked} = this.props 
        isLiked = isLiked ? "UnLike" : "Like";
        let {id} = this.props
        return(
            <div>
                {this.props.likes} Likes
                <button className="like-button" onClick={() => this.props.toggleLike(id)}>{isLiked}</button>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    data: state.posts
  })
const mapDispatchToProps = dispatch => ({
    toggleLike: id => dispatch(toggleLike(id))
  })
export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);