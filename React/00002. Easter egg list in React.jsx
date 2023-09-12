///Task
/*
You decide to create a simple list of your favourite Easter eggs in React.
Challenge

Learn about nesting and listing React components.

    The component EggList will set a prop called eggs which is an array of your favourite easter eggs e.g. "Lindt".
    Loop through the props.eggs to output a unorder list of Easter eggs.
    Each list item should be a component called EasterEgg with a prop name, to render the name in a li tag.
    Each EasterEgg will need a key prop with a unique id. Use the index of the array for now.

About keys in React lists

While you can use the index of the array for a key because they should be unique among their siblings. 
However it is better to use unique values.

Keys help React identify which items have changed, are added, or are removed. 
Keys should be given to the elements inside the array to give the elements a stable identity
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
export const EasterEgg = ({ name, id }) => {
  return <li key={id}>{name}</li>;
};

export const EggList = ({ eggs }) => {
  return (
    <ul>
      {eggs.map((egg, index) => (
        <EasterEgg key={index} name={egg} id={index} />
      ))}
    </ul>
  );
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
describe('Magic egg list', () => {
  let eggList;
  
  beforeEach(() => {
    eggList = shallow(<EggList eggs={["Lindt", "Cadbury", "Milka", "Maltesers"]}/>);
  });
  
  it('has an unordered egg list component', () => {
    expect(eggList.name()).toEqual('ul');
  });
  
  it('has list items', () => {
    expect(eggList.find('EasterEgg').length).toEqual(4);
  });
  
  it('must have key prop', () => {
    const list = eggList.find('EasterEgg');
    expect(list.at(0).key()).toEqual('0');
    expect(list.at(1).key()).toEqual('1');
    expect(list.at(2).key()).toEqual('2');
    expect(list.at(3).key()).toEqual('3');
  });
  
  it('should have an EasterEgg child component', () => {
    expect(eggList.children().first().name()).toEqual("EasterEgg");
    expect(eggList.children().first().props().name).toEqual("Lindt");
  });
});

///Component Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EasterEgg EggList />);