// 50 popular LeetCode problems, JavaScript solutions (IDs 14-494).
// Run: node leetcode-top-1000/batch-0561-0610.js
const assert = require("node:assert/strict");

class ListNode {
  constructor(val = 0, next = null) { this.val = val; this.next = next; }
}
class RandomNode {
  constructor(val = 0, next = null, random = null) { this.val = val; this.next = next; this.random = random; }
}
class TreeNode {
  constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
}
class GraphNode {
  constructor(val = 0, neighbors = []) { this.val = val; this.neighbors = neighbors; }
}

const solutions = {
  // 14. Longest Common Prefix — Easy — String.
  14: strs => {
    if (!strs.length) return "";
    let prefix = strs[0];
    for (const word of strs.slice(1)) {
      while (!word.startsWith(prefix)) {
        prefix = prefix.slice(0, -1);
        if (!prefix) return "";
      }
    }
    return prefix;
  },

  // 18. 4Sum — Medium — Sorting / Two Pointers.
  18: (nums, target) => {
    const values = [...nums].sort((a, b) => a - b), result = [];
    for (let i = 0; i < values.length - 3; i++) {
      if (i && values[i] === values[i - 1]) continue;
      for (let j = i + 1; j < values.length - 2; j++) {
        if (j > i + 1 && values[j] === values[j - 1]) continue;
        let left = j + 1, right = values.length - 1;
        while (left < right) {
          const sum = values[i] + values[j] + values[left] + values[right];
          if (sum === target) {
            result.push([values[i], values[j], values[left], values[right]]);
            left++;
            right--;
            while (left < right && values[left] === values[left - 1]) left++;
            while (left < right && values[right] === values[right + 1]) right--;
          } else if (sum < target) left++;
          else right--;
        }
      }
    }
    return result;
  },

  // 22. Generate Parentheses — Medium — Backtracking.
  22: n => {
    const result = [];
    const build = (text, open, close) => {
      if (text.length === 2 * n) { result.push(text); return; }
      if (open < n) build(text + "(", open + 1, close);
      if (close < open) build(text + ")", open, close + 1);
    };
    build("", 0, 0);
    return result;
  },

  // 24. Swap Nodes in Pairs — Medium — Linked List.
  24: head => {
    const dummy = new ListNode(0, head);
    let previous = dummy;
    while (previous.next && previous.next.next) {
      const first = previous.next, second = first.next;
      first.next = second.next;
      second.next = first;
      previous.next = second;
      previous = first;
    }
    return dummy.next;
  },

  // 28. Find the Index of the First Occurrence in a String — Easy — String.
  28: (haystack, needle) => haystack.indexOf(needle),

  // 31. Next Permutation — Medium — Array.
  31: nums => {
    let pivot = nums.length - 2;
    while (pivot >= 0 && nums[pivot] >= nums[pivot + 1]) pivot--;
    if (pivot >= 0) {
      let successor = nums.length - 1;
      while (nums[successor] <= nums[pivot]) successor--;
      [nums[pivot], nums[successor]] = [nums[successor], nums[pivot]];
    }
    for (let left = pivot + 1, right = nums.length - 1; left < right; left++, right--) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
    }
  },

  // 34. Find First and Last Position of Element in Sorted Array — Medium — Binary Search.
  34: (nums, target) => {
    const bound = upper => {
      let left = 0, right = nums.length;
      while (left < right) {
        const middle = (left + right) >> 1;
        if (nums[middle] > target || (upper && nums[middle] === target)) right = middle;
        else left = middle + 1;
      }
      return left;
    };
    const first = bound(false), afterLast = bound(true);
    return first === afterLast ? [-1, -1] : [first, afterLast - 1];
  },

  // 39. Combination Sum — Medium — Backtracking.
  39: (candidates, target) => {
    const values = [...candidates].sort((a, b) => a - b), result = [];
    const search = (start, remaining, path) => {
      if (remaining === 0) { result.push(path); return; }
      for (let i = start; i < values.length && values[i] <= remaining; i++) {
        search(i, remaining - values[i], [...path, values[i]]);
      }
    };
    search(0, target, []);
    return result;
  },

  // 40. Combination Sum II — Medium — Backtracking.
  40: (candidates, target) => {
    const values = [...candidates].sort((a, b) => a - b), result = [];
    const search = (start, remaining, path) => {
      if (remaining === 0) { result.push(path); return; }
      for (let i = start; i < values.length && values[i] <= remaining; i++) {
        if (i > start && values[i] === values[i - 1]) continue;
        search(i + 1, remaining - values[i], [...path, values[i]]);
      }
    };
    search(0, target, []);
    return result;
  },

  // 46. Permutations — Medium — Backtracking.
  46: nums => {
    const result = [], path = [], used = Array(nums.length).fill(false);
    const search = () => {
      if (path.length === nums.length) { result.push(path.slice()); return; }
      for (let i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        used[i] = true;
        path.push(nums[i]);
        search();
        path.pop();
        used[i] = false;
      }
    };
    search();
    return result;
  },

  // 48. Rotate Image — Medium — Matrix.
  48: matrix => {
    const n = matrix.length;
    for (let row = 0; row < n; row++) {
      for (let col = row + 1; col < n; col++) {
        [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
      }
    }
    for (const row of matrix) row.reverse();
  },

  // 50. Pow(x, n) — Medium — Binary Exponentiation.
  50: (x, n) => {
    let exponent = Math.abs(n), base = x, result = 1;
    while (exponent > 0) {
      if (exponent % 2 === 1) result *= base;
      base *= base;
      exponent = Math.floor(exponent / 2);
    }
    return n < 0 ? 1 / result : result;
  },

  // 55. Jump Game — Medium — Greedy.
  55: nums => {
    let farthest = 0;
    for (let i = 0; i < nums.length; i++) {
      if (i > farthest) return false;
      farthest = Math.max(farthest, i + nums[i]);
      if (farthest >= nums.length - 1) return true;
    }
    return nums.length <= 1;
  },

  // 57. Insert Interval — Medium — Array.
  57: (intervals, newInterval) => {
    const result = [];
    let index = 0, start = newInterval[0], end = newInterval[1];
    while (index < intervals.length && intervals[index][1] < start) result.push(intervals[index++]);
    while (index < intervals.length && intervals[index][0] <= end) {
      start = Math.min(start, intervals[index][0]);
      end = Math.max(end, intervals[index][1]);
      index++;
    }
    result.push([start, end], ...intervals.slice(index));
    return result;
  },

  // 64. Minimum Path Sum — Medium — Dynamic Programming.
  64: grid => {
    const columns = grid[0].length, dp = Array(columns).fill(Infinity);
    dp[0] = 0;
    for (const row of grid) {
      for (let col = 0; col < columns; col++) {
        dp[col] = row[col] + (col === 0 ? dp[col] : Math.min(dp[col], dp[col - 1]));
      }
    }
    return dp[columns - 1];
  },

  // 75. Sort Colors — Medium — Dutch National Flag.
  75: nums => {
    let low = 0, middle = 0, high = nums.length - 1;
    while (middle <= high) {
      if (nums[middle] === 0) [nums[low++], nums[middle++]] = [nums[middle], nums[low]];
      else if (nums[middle] === 2) [nums[middle], nums[high--]] = [nums[high], nums[middle]];
      else middle++;
    }
  },

  // 78. Subsets — Medium — Backtracking.
  78: nums => {
    const result = [[]];
    for (const value of nums) {
      const additions = result.map(subset => [...subset, value]);
      result.push(...additions);
    }
    return result;
  },

  // 79. Word Search — Medium — Backtracking.
  79: (board, word) => {
    const rows = board.length, cols = board[0].length;
    const visit = (row, col, index) => {
      if (index === word.length) return true;
      if (row < 0 || col < 0 || row >= rows || col >= cols || board[row][col] !== word[index]) return false;
      const character = board[row][col];
      board[row][col] = "\0";
      const found = visit(row + 1, col, index + 1) || visit(row - 1, col, index + 1)
        || visit(row, col + 1, index + 1) || visit(row, col - 1, index + 1);
      board[row][col] = character;
      return found;
    };
    for (let row = 0; row < rows; row++) for (let col = 0; col < cols; col++) {
      if (visit(row, col, 0)) return true;
    }
    return false;
  },

  // 84. Largest Rectangle in Histogram — Hard — Monotonic Stack.
  84: heights => {
    const stack = [], values = [...heights, 0];
    let best = 0;
    for (let i = 0; i < values.length; i++) {
      while (stack.length && values[stack[stack.length - 1]] > values[i]) {
        const height = values[stack.pop()];
        const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
        best = Math.max(best, height * width);
      }
      stack.push(i);
    }
    return best;
  },

  // 91. Decode Ways — Medium — Dynamic Programming.
  91: text => {
    if (!text || text[0] === "0") return 0;
    let twoBack = 1, oneBack = 1;
    for (let i = 1; i < text.length; i++) {
      let current = text[i] === "0" ? 0 : oneBack;
      const pair = Number(text.slice(i - 1, i + 1));
      if (pair >= 10 && pair <= 26) current += twoBack;
      twoBack = oneBack;
      oneBack = current;
    }
    return oneBack;
  },

  // 114. Flatten Binary Tree to Linked List — Medium — Tree / DFS.
  114: root => {
    const stack = root ? [root] : [];
    let previous = null;
    while (stack.length) {
      const node = stack.pop();
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
      node.left = null;
      node.right = previous;
      previous = node;
    }
    return root;
  },

  // 123. Best Time to Buy and Sell Stock III — Hard — Dynamic Programming.
  123: prices => {
    let buyOne = -Infinity, sellOne = 0, buyTwo = -Infinity, sellTwo = 0;
    for (const price of prices) {
      buyOne = Math.max(buyOne, -price);
      sellOne = Math.max(sellOne, buyOne + price);
      buyTwo = Math.max(buyTwo, sellOne - price);
      sellTwo = Math.max(sellTwo, buyTwo + price);
    }
    return sellTwo;
  },

  // 128. Longest Consecutive Sequence — Medium — Hash Set.
  128: nums => {
    const values = new Set(nums);
    let best = 0;
    for (const value of values) {
      if (!values.has(value - 1)) {
        let current = value;
        while (values.has(current)) current++;
        best = Math.max(best, current - value);
      }
    }
    return best;
  },

  // 130. Surrounded Regions — Medium — Graph / DFS.
  130: board => {
    if (!board.length || !board[0].length) return;
    const rows = board.length, cols = board[0].length, stack = [];
    const add = (row, col) => {
      if (row >= 0 && col >= 0 && row < rows && col < cols && board[row][col] === "O") {
        board[row][col] = "#";
        stack.push([row, col]);
      }
    };
    for (let row = 0; row < rows; row++) { add(row, 0); add(row, cols - 1); }
    for (let col = 0; col < cols; col++) { add(0, col); add(rows - 1, col); }
    while (stack.length) {
      const [row, col] = stack.pop();
      add(row + 1, col); add(row - 1, col); add(row, col + 1); add(row, col - 1);
    }
    for (let row = 0; row < rows; row++) for (let col = 0; col < cols; col++) {
      if (board[row][col] === "O") board[row][col] = "X";
      else if (board[row][col] === "#") board[row][col] = "O";
    }
  },

  // 133. Clone Graph — Medium — Graph / BFS.
  133: node => {
    if (!node) return null;
    const clones = new Map([[node, new GraphNode(node.val)]]);
    const queue = [node];
    for (let index = 0; index < queue.length; index++) {
      const current = queue[index];
      for (const neighbor of current.neighbors) {
        if (!clones.has(neighbor)) {
          clones.set(neighbor, new GraphNode(neighbor.val));
          queue.push(neighbor);
        }
        clones.get(current).neighbors.push(clones.get(neighbor));
      }
    }
    return clones.get(node);
  },

  // 138. Copy List with Random Pointer — Medium — Hash Map.
  138: head => {
    if (!head) return null;
    const copies = new Map();
    for (let node = head; node; node = node.next) copies.set(node, new RandomNode(node.val));
    for (let node = head; node; node = node.next) {
      copies.get(node).next = copies.get(node.next) || null;
      copies.get(node).random = copies.get(node.random) || null;
    }
    return copies.get(head);
  },

  // 139. Word Break — Medium — Dynamic Programming.
  139: (text, wordDict) => {
    const words = new Set(wordDict), dp = Array(text.length + 1).fill(false);
    dp[0] = true;
    for (let end = 1; end <= text.length; end++) {
      for (let start = 0; start < end; start++) {
        if (dp[start] && words.has(text.slice(start, end))) { dp[end] = true; break; }
      }
    }
    return dp[text.length];
  },

  // 150. Evaluate Reverse Polish Notation — Medium — Stack.
  150: tokens => {
    const stack = [];
    for (const token of tokens) {
      if (["+", "-", "*", "/"].includes(token)) {
        const right = stack.pop(), left = stack.pop();
        if (token === "+") stack.push(left + right);
        else if (token === "-") stack.push(left - right);
        else if (token === "*") stack.push(left * right);
        else stack.push(Math.trunc(left / right));
      } else stack.push(Number(token));
    }
    return stack[0];
  },

  // 152. Maximum Product Subarray — Medium — Dynamic Programming.
  152: nums => {
    let maximum = nums[0], minimum = nums[0], result = nums[0];
    for (let i = 1; i < nums.length; i++) {
      const value = nums[i];
      if (value < 0) [maximum, minimum] = [minimum, maximum];
      maximum = Math.max(value, maximum * value);
      minimum = Math.min(value, minimum * value);
      result = Math.max(result, maximum);
    }
    return result;
  },

  // 153. Find Minimum in Rotated Sorted Array — Medium — Binary Search.
  153: nums => {
    let left = 0, right = nums.length - 1;
    while (left < right) {
      const middle = (left + right) >> 1;
      if (nums[middle] > nums[right]) left = middle + 1;
      else right = middle;
    }
    return nums[left];
  },

  // 162. Find Peak Element — Medium — Binary Search.
  162: nums => {
    let left = 0, right = nums.length - 1;
    while (left < right) {
      const middle = (left + right) >> 1;
      if (nums[middle] > nums[middle + 1]) right = middle;
      else left = middle + 1;
    }
    return left;
  },

  // 199. Binary Tree Right Side View — Medium — Tree / BFS.
  199: root => {
    if (!root) return [];
    const result = [], queue = [root];
    for (let index = 0; index < queue.length;) {
      const levelEnd = queue.length;
      let rightmost;
      while (index < levelEnd) {
        const node = queue[index++];
        rightmost = node.val;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      result.push(rightmost);
    }
    return result;
  },

  // 209. Minimum Size Subarray Sum — Medium — Sliding Window.
  209: (target, nums) => {
    let left = 0, sum = 0, best = Infinity;
    for (let right = 0; right < nums.length; right++) {
      sum += nums[right];
      while (sum >= target) {
        best = Math.min(best, right - left + 1);
        sum -= nums[left++];
      }
    }
    return best === Infinity ? 0 : best;
  },

  // 210. Course Schedule II — Medium — Topological Sort.
  210: (numCourses, prerequisites) => {
    const graph = Array.from({ length: numCourses }, () => []);
    const indegree = Array(numCourses).fill(0);
    for (const [course, prerequisite] of prerequisites) {
      graph[prerequisite].push(course);
      indegree[course]++;
    }
    const queue = [];
    for (let course = 0; course < numCourses; course++) if (indegree[course] === 0) queue.push(course);
    const order = [];
    for (let index = 0; index < queue.length; index++) {
      const course = queue[index];
      order.push(course);
      for (const next of graph[course]) if (--indegree[next] === 0) queue.push(next);
    }
    return order.length === numCourses ? order : [];
  },

  // 213. House Robber II — Medium — Dynamic Programming.
  213: nums => {
    if (nums.length === 1) return nums[0];
    const robLine = values => {
      let previous = 0, current = 0;
      for (const value of values) [previous, current] = [current, Math.max(current, previous + value)];
      return current;
    };
    return Math.max(robLine(nums.slice(0, -1)), robLine(nums.slice(1)));
  },

  // 215. Kth Largest Element in an Array — Medium — Sorting.
  215: (nums, k) => [...nums].sort((a, b) => b - a)[k - 1],

  // 221. Maximal Square — Medium — Dynamic Programming.
  221: matrix => {
    const columns = matrix[0].length, dp = Array(columns + 1).fill(0);
    let best = 0, previousDiagonal = 0;
    for (const row of matrix) {
      previousDiagonal = 0;
      for (let col = 1; col <= columns; col++) {
        const old = dp[col];
        if (row[col - 1] === "1") {
          dp[col] = 1 + Math.min(dp[col], dp[col - 1], previousDiagonal);
          best = Math.max(best, dp[col]);
        } else dp[col] = 0;
        previousDiagonal = old;
      }
    }
    return best * best;
  },

  // 236. Lowest Common Ancestor of a Binary Tree — Medium — Tree / DFS.
  236: (root, p, q) => {
    if (!root || root === p || root === q) return root;
    const left = solutions[236](root.left, p, q);
    const right = solutions[236](root.right, p, q);
    return left && right ? root : left || right;
  },

  // 239. Sliding Window Maximum — Hard — Monotonic Deque.
  239: (nums, k) => {
    const deque = [], result = [];
    for (let i = 0; i < nums.length; i++) {
      while (deque.length && deque[0] <= i - k) deque.shift();
      while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) deque.pop();
      deque.push(i);
      if (i >= k - 1) result.push(nums[deque[0]]);
    }
    return result;
  },

  // 240. Search a 2D Matrix II — Medium — Matrix.
  240: (matrix, target) => {
    let row = 0, col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
      if (matrix[row][col] === target) return true;
      if (matrix[row][col] > target) col--;
      else row++;
    }
    return false;
  },

  // 297. Serialize and Deserialize Binary Tree — Hard — Tree / BFS.
  297: class Codec {
    serialize(root) {
      if (!root) return "";
      const values = [], queue = [root];
      for (let index = 0; index < queue.length; index++) {
        const node = queue[index];
        if (!node) values.push("#");
        else {
          values.push(String(node.val));
          queue.push(node.left, node.right);
        }
      }
      while (values[values.length - 1] === "#") values.pop();
      return values.join(",");
    }
    deserialize(data) {
      if (!data) return null;
      const values = data.split(","), root = new TreeNode(Number(values[0])), queue = [root];
      let index = 1;
      for (let parent = 0; parent < queue.length && index < values.length; parent++) {
        const node = queue[parent];
        if (values[index] !== "#") {
          node.left = new TreeNode(Number(values[index]));
          queue.push(node.left);
        }
        index++;
        if (index < values.length && values[index] !== "#") {
          node.right = new TreeNode(Number(values[index]));
          queue.push(node.right);
        }
        index++;
      }
      return root;
    }
  },

  // 309. Best Time to Buy and Sell Stock with Cooldown — Medium — Dynamic Programming.
  309: prices => {
    let hold = -Infinity, sold = -Infinity, rest = 0;
    for (const price of prices) {
      const previousSold = sold;
      sold = hold + price;
      hold = Math.max(hold, rest - price);
      rest = Math.max(rest, previousSold);
    }
    return Math.max(sold, rest);
  },

  // 399. Evaluate Division — Medium — Graph / DFS.
  399: (equations, values, queries) => {
    const graph = new Map();
    const add = (from, to, weight) => {
      if (!graph.has(from)) graph.set(from, []);
      graph.get(from).push([to, weight]);
    };
    equations.forEach(([a, b], index) => {
      add(a, b, values[index]);
      add(b, a, 1 / values[index]);
    });
    const evaluate = (start, target, seen) => {
      if (start === target) return 1;
      seen.add(start);
      for (const [next, weight] of graph.get(start) || []) {
        if (seen.has(next)) continue;
        const result = evaluate(next, target, seen);
        if (result !== -1) return weight * result;
      }
      return -1;
    };
    return queries.map(([a, b]) => graph.has(a) && graph.has(b) ? evaluate(a, b, new Set()) : -1);
  },

  // 424. Longest Repeating Character Replacement — Medium — Sliding Window.
  424: (text, k) => {
    const counts = new Map();
    let left = 0, highest = 0, best = 0;
    for (let right = 0; right < text.length; right++) {
      const count = (counts.get(text[right]) || 0) + 1;
      counts.set(text[right], count);
      highest = Math.max(highest, count);
      while (right - left + 1 - highest > k) {
        counts.set(text[left], counts.get(text[left]) - 1);
        left++;
      }
      best = Math.max(best, right - left + 1);
    }
    return best;
  },

  // 435. Non-overlapping Intervals — Medium — Greedy.
  435: intervals => {
    if (!intervals.length) return 0;
    const sorted = [...intervals].sort((a, b) => a[1] - b[1]);
    let removals = 0, end = sorted[0][1];
    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i][0] < end) removals++;
      else end = sorted[i][1];
    }
    return removals;
  },

  // 494. Target Sum — Medium — Dynamic Programming.
  494: (nums, target) => {
    let ways = new Map([[0, 1]]);
    for (const value of nums) {
      const next = new Map();
      for (const [sum, count] of ways) {
        next.set(sum + value, (next.get(sum + value) || 0) + count);
        next.set(sum - value, (next.get(sum - value) || 0) + count);
      }
      ways = next;
    }
    return ways.get(target) || 0;
  }
};

