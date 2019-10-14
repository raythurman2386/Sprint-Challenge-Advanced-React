import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup);

describe('App Test Suite', () => {
  it('Should Render text to the screen', () => {
    const wrapper = rtl.render(<App />)
    wrapper.debug();
    // Queries
    const hasText = wrapper.getByText(/women/i)
    // Assertions
    expect(hasText).toBeInTheDocument()
  })
})
