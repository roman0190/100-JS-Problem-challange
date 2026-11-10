// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = (r,k)=>{const s=[];let c=r;while(c||s.length){while(c){s.push(c);c=c.left;}c=s.pop();if(--k===0)return c.val;c=c.right;}return null;};
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
