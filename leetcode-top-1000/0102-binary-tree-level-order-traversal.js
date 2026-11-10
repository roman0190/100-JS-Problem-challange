// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = r=>{if(!r)return[];const o=[],q=[r];for(let i=0;i<q.length;){const n=q.length-i,z=[];for(let j=0;j<n;j++){const x=q[i++];z.push(x.val);if(x.left)q.push(x.left);if(x.right)q.push(x.right);}o.push(z);}return o;};
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
