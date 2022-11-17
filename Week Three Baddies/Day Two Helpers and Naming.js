function compareDates(dateA, dateB){
    const dateC = new Date()
    const differenceDateA = Math.ceil(Math.abs(dateC.getTime() - dateA.getTime()) / (1000*60*60*24))
    const differenceDateB = Math.ceil(Math.abs(dateC.getTime() - dateB.getTime()) / (1000*60*60*24))
    const dateAToString = dateA.toDateString()
    const dateBToString = dateB.toDateString()
}

function compareTwoDates(dateA, dateB) {
    const currentDate = new Date()
    const currentDateMinusDateA = Math.ceil(Math.abs(currentDate.getTime() - dateA.getTime()) / (1000*60*60*24))
    const currentDateMinusDateB = Math.ceil(Math.abs(currentDate.getTime() - dateB.getTime()) / (1000*60*60*24))
    const dateAToString = dateA.toDateString()
    const dateBToString = dateB.toDateString()
    if (currentDateMinusDateA * 2 <= currentDateMinusDateB) {
        return `If you thought ${dateAToString} was a long wait, wait until you see how long it is until ${dateBToString}.`
    } else if (currentDateMinusDateA < currentDateMinusDateB) {
        return `Don't worry, ${dateBToString} isn't too much farther away than ${dateAToString} in the scheme of things.`
    } else if (currentDateMinusDateA === currentDateMinusDateB) {
        return `They're the same number of days away!`
    } else {
        return `You know ${dateAToString} is closer, right?`
    }
}

function compareTwoDatesVersionTwo(dateA, dateB) {
    const currentDate = new Date()
    const currentDateMinusDateA = Math.ceil(Math.abs(currentDate.getTime() - dateA.getTime()) / (1000*60*60*24))
    const currentDateMinusDateB = Math.ceil(Math.abs(currentDate.getTime() - dateB.getTime()) / (1000*60*60*24))
    const dateAToString = dateA.toDateString()
    const dateBToString = dateB.toDateString()
    if (currentDateMinusDateA < currentDateMinusDateB) {
        const dateBDividedByA = Math.floor(currentDateMinusDateB/currentDateMinusDateA)
        return `Looks like ${dateBToString} is ${dateBDividedByA} times farther away than ${dateAToString}.`
    } else if (currentDateMinusDateA === currentDateMinusDateB) {
        return `Same exact date there, mate.`
    } else {
        const dateBDividedByA = Math.floor(currentDateMinusDateA/currentDateMinusDateB)
        return `Looks like ${dateAToString} is ${dateBDividedByA} times farther away than ${dateBToString}.`
    }
}

function timeUntilAndBetweenDates(dateA, dateB) {
    const currentDate = new Date()
    const currentDateMinusDateA = Math.ceil(Math.abs(currentDate.getTime() - dateA.getTime()) / (1000*60*60*24))
    const currentDateMinusDateB = Math.ceil(Math.abs(currentDate.getTime() - dateB.getTime()) / (1000*60*60*24))
    const dateAToString = dateA.toDateString()
    const dateBToString = dateB.toDateString()
    const dateBMinuseDateA = currentDateMinusDateB-currentDateMinusDateA
    return `You have ${currentDateMinusDateA} days left until ${dateAToString}, and ${currentDateMinusDateB} days left until ${dateBToString}. There are ${dateBMinuseDateA} days between them.`
}

// feel free to plug these example dates into your functions
const dateA = new Date(2022,09,26)
const dateB = new Date(2022,11,25)
