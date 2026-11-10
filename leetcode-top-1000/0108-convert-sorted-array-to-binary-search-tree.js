// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = a=>{const f=(l,r)=>{if(l>r)return null;const m=(l+r)>>1;return new TreeNode(a[m],f(l,m-1),f(m+1,r));};return f(0,a.length-1);};
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
