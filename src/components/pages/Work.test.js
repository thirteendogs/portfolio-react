import React from 'react'
import { screen, render } from '@testing-library/react'
import Work from './Work'

describe('Work page component', () => {
  beforeAll(() => {
    render(<Work />)
  })

  test('Work page component has correct text', () => {
    const companyOneName = screen.getAllByText('INDRA')
    const companyOneDate = screen.getAllByText('2019 - currently working')
    const companyOneRole = screen.getAllByText('Web Developer')
    const companyOneDesc = screen.getAllByText('Developing pages for diferent products for CaixaBank bank.')
    const companyTwoName = screen.getAllByText('EVERIS')
    const companyTwoDate = screen.getAllByText('2018 - 2019')
    const companyTwoRole = screen.getAllByText('Web Developer')
    const companyTwoDesc = screen.getAllByText('Developing pages for diferent products for BancSabadell bank.')

    expect(companyOneName).toBeDefined()
    expect(companyOneDate).toBeDefined()
    expect(companyOneRole).toBeDefined()
    expect(companyOneDesc).toBeDefined()
    expect(companyTwoName).toBeDefined()
    expect(companyTwoDate).toBeDefined()
    expect(companyTwoRole).toBeDefined()
    expect(companyTwoDesc).toBeDefined()
  })
})
