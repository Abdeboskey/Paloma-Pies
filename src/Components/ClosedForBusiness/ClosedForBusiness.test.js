import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ClosedForBusiness from './ClosedForBusiness'

describe('ClosedForBusiness', () => {
  it('should render the correct components', () => {
    const { getByRole, getByText } = render(
      <>
        <ClosedForBusiness />
      </>
    )

    const ohHi = getByRole('heading', { name: /oh, hi!/i})
    const p1 = getByText(/paloma pies is all about handmade pies and treats\. everything is made from scratch in denver, co/i)
    const p2 = getByText(/the pie shop is currently closed/i);

    expect(ohHi).toBeInTheDocument()
    expect(p1).toBeInTheDocument()
    expect(p2).toBeInTheDocument()
  })
})