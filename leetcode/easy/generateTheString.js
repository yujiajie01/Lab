/**
 * @param {number} n
 * @return {string}
 */

// 给你一个整数 n，请你返回一个含 n 个字符的字符串，其中每种字符在该字符串中都恰好出现 奇数次 。
// 返回的字符串必须只含小写英文字母。如果存在多个满足题目要求的字符串，则返回其中任意一个即可。
// 提示:1 <= n <= 500

var generateTheString = function(n) {
  let res = "";
  if(n%2===0){
    res+="b";
    n--;
  }
  for(let i=0;i<n;i++){
    res+="a";
  }
  return res;
};


var generateTheString1 = function(n) {
  if(n%2!==0){
    return 'a'.repeat(n)
  }
  return 'a'.repeat(n-1)+'b';
};