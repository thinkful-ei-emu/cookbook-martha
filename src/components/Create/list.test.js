import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom'
import List from './list';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <MemoryRouter>
      <List />
    </MemoryRouter>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});