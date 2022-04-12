import React from 'react'
import { screen, render } from '@testing-library/react'
import Contact from './Contact'

describe('Contact page component', () => {
  beforeAll(() => {
    render(<Contact />)
  })

  test('Contact page component text are correct', () => {
    const contactTitle = screen.getAllByText('Reach out to me')
    const inputName = screen.getAllByText('Name')
    const inputEmail = screen.getAllByText('Email')
    const inputMessage = screen.getAllByText('Message')
    const buttonSend = screen.getAllByText('Send')

    expect(contactTitle).toBeDefined()
    expect(inputName).toBeDefined()
    expect(inputEmail).toBeDefined()
    expect(inputMessage).toBeDefined()
    expect(buttonSend).toBeDefined()
  })
})
