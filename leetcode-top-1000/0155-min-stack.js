// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = class MinStack{constructor(){this.s=[];this.m=[];}push(x){this.s.push(x);this.m.push(Math.min(x,this.getMin()??x));}pop(){this.s.pop();this.m.pop();}top(){return this.s[this.s.length-1];}getMin(){return this.m[this.m.length-1]??null;}};
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
