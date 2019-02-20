import React ,{Component} from 'react';

class NewComment extends Component{

    state = {
        comment : ""
    }
    AddComment = (event) =>{
      this.setState(({comment : event.target.value}))
    }
    SubmitComment = (event) =>{
        event.preventDefault();
        this.props.HandleComment([this.state.comment, Date().toString()], this.props.id)
        this.setState({comment : ""})
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

export default NewComment;
