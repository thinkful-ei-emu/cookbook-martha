import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom'
import Create from './create';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <MemoryRouter>
      <Create />
    </MemoryRouter>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});