import React from 'react';
import { shallow, mount } from 'enzyme';
import NewComment from '../src/components/NewComment';
import renderer from 'react-test-renderer'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';

Enzyme.configure({ adapter: new Adapter() });

describe('>>>NewComment --- Snapshot', () => {
    it('Rednders the NewComment Component', () => {
        const renderedValue = renderer.create(<NewComment HandleComment={() => null} id ={1}/>).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});

describe("shallow component", () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<NewComment HandleComment={() => null} />)
    })

    it('should have a <form> element', () => {
        expect(wrapper.find('form').length).toBe(1);
    });

    it('<form> element should have an <input/> element', () => {
        expect(wrapper.find('form').childAt(0).type()).toBe('input');
    });
})

describe('add new Comment', () => {
    let wrapper

    it('initially comment box should be empty', () => {
        wrapper = shallow(<NewComment HandleComment={() => null} />)

        let inputBox = wrapper.find('.comment-input')
        expect(inputBox.text()).toBe("");
    })

    it('should change value based on input change', () => {
        wrapper = shallow(<NewComment  HandleComment={() => null} />)
        let inputBox = wrapper.find('.comment-input')

        inputBox.simulate("change", { target: { value: "hello" } })
        expect(wrapper.find('input').at(0).props().value).toEqual("hello");

        inputBox.simulate("change", { target: { value: "hello world" } })
        expect(wrapper.find('input').at(0).props().value).toEqual("hello world");
    })

    it('submit comment and clear input box', () => {
        const fakeEvent = { preventDefault: () => null };
        expect(wrapper.find('.comment-input').length).toBe(1);
        
        wrapper.find('form').at(0).simulate('submit', fakeEvent);
        expect(wrapper.find('.comment-input').text()).toBe("");
    });

})