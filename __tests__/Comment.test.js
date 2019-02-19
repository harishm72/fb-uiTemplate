import React from 'react';
import { shallow, mount } from 'enzyme';
import Comment from '../src/components/Comment';
import renderer from 'react-test-renderer'

let comment = {
    "comment": "Well said, i agree.",
    "created_at": "Fri May 11 2018 19:17:43 GMT+0530 (IST)"
};

let index = 0;

describe('>>>Comment --- Snapshot', () => {
    it('Rednders the Comment Component', () => {
        const renderedValue = renderer.create(<Comment key={index} comment={comment} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});

describe('>>>H O M E --- Shallow Render REACT COMPONENTS', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<Comment key={index} comment={comment} />)
    })

    it('render the Comment component', () => {
        expect(wrapper.length).toEqual(1)
    });

    it('has comment with tag p' , () => {
        expect(wrapper.contains(<p>{comment['comment']}</p>)).toBe(true)
    })
    
    it('has comment displaying comment text' , () => {
      expect(wrapper.find('p').get(0).props.children).toBe(comment['comment'])
    })

    it('has comment creation date-time with tag p' , () => {
        expect(wrapper.contains(<p className="comment-time">Created at : {comment['created_at']}</p>)).toBe(true)
    })
    
    it('has created_at displaying comment creation date-time' , () => {
      expect(wrapper.find('p').get(1).props.children).toEqual(["Created at : ", comment['created_at']])
    })
});