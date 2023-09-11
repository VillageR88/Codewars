import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import { expect } from "chai";

import './index.css';

// Konfiguracja Enzyme
Enzyme.configure({ adapter: new Adapter() });

// Komponent React
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
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
function describe(tag, func) {
  func();
};
function it(tag, func) {
  func();
};
// Testy jednostkowe
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

// Renderowanie komponentu React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<States />);
