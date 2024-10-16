// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

expect.extend({
  toHaveElementInArray(received: any[], element: any) {
    const pass = received.some(
      (item) => JSON.stringify(item) === JSON.stringify(element)
    );

    if (pass) {
      return {
        message: () =>
          `expected ${JSON.stringify(received)} not to contain ${JSON.stringify(element)}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${JSON.stringify(received)} to contain ${JSON.stringify(element)}`,
        pass: false,
      };
    }
  },
});
