// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = (a,k)=>[...a.reduce((m,x)=>m.set(x,(m.get(x)||0)+1),new Map())].sort((x,y)=>y[1]-x[1]).slice(0,k).map(x=>x[0]);
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
