import React from 'react';
import { shallow, mount } from 'enzyme';
import NewsFeed from '../src/components/NewsFeed';
import renderer from 'react-test-renderer'

const feed = [
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
]

describe('>>>NewsFeed --- Snapshot',()=>{
  it('Rednders the NewsFeed Component', () => {
      const renderedValue =  renderer.create(<NewsFeed feed={feed}/>).toJSON()
      expect(renderedValue).toMatchSnapshot();
  });
});

describe('>>>NewsFeed --- Shallow Render REACT COMPONENTS',()=>{
  let wrapper

  beforeEach(()=>{
      wrapper = shallow(<NewsFeed feed={feed}/>) 
  })

  it('+++ render the DUMB component', () => {
     expect(wrapper.length).toEqual(1)
  });
  
});