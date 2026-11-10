// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = p=>p.slice(1).reduce((s,x,i)=>s+Math.max(0,x-p[i]),0);
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