class LRUCache {
  constructor(capacity) {
    if (capacity < 1) throw new RangeError("capacity must be positive");
    this.capacity = capacity;
    this.values = new Map();
  }
  get(key) {
    if (!this.values.has(key)) return -1;
    const value = this.values.get(key);
    this.values.delete(key);
    this.values.set(key, value);
    return value;
  }
  put(key, value) {
    this.values.delete(key);
    this.values.set(key, value);
    if (this.values.size > this.capacity) this.values.delete(this.values.keys().next().value);
  }
}

class TrieNode {
  constructor() { this.children = new Map(); this.end = false; }
}
class Trie {
  constructor() { this.root = new TrieNode(); }
  insert(word) {
    let node = this.root;
    for (const character of word) {
      if (!node.children.has(character)) node.children.set(character, new TrieNode());
      node = node.children.get(character);
    }
    node.end = true;
  }
  search(word) {
    let node = this.root;
    for (const character of word) {
      if (!node.children.has(character)) return false;
      node = node.children.get(character);
    }
    return node.end;
  }
  startsWith(prefix) {
    let node = this.root;
    for (const character of prefix) {
      if (!node.children.has(character)) return false;
      node = node.children.get(character);
    }
    return true;
  }
}

class WordDictionary {
  constructor() { this.root = new TrieNode(); }
  addWord(word) {
    let node = this.root;
    for (const character of word) {
      if (!node.children.has(character)) node.children.set(character, new TrieNode());
      node = node.children.get(character);
    }
    node.end = true;
  }
  search(word) {
    const visit = (node, index) => {
      if (index === word.length) return node.end;
      const character = word[index];
      if (character !== ".") {
        const next = node.children.get(character);
        return next ? visit(next, index + 1) : false;
      }
      for (const child of node.children.values()) if (visit(child, index + 1)) return true;
      return false;
    };
    return visit(this.root, 0);
  }
}

