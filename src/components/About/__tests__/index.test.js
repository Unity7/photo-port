import React from "react";
//The render function will do just what its name implies: "render" the component. What actually happens is that Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).
//The cleanup function is used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results.
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

afterEach(cleanup);

describe("About component", () => {
  // First Test verify that the component is rendering
  //first argument, a string declares what is being tested. In the second argument, a callback function runs the test.
  it("renders", () => {
    render(<About />);
  });

  // Second Test
  it("matches snapshot DOM node structure", () => {
    // render About
    //asFragment function, which returns a snapshot of the About component.
    const { asFragment } = render(<About />);

    //Use the expect function with a matcher to assert something about a value. In the following statement, we'll use the toMatchSnapshot matcher to assert that snapshots will match
    expect(asFragment()).toMatchSnapshot();
  });
});
