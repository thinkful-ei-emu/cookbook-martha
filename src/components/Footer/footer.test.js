import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom'
import Footer from './footer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});