import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Routes from '../Router.js'; 
describe('App', () => {
  it("renders without crashing", () => {
    shallow(<App/>);
  });

	it('should render a <div />', () => {
		const container = shallow(<App />);
		expect(container.find('div').length).toEqual(1);
});

it("should render the Router Component", () => {
  const container = shallow(<App />);
  expect(container.containsMatchingElement(<Routes/>)).toEqual(true)
})
});