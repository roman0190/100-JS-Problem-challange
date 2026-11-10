// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = a=>{const sum=a.reduce((x,y)=>x+y,0);if(sum%2)return false;const d=Array(sum/2+1).fill(false);d[0]=true;for(const n of a)for(let j=sum/2;j>=n;j--)d[j]=d[j]||d[j-n];return d[sum/2];};
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
