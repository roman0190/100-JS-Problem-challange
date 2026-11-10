// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = (s,t)=>{if(s.length!==t.length)return false;const m={};for(const c of s)m[c]=(m[c]||0)+1;for(const c of t){if(!m[c])return false;m[c]--;}return true;};
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
