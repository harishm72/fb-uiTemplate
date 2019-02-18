import React from 'react';
import ConnectedApp, {App} from '../src/components/App';
import renderer from 'react-test-renderer';
import store from '../src/components/Store'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';

configure({adapter: new Adapter()});

const feed = [
  {
  "id" : 1,
  "isLiked" : true,
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
  "isLiked" : true,
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
]

describe('Initial test', () => {
it('', () =>{
  const component = renderer.create(
     <App feed= {feed} fetchPosts={ () => (null)}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
})


describe('Render the normal component', () => {
  let wrapper

 beforeEach(()=>{
     wrapper = shallow(<App feed={feed} fetchPosts={ () => (null)}/>)  
 })
 it('+++ render the App component', () => {
       expect(wrapper.length).toEqual(1)
    });

  it('', () => {
    expect(wrapper.contains(<h1>facebook</h1>)).toBe(true)
  })
})