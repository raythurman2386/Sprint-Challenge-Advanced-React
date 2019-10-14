import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Players from './components/Players'
import Player from './components/Player'

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

  it(`Renders and has class name of 'App'`, () => {
    const wrapper = rtl.render(<App />)

    const element = wrapper.getByTestId("app-test-id")

    expect(element).toHaveClass('App')
  })

  it('Should test the classname on the toggle', () => {
    const wrapper = rtl.render(<App />)

    const myNav = wrapper.getByRole(/navigation/i)

    expect(myNav).toBeVisible()
  })
})

describe('Players Test Suite', () => {
  it('Should be rendering players', () => {
    const wrapper = rtl.render(<Players />)

    expect(wrapper).toBeVisible()
  })

})
