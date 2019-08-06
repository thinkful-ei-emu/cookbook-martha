import React from 'react';

function Results (props) {
  const testresults = [    {
    title: 'recipe 1',
  },
  {
    title: 'recipe 2',
  }]

  const results = testresults.map((item, index) => 
    <li key={index}>
    {item.title}
    </li>
  )
  return (
    <ul>
    {results}
    </ul>
  );
}

export default Results;