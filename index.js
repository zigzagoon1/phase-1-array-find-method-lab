// code your solution here
array = [{
    year: 2018,
    result: win
}, {
    year: 2019, 
    result: lose
}]

function superbowlWin(arrayOfObjects) {
    const match = arrayOfObjects.find(x => x.result === "W");
    if (match !== null && match !== undefined) {
        return match.year;
    }
    else {
        return undefined;
    }
}

