import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/App';
import renderer from 'react-test-renderer'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

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