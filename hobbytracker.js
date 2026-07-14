// Array of hobby log entries — each entry records a day's activity, duration, and mood
const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// Calculates the total minutes spent across all logged sessions
function totalTime(log) {
  // reduce() is a higher-order function: it takes a callback and "folds"
  // the array down into a single value (here, a running sum)
  // sum starts at 0, and each session's minutes are added to it
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

// Returns an array of hobby names with no duplicates
function uniqueHobbies(log) {
  // map() is a higher-order function: it transforms each entry into just its "hobby" field,
  // producing a new array of hobby names (with duplicates)
  const names = log.map(entry => entry.hobby);
  // Set automatically removes duplicate values; spreading it back into an array
  // gives us the unique hobby names in first-seen order
  return [...new Set(names)];
}

// Returns all sessions that lasted longer than a given number of minutes
function longSessions(log, minMinutes) {
  // filter() is a higher-order function: it keeps only entries where the
  // callback returns true — here, sessions strictly greater than minMinutes
  return log.filter(entry => entry.minutes > minMinutes);
}

// Counts how many sessions match a specific mood
function countMood(log, moodType) {
  // filter() narrows the log down to matching-mood entries,
  // then .length gives us the count of how many were found
  return log.filter(entry => entry.mood === moodType).length;
}

// IMPROVEMENT SUGGESTION:
// countMood() and longSessions() both filter the log by a single field/condition.
// This could be generalized into one reusable function, e.g.:
//   function filterBy(log, field, predicate) {
//     return log.filter(entry => predicate(entry[field]));
//   }
// Then countMood could become: filterBy(log, "mood", m => m === "relaxed").length
// This reduces duplication and makes it easy to add new filters (e.g. by "day" or "hobby")
// without writing a new function each time.

console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));

// New test: check how many "creative" mood sessions were logged
console.log("Creative sessions:", countMood(hobbyLog, "creative"));
