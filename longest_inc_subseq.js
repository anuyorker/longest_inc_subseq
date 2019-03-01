/* Longest Increasing Subsequence [extremely hard]
input: array of integers
output: longest strictly increasing subsequence of the array

For numbers to be in subsequence, they don't have to be adjacent. Just in Order.

sample input: [5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35]
sample  output:  [-24, 2, 3, 5, 6, 35]
*/

/* First Approach: O(n^2) time | O(n) space, where n is the length of the input array
Build array of same length as the input array. At each index in this
new array, store the length of the longest increasing subsequence
ending with the number found at that index in the input array
We can keep track of potential sequences in another array.
And instead  of storing entire  sequences, we can store the indices
of previous numbers. E.g. at index 3 in the other array, store the
index of the before-last number in the longest increasing subsequence
ending with the number at index. */
function longestIncreasingSubsequenceNaive (array) {
  const sequences = new Array(array.length);
  const lengths = array.map(num => 1);
  let maxLengthIdx = 0;
  for (let i = 0; i < array.length; i++) {
    const currNum = array[i];
    for (let j = 0; j < i; j++) {
      const otherNum = array[j];
      if (otherNum < currNum && lengths[j] + 1 >= lengths[i]) {
        lengths[i] = lengths[j] + 1;
        sequences[i] = j;
      }
    }
    if (lengths[i] >= lengths[maxLengthIdx]) maxLengthIdx = i;
  }
  return buildSequence(array, sequences, maxLengthIdx);
}

function buildSequence (array, sequences, currIdx) {
  const sequence = [];
  while (currIdx !== undefined) {
    sequence.unshift(array[currIdx]); // insert curr elem to start of sequence array
    currIdx = sequences[currIdx];
  }
  return sequence;
}

/* Optimized Approach: O(nlog(n)) time | O(n) space, where n is the length of the input array
Instead of building the array mentioned before, we can build an array
whose indices represent lengths of subsequences and whose values represent
the smallest numbers in the input array that can end a subsequence of a
given length. Traverse the input array, and for each number determine what
the length L of the longest increasing subsequence ending with that nummber
is. Store the position of that number at index L in the new array that
you're building. Use binary search to build this array.
 */
function longestIncreasingSubsequence (array) {
  const sequences = new Array(array.length);
  const indices = new Array(array.length + 1);
  let length = 0;
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    const newLength = binarySearch(1, length, indices, array, num);
    sequences[i] = indices[newLength - 1];
    indices[newLength] = i;
    length = Math.max(length, newLength);
  }
  return buildSequence(array, sequences, indices[length]);
}

function binarySearch (startIdx, endIdx, indices, array, num) {
  if (startIdx > endIdx) return startIdx;
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  if (array[indices[midIdx]] < num) {
    startIdx = midIdx + 1;
  } else {
    endIdx = midIdx - 1;
  }
  return binarySearch(startIdx, endIdx, indices, array, num);
}

module.exports = { longestIncreasingSubsequence };