class MaxHeap {
  constructor(compare) { this.values = []; this.compare = compare; }
  size() { return this.values.length; }
  peek() { return this.values[0]; }
  push(value) {
    const values = this.values;
    values.push(value);
    let index = values.length - 1;
    while (index > 0) {
      const parent = (index - 1) >> 1;
      if (this.compare(values[parent], values[index]) >= 0) break;
      [values[parent], values[index]] = [values[index], values[parent]];
      index = parent;
    }
  }
  pop() {
    const values = this.values;
    if (!values.length) return undefined;
    const top = values[0], last = values.pop();
    if (values.length) {
      values[0] = last;
      let index = 0;
      while (true) {
        const left = index * 2 + 1, right = left + 1;
        let largest = index;
        if (left < values.length && this.compare(values[left], values[largest]) > 0) largest = left;
        if (right < values.length && this.compare(values[right], values[largest]) > 0) largest = right;
        if (largest === index) break;
        [values[index], values[largest]] = [values[largest], values[index]];
        index = largest;
      }
    }
    return top;
  }
}

class MedianFinder {
  constructor() {
    this.lower = new MaxHeap((a, b) => a - b);
    this.upper = new MaxHeap((a, b) => b - a);
  }
  addNum(value) {
    this.lower.push(value);
    this.upper.push(this.lower.pop());
    if (this.upper.size() > this.lower.size()) this.lower.push(this.upper.pop());
  }
  findMedian() {
    if (!this.lower.size()) return null;
    return this.lower.size() > this.upper.size()
      ? this.lower.peek()
      : (this.lower.peek() + this.upper.peek()) / 2;
  }
}

