// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = a=>{const t=[];for(const x of a){let l=0,r=t.length;while(l<r){const m=(l+r)>>1;if(t[m]<x)l=m+1;else r=m;}t[l]=x;}return t.length;};
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
