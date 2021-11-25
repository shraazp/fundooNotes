import React from 'react';
import { shallow } from 'enzyme';
import Routes from './Router.js'; 
describe('Router', () => {
    it("renders without crashing", () => {
      shallow(<Routes/>);
    });
});