const list = (...values) => {
  const dummy = new ListNode();
  let current = dummy;
  for (const value of values) { current.next = new ListNode(value); current = current.next; }
  return dummy.next;
};
const listValues = head => {
  const values = [];
  while (head) { values.push(head.val); head = head.next; }
  return values;
};
const tree = (value, left = null, right = null) => new TreeNode(value, left, right);
const sameTree = (a, b) => !a && !b ? true : !!a && !!b && a.val === b.val && sameTree(a.left, b.left) && sameTree(a.right, b.right);

const tests = [
  [14, solutions[14](["flower", "flow", "flight"]), "fl"],
  [18, solutions[18]([1, 0, -1, 0, -2, 2], 0), [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]],
  [22, solutions[22](3), ["((()))", "(()())", "(())()", "()(())", "()()()"]],
  [24, listValues(solutions[24](list(1, 2, 3, 4))), [2, 1, 4, 3]],
  [28, solutions[28]("sadbutsad", "sad"), 0],
  [31, (() => { const values = [1, 2, 3]; solutions[31](values); return values; })(), [1, 3, 2]],
  [34, solutions[34]([5, 7, 7, 8, 8, 10], 8), [3, 4]],
  [39, solutions[39]([2, 3, 6, 7], 7), [[2, 2, 3], [7]]],
  [40, solutions[40]([10, 1, 2, 7, 6, 1, 5], 8), [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]],
  [46, solutions[46]([1, 2, 3]).length, 6],
  [48, (() => { const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; solutions[48](matrix); return matrix; })(), [[7, 4, 1], [8, 5, 2], [9, 6, 3]]],
  [50, solutions[50](2, -2), 0.25],
  [55, solutions[55]([2, 3, 1, 1, 4]), true],
  [57, solutions[57]([[1, 3], [6, 9]], [2, 5]), [[1, 5], [6, 9]]],
  [64, solutions[64]([[1, 3, 1], [1, 5, 1], [4, 2, 1]]), 7],
  [75, (() => { const values = [2, 0, 2, 1, 1, 0]; solutions[75](values); return values; })(), [0, 0, 1, 1, 2, 2]],
  [78, solutions[78]([1, 2, 3]).length, 8],
  [79, solutions[79]([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"), true],
  [84, solutions[84]([2, 1, 5, 6, 2, 3]), 10],
  [91, solutions[91]("226"), 3],
  [114, (() => { const root = tree(1, tree(2, tree(3), tree(4)), tree(5, null, tree(6))); solutions[114](root); const values = []; for (let node = root; node; node = node.right) values.push(node.val); return values; })(), [1, 2, 3, 4, 5, 6]],
  [123, solutions[123]([3, 3, 5, 0, 0, 3, 1, 4]), 6],
  [128, solutions[128]([100, 4, 200, 1, 3, 2]), 4],
  [130, (() => { const board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]; solutions[130](board); return board; })(), [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]],
  [133, (() => { const a = new GraphNode(1), b = new GraphNode(2); a.neighbors = [b]; b.neighbors = [a]; const clone = solutions[133](a); return [clone !== a, clone.val, clone.neighbors[0].val, clone.neighbors[0].neighbors[0] === clone]; })(), [true, 1, 2, true]],
  [138, (() => { const a = new RandomNode(7), b = new RandomNode(13); a.next = b; b.random = a; const copy = solutions[138](a); return [copy !== a, copy.val, copy.next.val, copy.next.random === copy]; })(), [true, 7, 13, true]],
  [139, solutions[139]("leetcode", ["leet", "code"]), true],
  [146, (() => { const cache = new LRUCache(2); cache.put(1, 1); cache.put(2, 2); const a = cache.get(1); cache.put(3, 3); return [a, cache.get(2), cache.get(3)]; })(), [1, -1, 3]],
  [150, solutions[150](["2", "1", "+", "3", "*"]), 9],
  [152, solutions[152]([2, 3, -2, 4]), 6],
  [153, solutions[153]([3, 4, 5, 1, 2]), 1],
  [162, solutions[162]([1, 2, 3, 1]), 2],
  [199, solutions[199](tree(1, tree(2, null, tree(5)), tree(3, null, tree(4)))), [1, 3, 4]],
  [208, (() => { const trie = new Trie(); trie.insert("apple"); return [trie.search("apple"), trie.search("app"), trie.startsWith("app")]; })(), [true, false, true]],
  [209, solutions[209](7, [2, 3, 1, 2, 4, 3]), 2],
  [210, solutions[210](2, [[1, 0]]), [0, 1]],
  [211, (() => { const words = new WordDictionary(); words.addWord("bad"); words.addWord("dad"); words.addWord("mad"); return [words.search("pad"), words.search("bad"), words.search(".ad"), words.search("b..")]; })(), [false, true, true, true]],
  [213, solutions[213]([2, 3, 2]), 3],
  [215, solutions[215]([3, 2, 1, 5, 6, 4], 2), 5],
  [221, solutions[221]([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]), 4],
  [236, (() => { const p = tree(5, tree(6), tree(2, tree(7), tree(4))); const q = p.right.right; const root = tree(3, p, tree(1, tree(0), tree(8))); return solutions[236](root, p, q) === p; })(), true],
  [239, solutions[239]([1, 3, -1, -3, 5, 3, 6, 7], 3), [3, 3, 5, 5, 6, 7]],
  [240, solutions[240]([[1,4,7,11],[2,5,8,12],[3,6,9,16],[10,13,14,17]], 5), true],
  [295, (() => { const finder = new MedianFinder(); finder.addNum(1); finder.addNum(2); const first = finder.findMedian(); finder.addNum(3); return [first, finder.findMedian()]; })(), [1.5, 2]],
  [297, (() => { const codec = new solutions[297](); const original = tree(1, tree(2), tree(3, tree(4))); return sameTree(codec.deserialize(codec.serialize(original)), original); })(), true],
  [309, solutions[309]([1, 2, 3, 0, 2]), 3],
  [399, solutions[399]([["a","b"],["b","c"]], [2, 3], [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]), [6, 0.5, -1, 1, -1]],
  [424, solutions[424]("AABABBA", 1), 4],
  [435, solutions[435]([[1,2],[2,3],[3,4],[1,3]]), 1],
  [494, solutions[494]([1, 1, 1, 1, 1], 3), 5]
];

for (const [id, actual, expected] of tests) {
  assert.deepStrictEqual(actual, expected, "LeetCode problem " + id);
}
console.log("LeetCode batch: " + tests.length + " tests passed.");

module.exports = {
  solutions, ListNode, RandomNode, TreeNode, GraphNode,
  LRUCache, Trie, WordDictionary, MedianFinder
};
