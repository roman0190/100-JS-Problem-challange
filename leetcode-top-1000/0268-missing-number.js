// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = a=>a.length*(a.length+1)/2-a.reduce((s,x)=>s+x,0);
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
