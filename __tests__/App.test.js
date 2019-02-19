import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/components/App';
import renderer from 'react-test-renderer'

describe('>>>H O M E --- Snapshot',()=>{
  it('Rednders the App Component', () => {
      const renderedValue =  renderer.create(<App />).toJSON()
      expect(renderedValue).toMatchSnapshot();
  });
});

describe('>>>H O M E --- Shallow Render REACT COMPONENTS',()=>{
  let wrapper

  beforeEach(()=>{
      wrapper = shallow(<App/>) 
  })

  it('+++ render the DUMB component', () => {
     expect(wrapper.length).toEqual(1)
  });
  
});