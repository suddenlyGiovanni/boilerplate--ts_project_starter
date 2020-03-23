import { add } from '.'

describe('add', () => {
  it('should take a number as the first addenda and return a fn that takes the second addenda and return the calculation', () => {
    expect.hasAssertions()
    const a = 1
    const b = 2

    expect(add(a)(b)).toBe(a + b)
  })
})
