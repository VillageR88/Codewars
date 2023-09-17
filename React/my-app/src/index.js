import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

const element = <Welcome name="John" />; // Tworzymy element JSX z komponentem Welcome i przekazujemy prop "name".

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element); // Renderujemy element JSX w elemencie o id 'root'.
