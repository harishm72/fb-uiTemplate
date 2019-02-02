import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import Header from './Header';
import NewsFeed from './NewsFeed';
import { addComment, toggleLike, toggleOption, fetchPosts} from '../actions/index';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "facebook",
      data: this.props.data
    }
  }
  componentDidMount(){
    this.props.fetchPosts()
  }
  ModifyContent = (event) => {
    let modified = this.props.toggleOption(this.props.data, event.target.value)
    this.setState({data : modified})
  }

  HandleLike = (id) => {
    this.props.toggleLike(id)
  }

  HandleComment = (newComment, id) => {
    this.props.addComment(newComment, id);
  }
  render() {
    if(this.props.data){ 
    return (
      <div>
        <div className="app-header">
          <Header title={this.props.title} />
        </div>

        <div className="app">
          <label>
            Select-type
        <select onChange={this.ModifyContent} className="post-type">
              <option value="imageAndText" >Image and Text</option>
              <option value="text" >Text Only</option>
              <option value="image" >Image Only</option>
              <option value="none" >No items</option>
            </select>
          </label>
          <NewsFeed feed={this.props.data} HandleLike={this.HandleLike} HandleComment={this.HandleComment} />
        </div>
      </div>
    );
    }
    else return <p>no data</p>
  }
}

const mapStateToProps = state => ({
  data: state.posts
})
const mapDispatchToProps = dispatch => ({
  addComment: (newComment, id) => dispatch(addComment(newComment, id)),
  toggleLike: id => dispatch(toggleLike(id)),
  toggleOption: (data, option) => dispatch(toggleOption(data, option)),
  fetchPosts: () => dispatch(fetchPosts())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
