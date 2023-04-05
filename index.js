// Code your solution in this file!
const returnfirstTwoDrivers =function (drivers) {
    return drivers. slice(0, 2);
};
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);

};
let selectingDrivers ={returnFirstTwoDrivers, returnLastTwoDrivers};
function createFareMultiplier(number)
{
    return function (){
        return number **2;
    };
}
const fare = function createFareMultiplier(number){
return function (){
    return number **2;
 };
};
function fareDoubler(fare){
    let doubled = fare *2;
    return doubled;

}
function fareTripler(fare){
    return fare*3;

}
function selectDifferentDrivers(arrayofDrivers, myfunction0){
    if(myFunction == returnFirstTwoDrivers){
        return arrayofDrivers.slice(0, 2);

    }
else if(myFunction == returnLastTwoDrivers) {
    returnarrayofDrivers.slice(-2);
}
    
}





