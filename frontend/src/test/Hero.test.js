import React from 'react';
import { render, screen } from "@testing-library/react";
import Hero from "../landing_page/home/Hero";
import '@testing-library/jest-dom';
describe('Hero Component', () => {
  test("renders Hero Image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/frontpagepp.png");
  });
});

