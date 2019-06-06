import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import Header from './Header';
import NewsFeed from './NewsFeed';
import { fetchPosts} from '../store/actions';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "facebook",
      option : "imageAndText"
    }
  }
  componentDidMount(){
    this.props.fetchPosts()
  }
  ModifyContent = (event) => {
    this.setState({option : event.target.value})
  }
  render() {
    if(this.props.data){
      let filteredFeed = []
      switch (this.state.option) {
        case "image":
          filteredFeed =  this.props.data.filter(post => post['image'])
          break;
          
        case "text":
          filteredFeed =  this.props.data.filter(post => !post['image'])
          break;

        case 'none':
          filteredFeed =  []
          break;

        default:
          filteredFeed = this.props.data
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
            <select onChange={this.ModifyContent} className="post-type">
              <option value="imageAndText" >Image and Text</option>
              <option value="text" >Text Only</option>
              <option value="image" >Image Only</option>
              <option value="none" >No items</option>
            </select>
          </label>
          <NewsFeed feed={filteredFeed}/>
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
  fetchPosts: () => dispatch(fetchPosts())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
