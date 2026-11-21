// 0108. Deduplicate Concurrent Async Requests (Single-Flight).
// Use case: share one pending API request when multiple components need the same resource.
// Run: node javascript-practice/0108-single-flight-request-deduplicator.js
const assert = require("node:assert/strict");

function createRequestDeduplicator() {
  const inFlight = new Map();

  return function dedupeRequest(key, request) {
    if (typeof request !== "function") {
      throw new TypeError("Request must be a function");
    }

    if (inFlight.has(key)) {
      return inFlight.get(key);
    }

    const pending = Promise.resolve().then(request);
    inFlight.set(key, pending);

    const clearIfCurrent = () => {
      if (inFlight.get(key) === pending) {
        inFlight.delete(key);
      }
    };

    pending.then(clearIfCurrent, clearIfCurrent);
    return pending;
  };
}

async function runTests() {
  const dedupeRequest = createRequestDeduplicator();
  let calls = 0;
  let resolvePending;
  const pendingResponse = new Promise(resolve => {
    resolvePending = resolve;
  });

  const first = dedupeRequest("user:42", () => {
    calls++;
    return pendingResponse;
  });
  const second = dedupeRequest("user:42", () => {
    calls++;
    return Promise.resolve({ id: 99 });
  });

  assert.strictEqual(first, second);
  resolvePending({ id: 42, name: "Roman" });
  assert.deepEqual(await first, { id: 42, name: "Roman" });
  assert.equal(calls, 1);

  const [profile, settings] = await Promise.all([
    dedupeRequest("profile", () => "profile-data"),
    dedupeRequest("settings", () => "settings-data")
  ]);
  assert.deepEqual([profile, settings], ["profile-data", "settings-data"]);

  let refreshCalls = 0;
  assert.equal(await dedupeRequest("refresh", () => ++refreshCalls), 1);
  assert.equal(await dedupeRequest("refresh", () => ++refreshCalls), 2);
  assert.equal(refreshCalls, 2);

  const expectedError = new Error("Temporary API failure");
  await assert.rejects(
    dedupeRequest("failed-request", () => Promise.reject(expectedError)),
    error => error === expectedError
  );
  assert.equal(await dedupeRequest("failed-request", () => "recovered"), "recovered");

  const syncError = new Error("Synchronous request failure");
  await assert.rejects(
    dedupeRequest("sync-failure", () => {
      throw syncError;
    }),
    error => error === syncError
  );
  assert.equal(await dedupeRequest("sync-failure", () => "recovered"), "recovered");

  assert.throws(
    () => dedupeRequest("invalid", null),
    /Request must be a function/
  );

  console.log("Problem 0108: all tests passed.");
}

module.exports = createRequestDeduplicator;

if (require.main === module) {
  runTests().catch(error => {
    console.error(error);
    process.exitCode = 1;
  });
}
