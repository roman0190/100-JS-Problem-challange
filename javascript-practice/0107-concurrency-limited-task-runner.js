// 0107. Run Async Tasks with a Concurrency Limit.
// Use case: limit simultaneous API requests or file uploads while preserving result order.
// Run: node javascript-practice/0107-concurrency-limited-task-runner.js
const assert = require("node:assert/strict");

async function runWithConcurrency(tasks, limit) {
  if (!Array.isArray(tasks)) {
    throw new TypeError("Tasks must be an array");
  }
  if (!Number.isInteger(limit) || limit < 1) {
    throw new RangeError("Concurrency limit must be a positive integer");
  }
  if (Array.from(tasks).some(task => typeof task !== "function")) {
    throw new TypeError("Every task must be a function");
  }

  const results = new Array(tasks.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < tasks.length) {
      const index = nextIndex++;

      try {
        results[index] = {
          status: "fulfilled",
          value: await tasks[index]()
        };
      } catch (reason) {
        results[index] = { status: "rejected", reason };
      }
    }
  }

  const workerCount = Math.min(limit, tasks.length);
  await Promise.all(Array.from({ length: workerCount }, worker));
  return results;
}

async function runTests() {
  const delays = [40, 10, 20, 5];
  let active = 0;
  let maximumActive = 0;

  const tasks = delays.map((delay, index) => async () => {
    active++;
    maximumActive = Math.max(maximumActive, active);
    await new Promise(resolve => setTimeout(resolve, delay));
    active--;
    return `task-${index}`;
  });

  const results = await runWithConcurrency(tasks, 2);
  assert.equal(maximumActive, 2);
  assert.deepEqual(results, [
    { status: "fulfilled", value: "task-0" },
    { status: "fulfilled", value: "task-1" },
    { status: "fulfilled", value: "task-2" },
    { status: "fulfilled", value: "task-3" }
  ]);

  const expectedError = new Error("API request failed");
  const mixedResults = await runWithConcurrency([
    () => Promise.resolve(42),
    () => Promise.reject(expectedError),
    () => { throw new Error("Synchronous failure"); }
  ], 3);

  assert.equal(mixedResults[0].value, 42);
  assert.equal(mixedResults[1].status, "rejected");
  assert.equal(mixedResults[1].reason, expectedError);
  assert.equal(mixedResults[2].status, "rejected");
  assert.match(mixedResults[2].reason.message, /Synchronous failure/);
  assert.deepEqual(await runWithConcurrency([], 4), []);

  await assert.rejects(runWithConcurrency(null, 2), /Tasks must be an array/);
  await assert.rejects(runWithConcurrency([], 0), /positive integer/);
  await assert.rejects(runWithConcurrency([() => 1, null], 2), /Every task/);
  await assert.rejects(runWithConcurrency(new Array(1), 1), /Every task/);

  console.log("Problem 0107: all tests passed.");
}

module.exports = runWithConcurrency;

if (require.main === module) {
  runTests().catch(error => {
    console.error(error);
    process.exitCode = 1;
  });
}
