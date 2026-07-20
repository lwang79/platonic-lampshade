import { describe, it, expect } from 'vitest'
import { formatScore, isGameOver } from './tennisScore'

// game should start with 0-0
describe('formatScore', () => {
  it('returns 0-0 at the start', () => {
    expect(formatScore({ p1: 0, p2: 0 })).toBe('0-0');
  })
})

// scores format correctly
describe('formatScore', () => {
  it('returns the right format', () => {
    expect(formatScore({ p1: 1, p2: 1 })).toBe('15-15');
    expect(formatScore({ p1: 2, p2: 0 })).toBe('30-0');
    expect(formatScore({ p1: 1, p2: 2 })).toBe('15-30');
    expect(formatScore({ p1: 2, p2: 2 })).toBe('30-30');

  })
})

// game ending after 40 points
describe('isGameOver', () => {
  it('returns winning player when they have 40 points', () => {
    expect(isGameOver({ p1: 4, p2: 0 })).toBe('p1');
  })
})

// deuce when both players are at 40 points
describe('formatScore', () => {
  it('returns Deuce when both players are at 40 points', () => {
    expect(formatScore({ p1: 4, p2: 4 })).toBe('Deuce');
  })
})

// advantage when leading player is above 40 points
describe('formatScore', () => {
  it('returns Adv for player who is ahead when both are at Deuce', () => {
    expect(formatScore({ p1: 5, p2: 4 })).toBe('Advantage P1')
  })
})

// game when player wins by 2 points at deuce
describe('isGameOver', () => {
  it('returns winning player when it is 2 points above 40', () => {
    expect(isGameOver({ p1: 8, p2: 6 })).toBe('p1')
  })
})