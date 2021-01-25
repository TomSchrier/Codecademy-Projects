function getSleepHours(day) {
    if (day === 'monday') {
        return 7;
    } else if (day === 'tuesday') {
        return 8;
    } else if (day === 'wednesday') {
        return 8;
    } else if (day === 'thursday') {
        return 8;
    } else if (day === 'friday') {
        return 8;
    } else if (day === 'saturday') {
        return 8;
    } else if (day === 'sunday') {
        return 8;
    } else {
        console.log("error");
    }
}

function getActualSleepHours() {
    let Actualsleep = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
    return Actualsleep;
}

function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log("perfect amount of sleep");
    } else if (actualSleepHours > idealSleepHours) {
        console.log("you slept " + (actualSleepHours - idealSleepHours) + " more hours than needed.");
    } else if (actualSleepHours < idealSleepHours) {
        console.log("you slept " + (idealSleepHours - actualSleepHours) + " hours less than needed.");
    }
}

calculateSleepDebt()