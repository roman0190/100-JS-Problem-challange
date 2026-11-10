// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = r=>{const f=(a,b)=>!a&&!b?true:!a||!b?false:a.val===b.val&&f(a.left,b.right)&&f(a.right,b.left);return f(r,r);};
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
