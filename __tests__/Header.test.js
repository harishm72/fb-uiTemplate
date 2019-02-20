import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../src/components/Header';
import renderer from 'react-test-renderer'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

const title = 'facebook'

describe('Header --- Snapshot',()=>{
  it('Rednders the Header Component', () => {
      const renderedValue =  renderer.create(<Header title={title}/>).toJSON()
      expect(renderedValue).toMatchSnapshot();
  });
});

describe('Header --- Shallow Render REACT COMPONENTS',()=>{
  let wrapper

  beforeEach(()=>{
      wrapper = shallow(<Header title={title}/>) 
  })

  it('render the Shallow component', () => {
     expect(wrapper.length).toEqual(1)
  });

  it('has header with tag h1' , () => {
      expect(wrapper.contains(<h1>{title}</h1>)).toBe(true)
  })
  
  it('has header value as facebook' , () => {
    expect(wrapper.find('h1').get(0).props.children).toBe(title)
  })

});