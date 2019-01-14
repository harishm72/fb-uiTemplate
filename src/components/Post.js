import React, { Component } from 'react';
import '../App.css';
import LikeButton from './LikeButton';
import CommentComponent from './CommentComponent';

class Post extends Component{
    render(){
        let posts = this.props.post
        return(
            <div>
                {posts.map((post, index) => {
                    return <div className="post" key={index}>{JSON.stringify(post["item_description"])}
                           <LikeButton likes={post.likes} />
                           <CommentComponent comments={(post['comments'])}/>
                            </div>
                    })
                } 
            </div>
        )
    }
}
export default Post;