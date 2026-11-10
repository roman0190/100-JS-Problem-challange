// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = r=>{const o=[],s=[];let c=r,p=null;while(c||s.length){if(c){s.push(c);c=c.left;}else{const n=s[s.length-1];if(n.right&&p!==n.right)c=n.right;else{o.push(n.val);p=s.pop();}}}return o;};
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
