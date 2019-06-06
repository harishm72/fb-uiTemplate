import React, { Component } from 'react';

import Header from './Header';
import NewsFeed from './NewsFeed';
import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "facebook",
      OptionSelected: "imageAndText",
      data: []
    }
    this.getData()
  }

  getData = () => {
    fetch('../data/NewsFeedData.json',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then((res) => res.json())
      .then(feedData => this.setState({ data: [...this.state.data, ...feedData] }))
  }
  ModifyContent = (event) => {
    let value = event.target.value
    this.setState({ OptionSelected: value })
  }
  HandleLike = (id) => {
    this.setState({
      data: this.state.data.map(post => {
        if (post.id === id) {
          let newPost = { ...post }
          newPost.isLiked = !newPost.isLiked;
          newPost.likes = newPost.isLiked ? newPost.likes + 1 : newPost.likes - 1
          return newPost;
        }
        return post;
      })
    })
  }

  HandleComment = (newComment, id) => {
    this.setState({
      data: this.state.data.map(post => {
        if (post.id === id) {
          post.comments.push({
            "comment": newComment[0],
            'created_at': newComment[1]
          })
        }
        return post
      })
    })
  }

  render() {
    let option = this.state.OptionSelected
    let feedItems = [];
    switch (option) {
      case "image":
        feedItems = this.state.data.filter(post => post['image'])
        break;

      case "text":
        feedItems = this.state.data.filter(post => !post['image']);
        break;

      case "none":
        feedItems = [];
        break;

      default:
        feedItems = this.state.data
        break;
    }

    return (
      <div>
        <div className="app-header">
          <Header title={this.state.title} />
        </div>

        <div className="app">
          <label>
            Select-type
        <select defaultValue="imageAndText" onChange={this.ModifyContent} className="post-type">
              <option value="text" >Text Only</option>
              <option value="image" >Image Only</option>
              <option value="imageAndText" >Image and Text</option>
              <option value="none" >No items</option>
            </select>
          </label>
          <NewsFeed feed={feedItems} HandleLike={this.HandleLike} HandleComment={this.HandleComment} />
        </div>
      </div>
    );
  }

}



export default App;
