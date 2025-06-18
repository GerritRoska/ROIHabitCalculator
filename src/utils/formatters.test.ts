import { describe, it, expect } from 'vitest';
import { formatCurrency, formatPercentage } from './formatters';

describe('formatCurrency', () => {
  it('formats numbers as USD without decimals', () => {
    expect(formatCurrency(1500)).toBe('$1,500');
  });

  it('rounds values to the nearest dollar', () => {
    expect(formatCurrency(1234.56)).toBe('$1,235');
  });
});

describe('formatPercentage', () => {
  it('formats values with one decimal place', () => {
    expect(formatPercentage(12)).toBe('12.0%');
    expect(formatPercentage(45.678)).toBe('45.7%');
  });
});
