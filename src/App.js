import React, { Component } from 'react';
import './App.css';
import Post from './components/Post';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      OptionSelected : "imageAndText",
      data: [{
        "item_description": "This is a text only item",
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
        "item_description": "This is an item with an image",
        "image": "/path/to/image.png",
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
    ]
    }
  }

  ModifyContent = (event) => {
    let value = event.target.value 
    this.setState(prev => ({
      OptionSelected : value
    }))
  }
  render() {
    let option = this.state.OptionSelected
        let posts = [];
        switch(option){
            case "image":
            posts = this.state.data.filter(post => post['image'])
            break;

            case "text":
            posts = this.state.data.filter(post => !post['image']);
            break;

            case "none":
            posts = [];
            break;

            default:
            posts = this.state.data
            break;
        }

    return (
      <div className="App">
      <label>
        Select-type
        <select defaultValue="imageAndText"  onChange={this.ModifyContent} className="post-type">
          <option value="text" >Text Only</option>
          <option value = "image" >Image Only</option>
          <option  value ="imageAndText" >Image and Text</option>
          <option value="none" >No items</option>
        </select>
        </label>
        <Post post={posts}/>
      </div>
    );
  }
}
export default App;
