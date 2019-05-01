// Test away
import React from 'react';
import rndr from 'react-test-renderer'
import { render, fireEvent } from 'react-testing-library';
import Controls from './Controls'
import 'react-testing-library/cleanup-after-each';

describe ('snapshot <Controls/>',()=>{
  it ('confirms snapshot matches current component',()=>{
    const tree = rndr.create(<Controls/>)
    expect (tree.toJSON()).toMatchSnapshot();
  });
  
  test('close gate button by default',()=>{
    const { getByText } = render(<Controls/>)
    expect(getByText(/Close Gate/i))
  })
 
    it ('should close the gate on click and change button to Open Gate',()=>{
    
      const closeMock = jest.fn();
      const { getByText } = render(<Controls closed={closeMock}/>);
      getByText(/Open Gate/i)
      
    });


    it ('should lock the gate on click and change button to Unlock Gate',()=>{
    
      const lockMock = jest.fn();
      const { getByText } = render(<Controls locked={lockMock}/>);
      getByText(/Unlock Gate/i)
      
    });
})
 