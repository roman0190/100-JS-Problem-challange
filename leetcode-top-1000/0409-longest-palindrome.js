// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = s=>{const m=new Map();for(const c of s)m.set(c,(m.get(c)||0)+1);let n=0,odd=false;for(const v of m.values()){n+=Math.floor(v/2)*2;if(v%2)odd=true;}return n+(odd?1:0);};
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
