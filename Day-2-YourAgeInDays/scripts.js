const yorAgeInDays = () => {
    let person = prompt("What year were you born..?");
    document.getElementById("input").innerHTML = ` You are ${person * 12 * 30} Days old`;



}
const restValue = () => {
    document.getElementById("input").innerHTML = "";


}