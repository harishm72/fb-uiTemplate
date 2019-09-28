import React, { useState } from "react";

const NewComment = props => {
  const [comment, setComment] = useState("");

  const submitComment = event => {
    event.preventDefault();
    props.HandleComment([comment, new Date().toUTCString()], props.id);
    setComment("");
  };

  return (
    <form className="new-comment" onSubmit={submitComment}>
      <input
        className="comment-input"
        value={comment}
        onChange={event => {
          setComment(event.target.value);
        }}
        placeholder="type a comment here...."
      />
    </form>
  );
};

export default NewComment;
