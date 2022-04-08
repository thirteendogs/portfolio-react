import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from './Home'

describe('Home component', () => {
   beforeAll(() => {
      render(<Home />)
   })

   test('Home page text are correct', () => {
      const firstParagraph = screen.getAllByText('Hello! my name is')
      const firstHeader = screen.getAllByText('Daniel Nova Girbau.')
      const secondHeader = screen.getAllByText('I am a Front End Developer.')
      const thirthHeader = screen.getAllByText('I enjoy building and designing cool websites and apps.')
      const anchorResume = screen.getAllByText('Download CV')

      expect(firstParagraph).toBeDefined()
      expect(firstHeader).toBeDefined()
      expect(secondHeader).toBeDefined()
      expect(thirthHeader).toBeDefined()
      expect(anchorResume).toBeDefined()
   })
})
