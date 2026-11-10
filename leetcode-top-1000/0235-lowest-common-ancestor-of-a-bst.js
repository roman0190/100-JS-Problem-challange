// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = (r,p,q)=>{while(r){if(p.val<r.val&&q.val<r.val)r=r.left;else if(p.val>r.val&&q.val>r.val)r=r.right;else return r;}return null;};
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
