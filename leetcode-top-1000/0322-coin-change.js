// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = (coins,n)=>{const d=Array(n+1).fill(Infinity);d[0]=0;for(const c of coins)for(let x=c;x<=n;x++)d[x]=Math.min(d[x],d[x-c]+1);return d[n]===Infinity?-1:d[n];};
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
