let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 20;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000
}

if (runnerAge > 18 && registeredEarly) {
  console.log("Race number: " + raceNumber + ". You start at 09:30 AM.");
} else if (runnerAge > 18 && !registeredEarly) {
  console.log("Race number: " + raceNumber + ". You start at 11:00 AM.");
} else if (runnerAge < 18) {
  console.log("Race number: " + raceNumber + ". You start at 12:30 AM.");
} else {
  console.log("See the registration desk");
}