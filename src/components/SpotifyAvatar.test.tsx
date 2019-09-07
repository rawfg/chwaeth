import React from 'react';
import ReactDOM from 'react-dom';
import SpotifyAvatar from './SpotifyAvatar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SpotifyAvatar />, div);
  ReactDOM.unmountComponentAtNode(div);
});