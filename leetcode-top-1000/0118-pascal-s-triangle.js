// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = n=>{const o=[];for(let i=0;i<n;i++){const r=Array(i+1).fill(1);for(let j=1;j<i;j++)r[j]=o[i-1][j-1]+o[i-1][j];o.push(r);}return o;};
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
