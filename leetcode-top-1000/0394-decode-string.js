// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = s=>{let num=0,cur="",st=[];for(const c of s){if(/[0-9]/.test(c))num=num*10+Number(c);else if(c==="["){st.push([cur,num]);cur="";num=0;}else if(c==="]"){const[p,n]=st.pop();cur=p+cur.repeat(n);}else cur+=c;}return cur;};
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
