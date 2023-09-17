///Task
/*
Write a react component that will display the current value of our counter.

    The counter should start at 0.
    There should be a button to add 1.
    There should also be a button to subtract 1.

We want to be able to see the value of the counter - so it should be rendered! And for your buttons to work they will need an onClick prop.

In your render you should return:

    The counter display element with an id of 'counter', containing the counter value.
    An increment button with an id of 'increment'
    A decrement button with an id of 'decrement'

Helpful docs on Events: https://reactjs.org/docs/handling-events.html

*/
///Tester => JSX# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from "enzyme";
import { expect } from "chai";
import './index.css';
Enzyme.configure({ adapter: new Adapter() });
///Solution
//My
import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }

  handleDecrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  }

  render() {
    return (
      <div>
        <h1 id="counter">{this.state.counter}</h1>
        <button type="button" id="decrement" onClick={this.handleDecrement}>
          Decrement
        </button>
        <button type="button" id="increment" onClick={this.handleIncrement}>
          Increment
        </button>
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
describe("Counter", () => {
  it('shows inital counter value', () => {
    const wrapper = shallow(<Counter />)
    const counterDisplayed = wrapper.find('#counter').getElement().props.children
    expect(counterDisplayed).toEqual(0);
  })

  it('should have an initial value of 0', () => {
    const wrapper = shallow(<Counter />)
    expect(wrapper.state('counter')).toEqual(0);
  })

  it("Increments counter by 1 when increment button is clicked", () => {
    const wrapper = shallow(<Counter />)
    wrapper.find('#increment').simulate('click');
    expect(wrapper.state('counter')).toEqual(1);
  })

  it("Decrements counter by 1 when decrement button is clicked", () => {
    const wrapper = shallow(<Counter />)
    wrapper.find('#decrement').simulate('click');
    expect(wrapper.state('counter')).toEqual(-1);
  })
})
///Component Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);