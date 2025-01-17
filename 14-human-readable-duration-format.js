// 14-human-readable-duration-format.js

function formatDuration(seconds) {
  // Dealing with only seconds
  if (seconds === 1) {
    return `${seconds} second`
  }
  if (seconds > 1 && seconds <= 59) {
    return `${seconds} seconds`
  }

  if (seconds > 60 && seconds < 3600) {
    // Dealing with minutes:
    const remainingSeconds = seconds % 60
    const remainingMinutes = Math.floor(seconds / 60)
    return `${remainingMinutes} minutes and ${remainingSeconds} seconds`
  }

  // Dealing with hours
  if (seconds >=3600) {
    if (seconds === 3600) {
      return '1 hour'
    }
    const remainingHours = Math.floor((seconds / 3600))
    const remainingMinutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60
    return `${remainingHours} hours ${remainingMinutes} minutes and ${remainingSeconds} seconds`
  }

}

console.log(formatDuration(1)) // "1 second"
console.log(formatDuration(59)) // "1 second"
console.log(formatDuration(62)) // "1 minute and 2 seconds"
console.log(formatDuration(3550)) // "1 minute and 2 seconds"
console.log(formatDuration(3662)) // "1 hour, 1 minute and 2 seconds"

/*
* For seconds = 62, your function should return
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
*/



// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(formatDuration(1), "1 second");
//     assert.strictEqual(formatDuration(62), "1 minute and 2 seconds");
//     assert.strictEqual(formatDuration(120), "2 minutes");
//     assert.strictEqual(formatDuration(3600), "1 hour");
//     assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
//   });
// });