import React from "react";
import Landing from "./Landing";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe('Landing', () => {
  it('should render the correct contents', () => {
    const { getByRole, getAllByRole } = render(<Landing/>)

    const slicesLanding = getByRole('img', { name: /four slices of pie on a sunlit table with houseplants/i })
    const title = getByRole('heading', { name: /paloma pies/i })
    const motto = getByRole('heading', { name: /pies made with ❤️ in denver, co/i })
    const borders = getAllByRole('img', { name: /zig zag border/i })

    expect(slicesLanding).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(motto).toBeInTheDocument()
    expect(borders).toHaveLength(2)
  })
})