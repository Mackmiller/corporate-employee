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
scenarioInfo[1] = new Array("It's Monday morning. Do you indulge your boss when they ask how your weekend was?", "I give an in-depth overview and even ask about theirs.", "I quickly move on to work-related conversation.", 9)
scenarioInfo[2] = new Array("No one seems to be working except for you. Do you keep working anyway?", "Of course I do- I'm getting paid to work", "No. If others aren't working, why should I?", 10)
scenarioInfo[3] = new Array("The desk phone starts ringing, but it's your boss' line and they aren't currently in the office. Do you answer it?", "Yes- it could be an important call", "No, not my problem.", 11)
scenarioInfo[4] = new Array("Someone else just took credit for something YOU did. How do you deal with this?", "I'm not going to say anything- my time to shine will come later.", "That's not cool. I'm going to bring it up to the employee... or maybe their boss.", 12)
scenarioInfo[5] = new Array("Phew, it's finally time for lunch. You were hoping to laeve the office to eat on your own, but a coworker asks to eat with you in the cafeteria instead. Do you accept?", "ALright, I'll stay- it would be good to make friends here.", "No way- lunch is MY time and I'm leaving.", 1)
scenarioInfo[6] = new Array("Time to check for emails after lunch. You have a new message that requests information that was already sent to them in a previous email. How do you reply?", "Hi there, attached is the information you are requesting.", "Hi there, please see my original email for the information you are requesting.", 2)
scenarioInfo[7] = new Array("You only have a few hours left in the work day and someone comes to you with an assignment to turn in EOD (end of day). Do you complete the project before you leave work today?", "Of course I do- part of my job is meeting tight deadlines.", "No way. This task is too big for this afternoon and I had already alotted my time to other tasks.", 3)
scenarioInfo[8] = new Array("There's technically one hour left of work. Your boss is MIA and has probably left for the day themself. Do you stay till 5 or leave early?", "I'm being paid to stay until 5, so I'm staying.", "Byeee", 4)
scenarioInfo[9] = new Array("It's after hours, but your boss just called. Do you answer?", "Yes, it could be something urgent", "No, it can wait until work tomorrow.", 5)

//reset count
let count = 0
//reset game points
let points = 0
//DOM variables
let scenario = document.querySelector("#scenarioBox")
let response1 = document.querySelector("#response1")
let response2 = document.querySelector("#response2")
let restart = document.querySelector("#restart")

//FUNCTIONS
const populateScenarioBox = () => {
    //populate divs with scenario info
    if (count == 1) {
        scenario.innerHTML = scenarioInfo[0][0]
        response1.innerHTML = scenarioInfo[0][1]
        response2.innerHTML = scenarioInfo[0][2]
    } else if (count == 2) {
        scenario.innerHTML = scenarioInfo[1][0]
        response1.innerHTML = scenarioInfo[1][1]
        response2.innerHTML = scenarioInfo[1][2]
        //temporary time placeholder for clock
        console.log("the time is" + scenarioInfo[1][3] + " AM")
    } else if (count == 3) {
        scenario.innerHTML = scenarioInfo[2][0]
        response1.innerHTML = scenarioInfo[2][1]
        response2.innerHTML = scenarioInfo[2][2]
        //temporary time placeholder for clock
        console.log("the time is" + scenarioInfo[2][3] + " AM")
    } else if (count == 4) {
        scenario.innerHTML = scenarioInfo[3][0]
        response1.innerHTML = scenarioInfo[3][1]
        response2.innerHTML = scenarioInfo[3][2]
        //temporary time placeholder for clock
        console.log("the time is" + scenarioInfo[3][3] + " AM")
    } else if (count == 5) {
        scenario.innerHTML = scenarioInfo[4][0]
        response1.innerHTML = scenarioInfo[4][1]
        response2.innerHTML = scenarioInfo[4][2]
        //temporary time placeholder for clock
        console.log("the time is" + scenarioInfo[4][3] + " PM")
    } else if (count == 6) {
        scenario.innerHTML = scenarioInfo[5][0]
        response1.innerHTML = scenarioInfo[5][1]
        response2.innerHTML = scenarioInfo[5][2]
        //temporary time placeholder for clock
        console.log("the time is" + scenarioInfo[5][3] + " PM")
    } else if (count == 7) {
        scenario.innerHTML = scenarioInfo[6][0]
        response1.innerHTML = scenarioInfo[6][1]
        response2.innerHTML = scenarioInfo[6][2]
        //temporary time placeholder for clock
        console.log("the time is" + scenarioInfo[6][3] + " PM")
    } else if (count == 8) {
        scenario.innerHTML = scenarioInfo[7][0]
        response1.innerHTML = scenarioInfo[7][1]
        response2.innerHTML = scenarioInfo[7][2]
        //temporary time placeholder for clock
        console.log("the time is" + scenarioInfo[7][3] + " PM")
    } else if (count == 9) {
        scenario.innerHTML = scenarioInfo[8][0]
        response1.innerHTML = scenarioInfo[8][1]
        response2.innerHTML = scenarioInfo[8][2]
        //temporary time placeholder for clock
        console.log("the time is" + scenarioInfo[8][3] + " PM")
    } else if (count == 10) {
        scenario.innerHTML = scenarioInfo[9][0]
        response1.innerHTML = scenarioInfo[9][1]
        response2.innerHTML = scenarioInfo[9][2]
        //temporary time placeholder for clock
        console.log("the time is" + scenarioInfo[9][3] + " PM")
    } else {
        scenario.innerHTML = "PERFORMANCE EVALUATION"
        response1.innerHTML = "I, the computer, have unknowingly been evaluating your answers this entire time. Based on my calculations:"
        if (points <= 20) {
            response2.innerHTML = points + "<br />" + "Abysmal job today from a work standpoint, but you put yourself first- that takes guts! Might I suggest a job change though..."
        } else if (points > 20 && points <= 40) {
            response2.innerHTML = points + "<br />" + "Seems like you perform like an average employee- working hard or hardly working."
        } else if (points > 40) {
            response2.innerHTML = points + "<br />" + "Stellar work today. You could ask for a raise, but I'm doubtful it would happen any time soon."
        }
        //temporary time placeholder for clock
        console.log("game complete")
        //restart button
        restart.style.display = "grid"
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
        count++
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

    restart.addEventListener ("submit", (e) => {
        e.default()
    })
})
