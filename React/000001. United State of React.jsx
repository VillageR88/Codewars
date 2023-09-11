///Task
/*
United State of React

Some say The United States has never been so divided. This Kata is a chance for you to unite a once great nation and MAKE AMERICA CODE AGAIN!
What's Involved

    State
    Changing State
    Conditional Rendering based on state

The challenge

You will be given a component called States. You will need to establish an initial state for the component called united and for it to be set to false.

Then write a unite function that changes this state to true.

Then conditionally render a bespoke message in the component.

If the States are united then display "Code for everyone"

If the States aren't united then display "Make America code again"
*/
///Tester => JSX# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import { expect } from "chai";
import './index.css';
Enzyme.configure({ adapter: new Adapter() });
///Solution
//My
export class States extends React.Component {
  constructor() {
    super();
    this.state = {
      united: false,
    };
  }

  unite() {
    this.setState({
      united: true,
    });
  }

  render() {
    return (
      <div>
        {this.state.united === false ? (
          <p className="status">Make America code again</p>
        ) : (
          <p className="status">Code for everyone</p>
        )}
      </div>
    );
  }
}
//Codewars recommended
/*
*/
/// Tester => JSX 'Codewars' 'Sample Tests' Tester - part 2 (adjusted) sample tests
//Declarations and definitions - part adjusted to VSC
function describe(tag, func) {
  func();
};
function it(tag, func) {
  func();
};
describe('Default State', () => {
  const wrapper = shallow(<States />);

  it('It has a state called united', () => {
    expect(wrapper.state('united')).not.to.equal(null);
  });

  it("It has a state 'united' with a value of false", () => {
    expect(wrapper.state('united')).to.equal(false);
  });
});

describe('Changing of state', () => {
  const wrapper = shallow(<States />);
  
  it("Components United state is changed to true when 'unite' function is called", () => {
    wrapper.instance().unite();
    expect(wrapper.state('united')).to.equal(true);
  });
  
});

describe('State based render', () => {
  const wrapper = shallow(<States />);
  
  it("Renders text 'Make America code again' if state.united is false", () => {
    expect(wrapper.find('.status').text()).to.equal('Make America code again');
  });
  
  it("Renders text 'Code for everyone' if state.united is true", () => {
    wrapper.instance().unite();
    expect(wrapper.find('.status').text()).to.equal('Code for everyone');
  });
  
});

///Component Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<States />);
