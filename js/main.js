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
//FUNCTIONS

const populateScenarioBox = () => {
    let scenario = document.querySelector("#scenarioBox")
    if (count == 1) {
        scenario.innerHTML = scenarioInfo[0][0]
    }
    //scenario.textContent = scenarioInfo[0][0]
}
//total score function
//start game function
//reset game function

form.addEventListener ("submit", populateScenarioBox)

//ONCE PAGE LOADS
document.addEventListener ("DOMContentLoaded", () => {

    //when start button is pressed, change text to scenario 0
    form.addEventListener ("submit", (e) => {
        e.preventDefault()
        count++
        console.log(count)
        populateScenarioBox()
    })

})
