import { expect } from 'chai';
import { longestIncreasingSubsequence } from './longest_inc_subseq';

it('Test Case #1', () => {
  expect(longestIncreasingSubsequence([-1])).to.deep.equal([-1]);
});

it('Test Case #2', () => {
  expect(longestIncreasingSubsequence([-1, 2])).to.deep.equal([-1, 2]);
});

it('Test Case #3', () => {
  expect(longestIncreasingSubsequence([-1, 2, 1, 2])).to.deep.equal([-1, 1, 2]);
});

it('Test Case #4', () => {
  expect(longestIncreasingSubsequence([1, 5, -1, 10])).to.deep.equal([
    1,
    5,
    10
  ]);
});

it('Test Case #5', () => {
  expect(longestIncreasingSubsequence([1, 5, -1, 0, 6, 2, 4])).to.deep.equal([
    -1,
    0,
    2,
    4
  ]);
});

it('Test Case #6', () => {
  expect(longestIncreasingSubsequence([3, 4, -1])).to.deep.equal([3, 4]);
});

it('Test Case #7', () => {
  expect(longestIncreasingSubsequence([29, 2, 20, 12, 30, 31])).to.deep.equal([
    2,
    12,
    30,
    31
  ]);
});

it('Test Case #8', () => {
  expect(
    longestIncreasingSubsequence([5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35])
  ).to.deep.equal([-24, 2, 3, 5, 6, 35]);
});

it('Test Case #9', () => {
  expect(
    longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80])
  ).to.deep.equal([10, 22, 33, 41, 60, 80]);
});

it('Test Case #10', () => {
  expect(longestIncreasingSubsequence([100, 1, 2, 3, 4, 101])).to.deep.equal([
    1,
    2,
    3,
    4,
    101
  ]);
});
