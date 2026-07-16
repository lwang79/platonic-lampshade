import { describe, it, expect } from 'vitest'
import { formatScore, isGameOver } from './tennisScore'

// game should start with 0-0
describe('formatScore', () => {
  it('returns 0-0 at the start', () => {
    expect(formatScore({ p1: 0, p2: 0})).toBe('0-0');
  })
})

//game ending after 40 points
describe('isGameOver', () => {
  it('returns winning player when they have 40 points', () => {
    expect(isGameOver({ p1: 4, p2: 0})).toBe('p1');
  })
})

// 