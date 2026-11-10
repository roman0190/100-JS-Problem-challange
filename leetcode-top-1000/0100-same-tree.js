// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = (p,q)=>!p&&!q?true:!p||!q?false:p.val===q.val&&solution(p.left,q.left)&&solution(p.right,q.right);
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
