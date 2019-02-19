import React from 'react';
import { shallow, mount } from 'enzyme';
import Post from '../src/components/Post';
import renderer from 'react-test-renderer'
import { wrap } from 'module';

const post = {
    "id": 1,
    "isLiked": false,
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
}

describe('>>>Post --- Snapshot', () => {
    it('Rednders the Post Component', () => {
        const renderedValue = renderer.create(<Post post={post} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});

describe('>>>Post --- Shallow Render REACT COMPONENTS', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<Post post={post} />)
    })

    it('+++ render the DUMB component', () => {
        expect(wrapper.length).toEqual(1)
    });

    it('has a "p" tag with item description', () => {
        expect(wrapper.contains(<p>{post['item_description']}</p>)).toBe(true)
    })

    it('has a "p" tag with value of item description', () => {
        expect(wrapper.find('p').get(0).props.children).toBe(post['item_description'])
    })
    
    it('has a "p" tag with value displaying number of likes', () => {
        expect(wrapper.find('p').at(1)
            .equals(<p>{post['likes']} Likes</p>))
    })
});