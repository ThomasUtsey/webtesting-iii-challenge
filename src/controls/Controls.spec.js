// Test away!
import React from 'react';
import rndr from 'react-test-renderer'

import Controls from './Controls'

describe ('snapshot <Display/>',()=>{
  it ('confirms snapshot matches current component',()=>{
    const tree = rndr.create(<Controls/>)

    expect (tree.toJSON()).toMatchSnapshot();
  });

  it ('is mocking me',()=>{
    const mock = jest.fn();

    const result = mock();

    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it('is mocking me even more',()=>{
    
  })
});