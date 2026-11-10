// LeetCode solution: standard JavaScript signature.
class ListNode { constructor(val = 0, next = null) { this.val = val; this.next = next; } }
class TreeNode { constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

const solution = g=>{let count=0,m=g.length,n=g[0].length;for(let r=0;r<m;r++)for(let c=0;c<n;c++)if(g[r][c]==="1"){count++;const s=[[r,c]];g[r][c]="0";while(s.length){const[x,y]=s.pop();for(const[dx,dy]of[[1,0],[-1,0],[0,1],[0,-1]]){const i=x+dx,j=y+dy;if(i>=0&&i<m&&j>=0&&j<n&&g[i][j]==="1"){g[i][j]="0";s.push([i,j]);}}}}return count;};
module.exports = solution;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
