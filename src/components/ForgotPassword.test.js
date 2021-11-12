import ForgotPassword from "./ForgotPassword";
import {shallow} from "enzyme";
it("renders without crashing", () => {
    shallow(<ForgotPassword />);
  });
  
  it("renders Account header", () => {
    const wrapper = shallow(<ForgotPassword />);
    
    const welcome = <h1>Namaste</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });
  