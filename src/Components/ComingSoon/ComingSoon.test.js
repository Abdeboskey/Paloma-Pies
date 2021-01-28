import React from 'react'
import ComingSoon from './ComingSoon'
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe('ComingSoon', () => {
  it('should display a welcome message', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <ComingSoon />
      </MemoryRouter>
    )

    const welcomeMessage = getByRole('heading', { name: /welcome to paloma pies/i })

    expect(welcomeMessage).toBeInTheDocument()
  })

  it('should display some information about the next pie sale', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ComingSoon />
      </MemoryRouter>
    )

    const comingSoonCopy = getByText(/this page is currently under construction/i)

    expect(comingSoonCopy).toBeInTheDocument()
  })

  it('should display a banner with hugs and kisses', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ComingSoon />
      </MemoryRouter>
    )

    const hugsNKisses = getByText(/xoxo/i)

    expect(hugsNKisses).toBeInTheDocument()
  })
})