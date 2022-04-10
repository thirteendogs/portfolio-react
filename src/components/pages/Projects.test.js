import React from 'react'
import Projects from './Projects'
import { screen, render, fireEvent } from '@testing-library/react'

describe('Projects component', () => {
  beforeAll(() => {
    render(<Projects />)
  })

  test('Projects page content is correct', () => {
    const myProjectsTitle = screen.getByText('My projects')
    const firstProject = screen.getByTitle('firstProject')
    const secondProject = screen.getByTitle('secondProject')
    const thirthProject = screen.getByTitle('thirthProject')

    expect(myProjectsTitle).toBeDefined()

    fireEvent.mouseOver(firstProject)
    expect(firstProject).toBeDefined()
    fireEvent.mouseOver(secondProject)
    expect(secondProject).toBeDefined()
    fireEvent.mouseOver(thirthProject)
    expect(thirthProject).toBeDefined()
  })
})
