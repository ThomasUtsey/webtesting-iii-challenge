// Test away
import React from 'react';
import rndr from 'react-test-renderer'

import Dashboard from './Dashboard'

describe ('snapshot <Dashboard/>',()=>{
  it ('confirms snapshot matches current component',()=>{
    const tree = rndr.create(<Dashboard/>)

    expect (tree.toJSON()).toMatchSnapshot();
  });
})
 