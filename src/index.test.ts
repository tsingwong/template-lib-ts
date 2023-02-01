import { describe, expect, it } from 'vitest'
import { one, two } from './index'
describe('should', () => {
  it('1 + 2 = 3', () => {
    expect(one + two).toMatchInlineSnapshot('3')
  })
})
