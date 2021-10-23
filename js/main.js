// tried to use object at first:
// const scenarioInfo = {
//     //scenario 0
//     scenario0: { 
//      scenario: "It's Sunday night. Do you have Sunday scaries about work tomorrow?",
//      //a = positive, b = negative
//      a: "No, feeling good about tomorrow.",
//      b: "Yes, feeling anxious about having work tomorrow."
//      },
//      //scenario 1
//      scenario1: { 
//      scenario: "It's Monday morning. Do you indulge your boss when they ask how your weekend was?",
//      a: "I give them an overview of my weekend and even ask about theirs.",
//      b: "I barely respond and move on to work-related topics.",
//      }
//  }
 
//DECLARE VARIABLES
//set up arrays
var scenarioInfo = new Array ();
scenarioInfo[0] = new Array ("It's Sunday night. Do you have Sunday scaries about work tomorrow?", "No", "Yes")
scenarioInfo[1] = new Array("It's Monday morning. Do you indulge your boss when they ask how your weekend was?", "I give an in-depth overview and even ask about theirs.", "I quickly move on to work-related conversation.", 8)
//reset count
let count = 0
//reset game points
let points = 0
//DOM variables
let scenario = document.querySelector("#scenarioBox")
let response1 = document.querySelector("#response1")
let response2 = document.querySelector("#response2")

//FUNCTIONS
const populateScenarioBox = () => {

    count++
    //populate divs with scenario info
    if (count == 1) {
        scenario.innerHTML = scenarioInfo[0][0]
        response1.innerHTML = scenarioInfo[0][1]
        response2.innerHTML = scenarioInfo[0][2]
    } else if (count > 1) {
        scenario.innerHTML = scenarioInfo[1][0]
        response1.innerHTML = scenarioInfo[1][1]
        response2.innerHTML = scenarioInfo[1][2]
    }
}

//total score function
//reset game function

// form.addEventListener ("submit", populateScenarioBox)

//ONCE PAGE LOADS
document.addEventListener ("DOMContentLoaded", () => {

    //START GAME
    //when start button is pressed, change text to scenario 0
    form.addEventListener ("submit", (e) => {
        e.preventDefault()
        populateScenarioBox()
        console.log(count)
        start.style.display = "none"
    })
    //SCENARIOS 1-10
    response1.addEventListener("click", () => {
        count++
        points = points + 5
        console.log("The count is" + count)
        console.log("The point count is" + points)
        populateScenarioBox()
    })
    response2.addEventListener("click", () => {
        count++
        points = points - 5
        console.log("The count is" + count)
        console.log("The point count is" + points)
        populateScenarioBox()
    })
})
