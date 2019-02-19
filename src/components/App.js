import React, { Component } from 'react';
import Header from './Header';
import NewsFeed from './NewsFeed';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      title : "facebook",
      OptionSelected : "imageAndText",
      data: []
    }
  }

  componentDidMount(){
    this.setState({data : [
      {
      "id" : 1,
      "isLiked" : false,
      "item_description": "Declare variables not wars!!",
      "image": "",
      "likes": 10,
      "comments": [{
          "comment": "Well said, i agree.",
          "created_at": "Fri May 11 2018 19:17:43 GMT+0530 (IST)"
        },
        {
          "comment": "Good one!",
          "created_at": "Fri May 10 2018 15:23:36 GMT+0530 (IST)"
        }
      ]
    },
    {
      "id": 2,
      "isLiked" : false,
      "item_description": "This is an item with an image",
      "image": "./images/post1.jpg",
      "likes": 20,
      "comments": [{
          "comment": "Spectacular view",
          "created_at": "Fri May 11 2018 19:17:43 GMT+0530 (IST)"
        },
        {
          "comment": "Vacation...?",
          "created_at": "Fri May 10 2018 15:23:36 GMT+0530 (IST)"
        }
      ]
    }
  ] })
  }
  ModifyContent = (event) => {
    let value = event.target.value 
    this.setState({ OptionSelected : value })
  }
  HandleLike = (id) => {
    this.setState({
      data: this.state.data.map(post => {
        if (post.id === id) {
          let newPost = {...post}
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
        switch(option){
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

    if(feedItems){
    return (
      <div>
        <div className="app-header">
        <Header title={this.state.title}/>
        </div>
     
      <div className="app">
      <label>
        Select-type
        <select defaultValue="imageAndText"  onChange={this.ModifyContent} className="post-type">
          <option value="text" >Text Only</option>
          <option value = "image" >Image Only</option>
          <option  value ="imageAndText" >Image and Text</option>
          <option value="none" >No items</option>
        </select>
        </label>
        <NewsFeed feed={feedItems} HandleLike={this.HandleLike} HandleComment={this.HandleComment}/>
      </div>
      </div>
    );
    }
    else return(<p>loading....</p>)
  }
  
}



export default App;
