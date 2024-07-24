/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let maxLength = 0;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    if (!set.has(s[i])) {
      set.add(s[i]);
    } else {
      maxLength = Math.max(maxLength, set.size);
      while (left <= i) {
        if (s[left] !== s[i]) {
          set.delete(s[left]);
          left++;
        } else {
          left++;
          break;
        }
      }
    }
  }
  maxLength = Math.max(maxLength, set.size);
  return maxLength;
};
