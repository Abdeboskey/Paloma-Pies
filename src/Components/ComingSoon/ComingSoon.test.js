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
    const { getByRole } = render(
      <MemoryRouter>
        <ComingSoon />
      </MemoryRouter>
    )

    const comingSoonCopy = getByRole('paragraph', { name: /this page is currently under construction in preparation for our valentine's day sale! please check back on monday, february 1st to see our new menu and place an order!/i })

    expect(comingSoonCopy).toBeInTheDocument()
  })
})