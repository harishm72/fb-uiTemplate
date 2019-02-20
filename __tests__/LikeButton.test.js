import React from 'react';
import { shallow, mount } from 'enzyme';
import LikeButton from '../src/components/LikeButton';
import renderer from 'react-test-renderer'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

let isLiked = false;
let id = 0;
let likes = 10;
const mockCallBack = () => {
    isLiked = !isLiked;
    likes = isLiked ? likes + 1 : likes - 1
};
describe('>>>LikeButton --- Snapshot', () => {
    it('Rednders the LikeButton Component', () => {
        const renderedValue = renderer.create(<LikeButton likes={likes} HandleLike={mockCallBack} isLiked={isLiked} id={id} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});

describe('Shallow render like button', () => {
    let wrapper



    beforeEach(() => {
        wrapper = mount(<LikeButton likes={likes} isLiked={isLiked} HandleLike={mockCallBack} id={id} />)
    })

    it('has a "p" tag with value displaying number of likes', () => {
        expect(wrapper.contains([<p>{likes} Likes</p>])).toBe(true)
    })

    it('has a button', () => {
        expect(wrapper.find('button.like-button')).toBeTruthy()
    })

    it('has a button text', () => {
        const button = wrapper.find('.like-button');
        const text = isLiked ? 'UnLike' : 'Like'
        expect(button.text()).toBe(text);
    })
})

describe("like button", () => {
    it("click button and check text", () => {

        let wrapper
        wrapper = mount(<LikeButton likes={likes} isLiked={isLiked} HandleLike={mockCallBack} id={id} />)
        
        let button = wrapper.find('.like-button');
        let text = isLiked ? 'UnLike' : 'Like'

        expect(button.text()).toBe(text);
        //console.log(wrapper.debug())
        
        button.simulate('click')

        wrapper = mount(<LikeButton likes={likes} isLiked={isLiked} HandleLike={mockCallBack} id={id} />)

        //console.log(wrapper.debug())
        
        text = isLiked ? 'UnLike' : 'Like'
        button = wrapper.find('.like-button');
        
        expect(button.text()).toBe(text);
        expect(wrapper.contains([<p>{likes} Likes</p>])).toBe(true)



        //expect(mockCallBack.mock.calls.length).toEqual(2)
    })
})