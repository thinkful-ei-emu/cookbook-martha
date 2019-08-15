import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom'
import View from './view';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <MemoryRouter>
      <View />
    </MemoryRouter>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});