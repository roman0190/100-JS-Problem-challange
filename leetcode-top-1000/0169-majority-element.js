// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = a=>{let x=null,c=0;for(const n of a){if(!c)x=n;c+=n===x?1:-1;}return x;};
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
