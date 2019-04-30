import React from 'react';
import rndr from 'react-test-renderer'

import Display from './Display'

describe ('snapshot <Display/>',()=>{
  it ('confirms snapshot matches current component',()=>{
    const tree = rndr.create(<Display/>)

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