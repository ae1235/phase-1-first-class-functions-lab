// Code your solution in this file!
const returnFirstTwoDrivers = function (arrOfDrivers) {
    return arrOfDrivers.slice(o, 2)

}

const returnLastTwoDrivers = function (arrOfDrivers) {
    return arrOfDrivers.slice(-2)
}

let bothDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplyFactor) {
    return function(fare){
    return multiplyFactor * fare
}
}


const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrOfDrivers, bothDrivers) {
    if(bothDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrOfDrivers)
    }else {
        return returnLastTwoDrivers(arrOfDrivers)
    }
}