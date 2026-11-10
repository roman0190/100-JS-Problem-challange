// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = (a,k)=>{const m=new Map([[0,1]]);let s=0,n=0;for(const x of a){s+=x;n+=m.get(s-k)||0;m.set(s,(m.get(s)||0)+1);}return n;};
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
