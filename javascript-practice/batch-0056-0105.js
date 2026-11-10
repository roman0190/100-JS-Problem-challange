// General JavaScript practice problems 0056-0105.
// Run: node javascript-practice/batch-0056-0105.js
const assert = require("node:assert/strict");

const solutions = {
  // 0056. Compact Array — remove all falsy values.
  56: values => values.filter(Boolean),

  // 0057. Zip Arrays — pair values at matching indexes.
  57: (left, right) => Array.from({ length: Math.min(left.length, right.length) }, (_, i) => [left[i], right[i]]),

  // 0058. Transpose Matrix — reject ragged matrices.
  58: matrix => {
    if (!matrix.length) return [];
    const width = matrix[0].length;
    if (!matrix.every(row => row.length === width)) throw new RangeError("Matrix must be rectangular");
    return Array.from({ length: width }, (_, col) => matrix.map(row => row[col]));
  },

  // 0059. Rotate Matrix Clockwise — supports rectangular matrices.
  59: matrix => {
    if (!matrix.length) return [];
    const rows = matrix.length, cols = matrix[0].length;
    if (!matrix.every(row => row.length === cols)) throw new RangeError("Matrix must be rectangular");
    return Array.from({ length: cols }, (_, col) =>
      Array.from({ length: rows }, (_, row) => matrix[rows - 1 - row][col])
    );
  },

  // 0060. Matrix Diagonal Sums.
  60: matrix => {
    if (!matrix.every(row => row.length === matrix.length)) throw new RangeError("Matrix must be square");
    let primary = 0, secondary = 0;
    for (let i = 0; i < matrix.length; i++) {
      primary += matrix[i][i];
      secondary += matrix[i][matrix.length - 1 - i];
    }
    return { primary, secondary };
  },

  // 0061. Find the Missing Number in 1..n.
  61: (values, n = values.length + 1) => n * (n + 1) / 2 - values.reduce((sum, value) => sum + value, 0),

  // 0062. Find Duplicate Values, returning each duplicate once.
  62: values => {
    const seen = new Set(), duplicates = new Set();
    for (const value of values) {
      if (seen.has(value)) duplicates.add(value);
      else seen.add(value);
    }
    return [...duplicates];
  },

  // 0063. Partition an Array by a Predicate.
  63: (values, predicate) => {
    const matched = [], unmatched = [];
    values.forEach((value, index) => (predicate(value, index) ? matched : unmatched).push(value));
    return [matched, unmatched];
  },

  // 0064. Stable Sort by a Derived Key.
  64: (values, keyFn) => values.map((value, index) => ({ value, index, key: keyFn(value) }))
    .sort((a, b) => (a.key < b.key ? -1 : a.key > b.key ? 1 : a.index - b.index))
    .map(item => item.value),

  // 0065. Shallow Array Equality using Object.is.
  65: (left, right) => left.length === right.length && left.every((value, index) => Object.is(value, right[index])),

  // 0066. Group Sorted Numbers into Consecutive Runs.
  66: values => {
    const sorted = [...new Set(values)].sort((a, b) => a - b);
    const groups = [];
    for (const value of sorted) {
      const last = groups[groups.length - 1];
      if (last && value === last[last.length - 1] + 1) last.push(value);
      else groups.push([value]);
    }
    return groups;
  },

  // 0067. Create a Numeric Range with an Exclusive End.
  67: (start, end, step = 1) => {
    if (step === 0 || (start < end && step < 0) || (start > end && step > 0)) {
      throw new RangeError("Step must move toward the end");
    }
    const result = [];
    if (step > 0) for (let value = start; value < end; value += step) result.push(value);
    if (step < 0) for (let value = start; value > end; value += step) result.push(value);
    return result;
  },

  // 0068. Clamp a Number to a Closed Interval.
  68: (value, min, max) => {
    if (min > max) throw new RangeError("min must not exceed max");
    return Math.min(max, Math.max(min, value));
  },

  // 0069. Round a Number to a Given Decimal Place.
  69: (value, places = 0) => {
    if (!Number.isInteger(places) || places < 0 || places > 12) throw new RangeError("places must be 0..12");
    const factor = 10 ** places;
    return Math.round((value + Number.EPSILON) * factor) / factor;
  },

  // 0070. Format Seconds as HH:MM:SS.
  70: totalSeconds => {
    if (!Number.isInteger(totalSeconds) || totalSeconds < 0) throw new RangeError("Seconds must be a non-negative integer");
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return [hours, minutes, seconds].map(value => String(value).padStart(2, "0")).join(":");
  },

  // 0071. Parse a Query String, preserving repeated keys as arrays.
  71: query => {
    const result = {};
    for (const [key, value] of new URLSearchParams(query.startsWith("?") ? query.slice(1) : query)) {
      if (!Object.hasOwn(result, key)) result[key] = value;
      else if (Array.isArray(result[key])) result[key].push(value);
      else result[key] = [result[key], value];
    }
    return result;
  },

  // 0072. Build a Query String; arrays become repeated keys.
  72: params => {
    const search = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value == null) continue;
      for (const item of Array.isArray(value) ? value : [value]) search.append(key, String(item));
    }
    return search.toString();
  },

  // 0073. Convert Text to a URL Slug.
  73: text => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),

  // 0074. Convert camelCase to kebab-case.
  74: text => text.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase(),

  // 0075. Convert kebab-case or snake_case to camelCase.
  75: text => text.replace(/[-_\s]+(.)?/g, (_, next) => next ? next.toUpperCase() : ""),

  // 0076. Remove Unicode Diacritical Marks.
  76: text => text.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),

  // 0077. Return the First Longest Word in a Sentence.
  77: sentence => {
    const words = sentence.match(/[A-Za-z0-9']+/g) || [];
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
  },

  // 0078. Count Substring Occurrences, optionally allowing overlap.
  78: (text, search, allowOverlap = false) => {
    if (!search) return 0;
    let count = 0, from = 0, index;
    while ((index = text.indexOf(search, from)) !== -1) {
      count++;
      from = index + (allowOverlap ? 1 : search.length);
    }
    return count;
  },

  // 0079. Remove Repeated Characters, preserving first occurrences.
  79: text => [...new Set(text)].join(""),

  // 0080. Run-Length Encode a String as [character, count] pairs.
  80: text => {
    const encoded = [];
    for (const character of text) {
      const last = encoded[encoded.length - 1];
      if (last && last[0] === character) last[1]++;
      else encoded.push([character, 1]);
    }
    return encoded;
  },

  // 0081. Decode Run-Length [character, count] Pairs.
  81: encoded => encoded.map(([character, count]) => {
    if (!Number.isInteger(count) || count < 0) throw new RangeError("Count must be a non-negative integer");
    return character.repeat(count);
  }).join(""),

  // 0082. Caesar Cipher with Case Preservation.
  82: (text, shift) => {
    const offset = ((shift % 26) + 26) % 26;
    return [...text].map(character => {
      const code = character.charCodeAt(0);
      if (code >= 65 && code <= 90) return String.fromCharCode(65 + (code - 65 + offset) % 26);
      if (code >= 97 && code <= 122) return String.fromCharCode(97 + (code - 97 + offset) % 26);
      return character;
    }).join("");
  },

  // 0083. ROT13.
  83: text => solutions[82](text, 13),

  // 0084. Validate a Strict IPv4 Address.
  84: address => {
    const parts = address.split(".");
    return parts.length === 4 && parts.every(part =>
      /^\d+$/.test(part) && (part === "0" || !part.startsWith("0")) && Number(part) <= 255
    );
  },

  // 0085. Mask the Local Part of an Email Address.
  85: email => {
    const at = email.indexOf("@");
    if (at <= 0 || at !== email.lastIndexOf("@")) throw new TypeError("Invalid email address");
    return email[0] + "*".repeat(Math.max(2, at - 1)) + email.slice(at);
  },

  // 0086. Mask a String, Keeping Its Last N Characters Visible.
  86: (text, visible = 4, mask = "*") => {
    if (!Number.isInteger(visible) || visible < 0) throw new RangeError("visible must be non-negative");
    const count = Math.max(0, text.length - visible);
    return mask.repeat(count) + (visible === 0 ? "" : text.slice(-visible));
  },

  // 0087. Parse JSON Safely with a Fallback.
  87: (text, fallback = null) => {
    try { return JSON.parse(text); } catch { return fallback; }
  },

  // 0088. Pick Selected Own Properties from an Object.
  88: (object, keys) => Object.fromEntries(keys.filter(key => Object.hasOwn(object, key)).map(key => [key, object[key]])),

  // 0089. Omit Selected Own Properties from an Object.
  89: (object, keys) => {
    const omitted = new Set(keys);
    return Object.fromEntries(Object.entries(object).filter(([key]) => !omitted.has(key)));
  },

  // 0090. Invert an Object; later duplicate values replace earlier keys.
  90: object => Object.fromEntries(Object.entries(object).map(([key, value]) => [String(value), key])),

  // 0091. Read a Nested Property by Dot Path or Path Array.
  91: (object, path, fallback = undefined) => {
    const parts = Array.isArray(path) ? path : String(path).split(".");
    let value = object;
    for (const part of parts) {
      if (value == null || !Object.hasOwn(Object(value), part)) return fallback;
      value = value[part];
    }
    return value;
  },

  // 0092. Set a Nested Property by Dot Path or Path Array.
  92: (object, path, value) => {
    const parts = Array.isArray(path) ? path : String(path).split(".");
    if (!parts.length || parts.some(part => part === "")) throw new TypeError("Path must not be empty");
    let current = object;
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      if (current[part] == null || typeof current[part] !== "object") current[part] = {};
      current = current[part];
    }
    current[parts[parts.length - 1]] = value;
    return object;
  },

  // 0093. Deep Freeze an Object, including Cyclic References.
  93: (value, seen = new WeakSet()) => {
    if (value === null || (typeof value !== "object" && typeof value !== "function") || seen.has(value)) return value;
    seen.add(value);
    for (const key of Reflect.ownKeys(value)) solutions[93](value[key], seen);
    return Object.freeze(value);
  },

  // 0094. Deep-Merge Plain Objects; Arrays and Other Values Are Replaced.
  94: (target, source) => {
    const isPlainObject = value => value !== null && Object.getPrototypeOf(value) === Object.prototype;
    const result = { ...target };
    for (const [key, value] of Object.entries(source)) {
      result[key] = isPlainObject(result[key]) && isPlainObject(value)
        ? solutions[94](result[key], value)
        : Array.isArray(value) ? value.slice() : value;
    }
    return result;
  },

  // 0095. Compose Functions from Left to Right (Pipe).
  95: (...functions) => value => functions.reduce((result, fn) => fn(result), value),

  // 0096. Curry a Function Based on Its Declared Arity.
  96: fn => {
    const curried = (...args) => args.length >= fn.length
      ? fn(...args)
      : (...next) => curried(...args, ...next);
    return curried;
  },

  // 0097. Partially Apply Leading Function Arguments.
  97: (fn, ...preset) => (...later) => fn(...preset, ...later),

  // 0098. Allow a Function to Run Only Once.
  98: fn => {
    let called = false, result;
    return function (...args) {
      if (called) return undefined;
      called = true;
      result = fn.apply(this, args);
      return result;
    };
  },

  // 0099. Create a Small Event Emitter.
  99: () => {
    const events = new Map();
    return {
      on(name, listener) {
        if (!events.has(name)) events.set(name, new Set());
        events.get(name).add(listener);
        return () => this.off(name, listener);
      },
      off(name, listener) {
        const listeners = events.get(name);
        if (!listeners) return false;
        const removed = listeners.delete(listener);
        if (!listeners.size) events.delete(name);
        return removed;
      },
      emit(name, ...args) {
        const listeners = [...(events.get(name) || [])];
        listeners.forEach(listener => listener(...args));
        return listeners.length;
      }
    };
  },

  // 0100. Least Recently Used Cache.
  100: class LRUCache {
    constructor(capacity) {
      if (!Number.isInteger(capacity) || capacity < 1) throw new RangeError("capacity must be positive");
      this.capacity = capacity;
      this.cache = new Map();
    }
    get(key) {
      if (!this.cache.has(key)) return -1;
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
    put(key, value) {
      if (this.cache.has(key)) this.cache.delete(key);
      this.cache.set(key, value);
      if (this.cache.size > this.capacity) this.cache.delete(this.cache.keys().next().value);
    }
  },

  // 0101. Convert a Roman Numeral to an Integer.
  101: numeral => {
    const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let total = 0;
    for (let i = 0; i < numeral.length; i++) {
      const current = values[numeral[i]], next = values[numeral[i + 1]] || 0;
      total += current < next ? -current : current;
    }
    return total;
  },

  // 0102. Convert an Integer (1..3999) to a Roman Numeral.
  102: number => {
    if (!Number.isInteger(number) || number < 1 || number > 3999) throw new RangeError("number must be 1..3999");
    const values = [[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
    let result = "";
    for (const [value, symbol] of values) {
      while (number >= value) {
        result += symbol;
        number -= value;
      }
    }
    return result;
  },

  // 0103. Format a Byte Count with Binary Units.
  103: (bytes, decimals = 2) => {
    if (!Number.isFinite(bytes) || bytes < 0) throw new RangeError("bytes must be non-negative");
    if (!Number.isInteger(decimals) || decimals < 0 || decimals > 8) throw new RangeError("decimals must be 0..8");
    if (bytes === 0) return "0 Bytes";
    const units = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
    const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
    return (bytes / (1024 ** exponent)).toFixed(decimals) + " " + units[exponent];
  },

  // 0104. Validate a Real YYYY-MM-DD Calendar Date.
  104: text => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) return false;
    const [year, month, day] = text.split("-").map(Number);
    const date = new Date(Date.UTC(year, month - 1, day));
    return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
  },

  // 0105. Find the Median of an Unsorted Array.
  105: values => {
    if (!values.length) return null;
    const sorted = [...values].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
  }
};

const tests = [
  [56, solutions[56]([0, 1, false, 2, "", 3, null, NaN]), [1, 2, 3]],
  [57, solutions[57]([1, 2, 3], ["a", "b"]), [[1, "a"], [2, "b"]]],
  [58, solutions[58]([[1, 2, 3], [4, 5, 6]]), [[1, 4], [2, 5], [3, 6]]],
  [59, solutions[59]([[1, 2, 3], [4, 5, 6]]), [[4, 1], [5, 2], [6, 3]]],
  [60, solutions[60]([[1, 2], [3, 4]]), { primary: 5, secondary: 5 }],
  [61, solutions[61]([1, 2, 4, 5], 5), 3],
  [62, solutions[62]([1, 2, 1, 3, 2, 2]), [1, 2]],
  [63, solutions[63]([1, 2, 3, 4], value => value % 2 === 0), [[2, 4], [1, 3]]],
  [64, solutions[64]([{ n: "b", id: 1 }, { n: "a", id: 2 }, { n: "a", id: 3 }], item => item.n).map(x => x.id), [2, 3, 1]],
  [65, solutions[65]([1, NaN, 3], [1, NaN, 3]), true],
  [66, solutions[66]([5, 1, 2, 3, 7, 6]), [[1, 2, 3], [5, 6, 7]]],
  [67, solutions[67](1, 6, 2), [1, 3, 5]],
  [68, solutions[68](12, 0, 10), 10],
  [69, solutions[69](1.2345, 2), 1.23],
  [70, solutions[70](3661), "01:01:01"],
  [71, solutions[71]("?a=1&tag=x&tag=y"), { a: "1", tag: ["x", "y"] }],
  [72, solutions[72]({ a: 1, tag: ["x", "y"], skip: null }), "a=1&tag=x&tag=y"],
  [73, solutions[73]("Crème brûlée & Tea"), "creme-brulee-tea"],
  [74, solutions[74]("myVariableName"), "my-variable-name"],
  [75, solutions[75]("my-variable_name"), "myVariableName"],
  [76, solutions[76]("café"), "cafe"],
  [77, solutions[77]("Find the longest word"), "longest"],
  [78, solutions[78]("aaaa", "aa"), 2],
  [79, solutions[79]("banana"), "ban"],
  [80, solutions[80]("aaabbc"), [["a", 3], ["b", 2], ["c", 1]]],
  [81, solutions[81]([["a", 3], ["b", 2]]), "aaabb"],
  [82, solutions[82]("Abc-Z", 2), "Cde-B"],
  [83, solutions[83]("Hello, World!"), "Uryyb, Jbeyq!"],
  [84, solutions[84]("192.168.1.10"), true],
  [85, solutions[85]("roman@example.com"), "r****@example.com"],
  [86, solutions[86]("abcdef", 2), "****ef"],
  [87, solutions[87]("{bad", 7), 7],
  [88, solutions[88]({ a: 1, b: 2 }, ["b", "c"]), { b: 2 }],
  [89, solutions[89]({ a: 1, b: 2 }, ["a"]), { b: 2 }],
  [90, solutions[90]({ a: "x", b: "y" }), { x: "a", y: "b" }],
  [91, solutions[91]({ a: { b: 5 } }, "a.b"), 5],
  [92, solutions[92]({}, "a.b", 7), { a: { b: 7 } }],
  [93, Object.isFrozen(solutions[93]({ nested: {} }).nested), true],
  [94, solutions[94]({ a: { x: 1 }, list: [1] }, { a: { y: 2 }, list: [2] }), { a: { x: 1, y: 2 }, list: [2] }],
  [95, solutions[95](x => x + 1, x => x * 2)(3), 7],
  [96, solutions[96]((a, b, c) => a + b + c)(1)(2)(3), 6],
  [97, solutions[97]((a, b, c) => a + b + c, 1, 2)(3), 6],
  [98, (() => { let calls = 0; const fn = solutions[98](() => ++calls); return [fn(), fn(), calls]; })(), [1, undefined, 1]],
  [99, (() => { const bus = solutions[99](); let value = 0; bus.on("add", n => value += n); const count = bus.emit("add", 3); return [value, count]; })(), [3, 1]],
  [100, (() => { const cache = new solutions[100](2); cache.put(1, 1); cache.put(2, 2); cache.get(1); cache.put(3, 3); return [cache.get(2), cache.get(1), cache.get(3)]; })(), [-1, 1, 3]],
  [101, solutions[101]("MCMXCIV"), 1994],
  [102, solutions[102](1994), "MCMXCIV"],
  [103, solutions[103](1048576), "1.00 MB"],
  [104, solutions[104]("2024-02-29"), true],
  [105, solutions[105]([1, 5, 2, 4]), 3]
];

for (const [id, actual, expected] of tests) {
  assert.deepStrictEqual(actual, expected, "General JavaScript problem " + id);
}
console.log("General JavaScript problems 0056-0105: " + tests.length + " tests passed.");

module.exports = { solutions };
