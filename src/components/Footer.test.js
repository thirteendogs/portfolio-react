import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer component', () => {
  beforeAll(() => {
    render(<Footer />)
  })

  test('Footer component text is correct', () => {
    const footerText = screen.getAllByText('Created by Daniel Aka Thirteendogs 🙃')

    expect(footerText).toBeDefined()
  })
})
