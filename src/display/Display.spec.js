import React from 'react';
import rndr from 'react-test-renderer'

import Display from './Display'

describe ('snapshot <Display/>',()=>{
  it ('confirms snapshot matches current component',()=>{
    const tree = rndr.create(<Display/>)

    expect (tree.toJSON()).toMatchSnapshot();
  });
});
  