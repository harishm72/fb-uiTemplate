import React, { Component } from 'react';

class NewComment extends Component {

    state = {
        comment: ""
    }
    AddComment = (event) => {
        let ChangedComment = event.target.value
        this.setState({ comment: ChangedComment })
    }
    SubmitComment = (event) => {
        let date = new Date();

        event.preventDefault();
        this.props.HandleComment([this.state.comment, date.toString()], this.props.id)
        this.setState({ comment: "" })
    }
    render() {
        return (
            <div className="new-comment">
                <form onSubmit={this.SubmitComment}>
                    <input className="comment-input" value={this.state.comment} onChange={this.AddComment} placeholder="type a comment here...."></input>
                </ form>
            </div>
        )
    }
}

export default NewComment;
