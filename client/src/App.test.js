import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Navbar from './components/Navbar';
import Players from './components/Players'
import Player from './components/Player'

afterEach(rtl.cleanup);

describe('App Test Suite', () => {
  it('Should Render text to the screen', () => {
    const wrapper = rtl.render(<App />)
    // wrapper.debug();
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
})

describe('Nav Test Suite', () => {
  it('Should test the nav is visible', () => {
    const wrapper = rtl.render(<App />)

    const myNav = wrapper.getByRole(/navigation/i)

    expect(myNav).toBeVisible()
  })

  it('Should have the class of navbar', () => {

    const wrapper = rtl.render(<Navbar />)

    const element = wrapper.getByTestId("nav-test-id")

    expect(element).toHaveClass('navbar')
  })
})

describe('Players Test Suite', () => {
  it('Should render the players', () => {

    const wrapper = rtl.render(<Players />)

    const element = wrapper.getByTestId("players-test-id")

    expect(element).toBeVisible()
  })

  it('Should have the class of players', () => {

    const wrapper = rtl.render(<Players />)

    const element = wrapper.getByTestId("players-test-id")

    expect(element).toHaveClass('Players')
  })
})

describe('Player Test Suite', () => {
  it('Should render a player', () => {
    const wrapper = rtl.render(<Player player={player} />)

    const element = wrapper.getByTestId("player-test-id")

    expect(element).toBeVisible()
  })

  it('Should find the players name', () => {
    const wrapper = rtl.render(<Player player={player} />)

    const element = wrapper.getByText(/ray/i)

    expect(element).toBeInTheDocument()
  })
})

const player = {
  name: 'Ray',
  country: 'USA',
  searches: 1
}