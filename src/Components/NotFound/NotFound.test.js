import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom'
import NotFound from './NotFound'

describe('NotFound', () => {
  it('should greet a user and provide a link to get back on track', () => {
    const { getByRole } = render (
      <Router>
        <NotFound/>
      </Router>
    )

    const greeting = getByRole('heading', { name: /oh my, how did you get here?/i})
    const homelink = getByRole('heading', { name: /let's get you back on track/i})

    expect(greeting).toBeInTheDocument()
    expect(homelink).toBeInTheDocument()
  })
})