import React from 'react'
import Header from './Header'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

describe('Header', () => {
  it('should display the title heading', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    const titleHeading = getByRole('heading', { name: /paloma pies/i })

    expect(titleHeading).toBeInTheDocument()
  })

  it('should display a navbar with "home", "about" and "contact us"', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    const home = getByRole('link', { name: /home/i })
    const about = getByRole('link', { name: /about/i })
    const contactUs = getByRole('link', { name: /contact us/i })

    expect(home).toBeInTheDocument()
    expect(about).toBeInTheDocument()
    expect(contactUs).toBeInTheDocument()
  })
})