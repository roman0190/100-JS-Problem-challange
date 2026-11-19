// 0106. Retry an Async Task with Exponential Backoff.
// Run: node javascript-practice/0106-retry-async-function.js
const assert = require("node:assert/strict");

async function retryAsync(
  task,
  {
    retries = 3,
    delayMs = 1000,
    factor = 2,
    sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
  } = {}
) {
  if (typeof task !== "function") {
    throw new TypeError("Task must be a function");
  }
  if (!Number.isInteger(retries) || retries < 0) {
    throw new RangeError("Retries must be a non-negative integer");
  }
  if (!Number.isFinite(delayMs) || delayMs < 0) {
    throw new RangeError("Delay must be a non-negative number");
  }
  if (!Number.isFinite(factor) || factor < 1) {
    throw new RangeError("Factor must be a number greater than or equal to 1");
  }

  let attempt = 0;

  while (true) {
    try {
      return await task();
    } catch (error) {
      if (attempt >= retries) throw error;

      await sleep(delayMs * factor ** attempt);
      attempt++;
    }
  }
}

async function runTests() {
  let calls = 0;
  const delays = [];

  const result = await retryAsync(
    async () => {
      calls++;
      if (calls < 3) throw new Error("Temporary API failure");
      return "Success";
    },
    {
      retries: 3,
      delayMs: 100,
      sleep: async ms => delays.push(ms)
    }
  );

  assert.equal(result, "Success");
  assert.equal(calls, 3);
  assert.deepEqual(delays, [100, 200]);

  let failedCalls = 0;

  await assert.rejects(
    retryAsync(
      async () => {
        failedCalls++;
        throw new Error("API unavailable");
      },
      { retries: 2, sleep: async () => {} }
    ),
    /API unavailable/
  );

  assert.equal(failedCalls, 3);

  await assert.rejects(
    retryAsync(null),
    /Task must be a function/
  );

  console.log("All tests passed!");
}

runTests().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
