// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = r=>{const f=(n,l,h)=>!n||((l===null||n.val>l)&&(h===null||n.val<h)&&f(n.left,l,n.val)&&f(n.right,n.val,h));return f(r,null,null);};
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
