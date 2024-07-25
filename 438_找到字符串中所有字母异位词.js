/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let m = s.length;
  let n = p.length;
  if (m < n) return [];
  let res = [];
  let p1 = new Array(26).fill(0);
  let p2 = new Array(26).fill(0);
  for (let i = 0; i < n; i++) {
    p1[p.charCodeAt(i) - "a".charCodeAt(0)]++;
    p2[s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }
  if (p1.toString() === p2.toString()) res.push(0);
  for (let i = 0; i < m - n; i++) {
    p1[s.charCodeAt(i) - "a".charCodeAt(0)]--;
    p1[s.charCodeAt(i + n) - "a".charCodeAt(0)]++;
    if (p1.toString() === p2.toString()) {
      res.push(i + 1);
    }
  }
  return res;
};

console.log(findAnagrams("cbaebabacd", "abc"));
