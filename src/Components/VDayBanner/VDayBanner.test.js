import React from "react";
import VDayBanner from "./VDayBanner";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe('VDayBanner', () => {
  it('should render the correct contents', () => {
    const { getByRole, getByText } = render(<VDayBanner/>)

    const bloodOrangeImg = getByRole('img', { name: /blood orange cream pie with orange slices and flowers/i })
    const vDayHeading = getByRole('heading', { name: /happy valentine's day/i })
    const p1 = getByText(/paloma pies is all about handcrafted pies and treats – everything is made from scratch here in denver, co\./i)
    const p2 = getByText(/Shop our Valentine's Day sale below and treat yourself \(or your loved ones!\) to a homemade pie and some of our pie peripherals!/i)

    expect(bloodOrangeImg).toBeInTheDocument()
    expect(vDayHeading).toBeInTheDocument()
    expect(p1).toBeInTheDocument()
    expect(p2).toBeInTheDocument()
  })
})