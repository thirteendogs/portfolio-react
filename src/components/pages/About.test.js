import { render, screen } from "@testing-library/react";
import About from "./About";

describe('About component', () => {
   beforeAll(()=> {
      render(<About/>)
   })

   test('About page text are correct', () => {
      const titleSection = screen.getAllByText('A little bit of me')
      const firstParagraph = screen.getAllByText('I am Dani and I am from Spain.')
      const secondParagraph = screen.getAllByText('I like to dig in and do my research on how things are made, especially websites and apps.')
      const thirthParagraph = screen.getAllByText('I got into programming by coincidence. While I was happily working in a grocery store, my brother sign me up for an exam to join a programming school. I passed the exam, and since I started school I couldn\'t stop looking for how things were made.')
      const fourthParagraph = screen.getByText(/After I finished my studies and did my practices at/)

      screen.debug(screen.getByText(/After I finished my studies and did my practices at/))
      

      expect(titleSection).toBeDefined()
      expect(firstParagraph).toBeDefined()
      expect(secondParagraph).toBeDefined()
      expect(thirthParagraph).toBeDefined()
      expect(fourthParagraph).toBeDefined()
      
   })
})