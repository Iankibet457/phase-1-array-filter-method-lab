// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers,input){
    let results = drivers.filter(driver => driver.toLowerCase() === input.toLowerCase())
    return results

}
console.log(findMatching(drivers, "Bobby"))

function fuzzyMatch(arr,string){
    return arr.filter((driver=> driver.toLowerCase().startsWith(string.toLowerCase())))
}

function matchName(arr,str){
    return arr.filter((driver)=> driver.name === str)
}