///Task
/*
In this kata you'll learn how to control Components with different kinds of beasts. 
Your goal is to tame and control a beast by building a controlled React component with the following criteria:

    Create a component called Beast and its state name
    The beast to control can be passed as a prop name
    Render a textinput field with the id controlledName. Its value should be the name of the current beast.
    Whenever this field's value is modified, the state should be updated as well
    You should control the beast Yeti if name is not passed in

Read about controlled components here: https://reactjs.org/docs/forms.html#controlled-components

*/
///Tester => JSX# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
import React from 'react';
import ReactDOM from 'react-dom';

///Solution
//My
const React = require("react");

class Beast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  }
  render() {
    return (
      <input
        id="controlledName"
        value={this.state.name}
        onChange={event => this.setState({ name: event.target.value })}
      />
    );
  }
}
Beast.defaultProps = {
  name: "Yeti"
};
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
const { shallow } = require("enzyme");

let passedBeastName = "Leprechaun";
let typedBeastName = "Pixie";

describe(`Controlled Beast with the name ${passedBeastName} passed`, () => {
  const wrapper = shallow(<Beast name={passedBeastName} />);

  it(`should set the initial state to ${passedBeastName}`, () => {
    Test.assertEquals(wrapper.state("name"), passedBeastName);
  });

  it(`should change state when typing ${typedBeastName}`, () => {
    wrapper
      .find("#controlledName")
      .simulate("change", { target: { value: typedBeastName } });
    Test.assertEquals(wrapper.state("name"), typedBeastName);
  });
});
///Component Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);