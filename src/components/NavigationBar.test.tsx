import React from 'react';
import ReactDOM from 'react-dom';
import App from './NavigationBar';
import NavigationBar from './NavigationBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavigationBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});