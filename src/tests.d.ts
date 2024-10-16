declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveElementInArray(element: any): R;
    }
  }
}
