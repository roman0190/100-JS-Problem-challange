// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = r=>{if(!r)return[];const o=[],s=[r];while(s.length){const n=s.pop();o.push(n.val);if(n.right)s.push(n.right);if(n.left)s.push(n.left);}return o;};
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
