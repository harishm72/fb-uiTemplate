import React ,{Component} from 'react';
import { connect } from 'react-redux';
import { addComment } from '../store/actions';

class NewComment extends Component{

    state = {
        comment : ""
    }
    AddComment = (event) =>{
        let ChangedComment = event.target.value
      this.setState(prev => ({comment : ChangedComment}))
    }
    SubmitComment = (event) =>{
        let date = new Date();
        event.preventDefault();
        
        if(this.state.comment){
        this.props.addComment([this.state.comment, date.toString()], this.props.id)
        this.setState({comment : ""})
        }
    }
    render(){
        
        return(
            <div className="new-comment">
                <form onSubmit={this.SubmitComment}>
                <input className="comment-input" value={this.state.comment} onChange={this.AddComment} placeholder="type a comment here...."></input>
                </ form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    data: state.posts
  })
  const mapDispatchToProps = dispatch => ({
    addComment: (newComment, id) => dispatch(addComment(newComment, id)),
  })
  export default connect(mapStateToProps, mapDispatchToProps)(NewComment);
