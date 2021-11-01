// Code your solution in this file!

function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks - 42)
}

function distanceFromHqInFeet(blocks){

return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(startingblock,endingblock){

    return Math.abs(startingblock - endingblock) * 264 

}

function calculatesFarePrice(startingblock,endingblock){

if (distanceTravelledInFeet(startingblock,endingblock) > 2500){
    return "cannot travel that far"
}
else if (distanceTravelledInFeet(startingblock,endingblock) > 2000) {
    return 25
}
else if (distanceTravelledInFeet(startingblock,endingblock) > 400 && distanceTravelledInFeet(startingblock,endingblock) <= 2000){
    return (distanceTravelledInFeet(startingblock,endingblock) - 400) * .02
}
else {
    return 0
}
}