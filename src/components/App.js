import React, { useState, useEffect } from "react";

import Header from "./Header";
import NewsFeed from "./NewsFeed";
import "../styles/App.css";

const App = () => {
  const [option, setOption] = useState("imageAndText");

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../data/NewsFeedData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(feedData => setData([...feedData]));
  }, [])

  const HandleLike = id => {
    setData([
      ...data.map(post => {
        if (post.id === id) {
          let newPost = { ...post };
          newPost.isLiked = !newPost.isLiked;
          newPost.likes = newPost.isLiked
            ? newPost.likes + 1
            : newPost.likes - 1;
          return newPost;
        }
        return post;
      })
    ]);
  };

  const HandleComment = (newComment, id) => {
    setData([
      ...data.map(post => {
        if (post.id === id) {
          post.comments.push({
            comment: newComment[0],
            created_at: newComment[1]
          });
        }
        return post;
      })
    ]);
  };

  let feedItems = [];
  console.log(option)
  switch (option) {
    case "image":
      feedItems = [...data.filter(post => post["image"])];
      break;

    case "text":
      feedItems = [...data.filter(post => !post["image"])];
      break;

    case "none":
      feedItems = [];
      break;

    default:
      feedItems = [...data];
      break;
  }

  return (
    <div>
      <div className="app-header">
        <Header />
      </div>

      <div className="app">
        <label>
          Select-type
          <select
            value={option}
            onChange={event => {
              setOption(event.target.value);
            }}
            className="post-type"
          >
            <option value="text">Text Only</option>
            <option value="image">Image Only</option>
            <option value="imageAndText">Image and Text</option>
            <option value="none">No items</option>
          </select>
        </label>
        <NewsFeed
          feed={feedItems}
          HandleLike={HandleLike}
          HandleComment={HandleComment}
        />
      </div>
    </div>
  );
};

export default App;
