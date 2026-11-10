// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = (s,p)=>{const need=Array(26).fill(0),w=Array(26).fill(0),o=[];for(const c of p)need[c.charCodeAt(0)-97]++;for(let i=0;i<s.length;i++){w[s.charCodeAt(i)-97]++;if(i>=p.length)w[s.charCodeAt(i-p.length)-97]--;if(i>=p.length-1&&need.every((x,j)=>x===w[j]))o.push(i-p.length+1);}return o;};
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
