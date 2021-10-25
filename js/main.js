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
scenarioInfo[0] = new Array ("<h6><blockquote><strong>It's Sunday night. Sometimes people get anxiety about going to work on Monday, and this is known as the Sunday Scaries. Do you have Sunday Scaries about work tomorrow?</strong></blockquote></h6>", "No, I'm feeling good.", "Yes, I'm already anxious.")
scenarioInfo[1] = new Array("<h6><blockquote><strong>It's Monday morning. Do you indulge your boss when they ask you how your weekend was?</strong></blockquote></h6>", "I gave an in-depth overview of my weekend and even ask about theirs.", "Not interested in small talk. I quickly move on to work-related conversation.", 9)
scenarioInfo[2] = new Array("<h6><blockquote><strong>No one seems to be working except for you. Do you keep working anyway?</strong></blockquote></h6>", "Of course I do- I'm getting paid to work!", "No way. If others aren't working, why should I?", 10)
scenarioInfo[3] = new Array("<h6><blockquote><strong>The desk phone starts ringing, but it's your boss' line and they aren't currently in the office. Do you answer the call?</strong></blockquote></h6>", "Of course, it could be an important call.", "Not my problem, I'm going to let it ring.", 11)
scenarioInfo[4] = new Array("<h6><blockquote><strong>It's time for the weekly department meeting. Someone else just took credit for <em>your</em> idea. Should you say something?</strong></blockquote></h6>", "I'm not going to say anything- my time to shine will come later.", "That's not cool. I'm going to bring it up to the employee... or maybe our boss.", 12)
scenarioInfo[5] = new Array("<h6><blockquote><strong>Phew, it's finally time for lunch. You were hoping to leave the office to eat on your own, but a coworker asks to eat with you in the cafeteria instead. Do you accept?</strong></blockquote></h6>", "Alright, I'll stay- it would be good to make friends with colleagues.", "Lunch is a time for me to get <em>away</em> from work. Raincheck maybe?", 1)
scenarioInfo[6] = new Array("<h6><blockquote><strong>Time to check for emails after lunch. You have a new message that requests information already sent to them in a previous email. How do you reply?</strong></blockquote></h6>", "'Attached is the information you are requesting.'", "'Please see my previous email for the information you are requesting.'", 2)
scenarioInfo[7] = new Array("<h6><blockquote><strong>You only have a few hours left in the work day and someone comes to you with a task to turn in EOD (end of day). Do you complete the project today?</strong></blockquote></h6>", "Yes, finishing it today because tight deadlines are to be expected.", "No way. Completing this task this afternoon is above my paygrade.", 3)
scenarioInfo[8] = new Array("<h6><blockquote><strong>There's technically one hour left of work. Your boss is MIA and has probably left for the day. Do you stay until 5 or leave early?</strong></blockquote></h6>", "I'm being paid to stay until 5, so that's when I'll leave.", "Leaving early, of course! Not interested in a rush hour commute home.", 4)
scenarioInfo[9] = new Array("<h6><blockquote><strong>It's after hours, but your boss just called your personal phone. Do you answer?</strong></blockquote></h6>", "Yes, it could be something urgent", "No, it can wait until work tomorrow.", 5)
scenarioInfo[10] = new Array("<h6><blockquote><strong>Navigate your way through a series of corporate cliches for each hour of the nine-to-five work day.</strong></blockquote></h6><p>Don't worry, you'll have your office's classic analog clock helping you keep track of the time of day.</p>")
//random number
let number = 0
//reset count
let count = 0
//reset game points
let points = 0
//music audio
let audio = new Audio("officesounds.wav")

//DOM variables
let scenario = document.querySelector("#scenarioBox")
let response1 = document.querySelector("#response1")
let response2 = document.querySelector("#response2")
let restart = document.querySelector("#restart")
let restartDiv = document.querySelector("#restartform")

//FUNCTIONS
//clock
const hourRotation = (hour) => {
    let hourDegree = (hour/12) * 360
    let el = document.getElementById("hour");
    el.style.transform = "rotate( " + hourDegree + "deg)";
    //console.log(hourDegree)
}
//game
const populateScenarioBox = () => {
    response1.style.display = "block"
    response2.style.display = "block"
    //populate divs with scenario info
    if (count == 1) {
        scenario.innerHTML = scenarioInfo[0][0]
        response1.innerHTML = scenarioInfo[0][1]
        response2.innerHTML = scenarioInfo[0][2]
    } else if (count == 2) {
        audio.play()
        audio.loop = true;
        audio.volume = .2
        scenario.innerHTML = scenarioInfo[1][0]
        response1.innerHTML = scenarioInfo[1][1]
        response2.innerHTML = scenarioInfo[1][2]
        hourRotation(scenarioInfo[1][3])
    } else if (count == 3) {
        scenario.innerHTML = scenarioInfo[2][0]
        response1.innerHTML = scenarioInfo[2][1]
        response2.innerHTML = scenarioInfo[2][2]
        hourRotation(scenarioInfo[2][3])
        randomNumber()
        console.log(number)
    } else if (count == 4) {
         scenario.innerHTML = scenarioInfo[3][0]
        response1.innerHTML = scenarioInfo[3][1]
        response2.innerHTML = scenarioInfo[3][2]
        hourRotation(scenarioInfo[3][3])
        randomNumber()
        console.log(number)
    } else if (count == 5) {
        scenario.innerHTML = scenarioInfo[4][0]
        response1.innerHTML = scenarioInfo[4][1]
        response2.innerHTML = scenarioInfo[4][2]
        hourRotation(scenarioInfo[4][3])
    } else if (count == 6) {
        scenario.innerHTML = scenarioInfo[5][0]
        response1.innerHTML = scenarioInfo[5][1]
        response2.innerHTML = scenarioInfo[5][2]
        hourRotation(scenarioInfo[5][3])
        randomNumber()
        console.log(number)
    } else if (count == 7) {
        scenario.innerHTML = scenarioInfo[6][0]
        response1.innerHTML = scenarioInfo[6][1]
        response2.innerHTML = scenarioInfo[6][2]
        hourRotation(scenarioInfo[6][3])
    } else if (count == 8) {
        scenario.innerHTML = scenarioInfo[7][0]
        response1.innerHTML = scenarioInfo[7][1]
        response2.innerHTML = scenarioInfo[7][2]
        hourRotation(scenarioInfo[7][3])
        randomNumber()
        console.log(number)
    } else if (count == 9) {
        scenario.innerHTML = scenarioInfo[8][0]
        response1.innerHTML = scenarioInfo[8][1]
        response2.innerHTML = scenarioInfo[8][2]
        hourRotation(scenarioInfo[8][3])
        randomNumber()
        console.log(number)
    } else if (count == 10) {
        scenario.innerHTML = scenarioInfo[9][0]
        response1.innerHTML = scenarioInfo[9][1]
        response2.innerHTML = scenarioInfo[9][2]
        hourRotation(scenarioInfo[9][3])
    } else {
        scenario.innerHTML = "<h5>PERFORMANCE EVALUATION:</h5>"
        response1.innerHTML = "<strong>" + points + " points </strong>"
        if (points <= 20) {
            response2.innerHTML = "You made poor choices today from a work standpoint, but you put yourself first- that takes guts! Might I suggest a job change though..."
            response1.style.color = "red"
        } else if (points > 20 && points <= 40) {
            response2.innerHTML = "You performed as an average employee today: working hard or hardly working."
            response1.style.color = "yellow"
        } else if (points > 40) {
            response2.innerHTML = "Stellar work today. You could ask for a raise, but I'm doubtful it would happen any time soon."
            response1.style.color = "green"
        }
        response1.style.backgroundColor = "#b2dfdb"
        response2.style.backgroundColor = "#b2dfdb"
        console.log("game complete")
        //restart button
        restartDiv.style.display = "inline-block"
        restart.style.display = "inline-block"
    }
}
//reset
const resetGame = () => {
    count = 0
    points = 0
    scenario.innerHTML = scenarioInfo[10][0]
    response1.innerHTML = ""
    response2.innerHTML = ""
    start.style.display = "inline-block"
    restartDiv.style.display = "none"
    restart.style.display = "none"
    response1.style.backgroundColor = ""
    response2.style.backgroundColor = ""
    response1.style.color = "black"
    response1.style.display = "none"
    response2.style.display = "none"
    audio.pause()
}

//random wifi outage
const randomNumber = () => {
    number = Math.floor(Math.random() * 100)
    //random integer generator 
    if (number > 90) {
        response1.href = "#modal5"
        const elem5 = document.querySelector("#modal5")
        const instance5 = M.Modal.init(elem5, {dismissible: false})
        instance5.open()
        resetGame()
    } else {
        response1.href = "#modal1"
        const elem5 = document.querySelector("#modal5")
        const instance5 = M.Modal.init(elem5, {dismissible: false})
        instance5.destroy()
    }
}

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
    //response1 clicked
    response1.addEventListener("click", () => {
        count++
        points = points + 5
        console.log("The count is" + count)
        console.log("The point count is" + points)
        //phone scenario modal is default starting modal because it is first in response1
        if (count === 5) {
            const elem1 = document.querySelector("#modal1")
            const instance = M.Modal.init(elem1, {dismissible: false})
            instance.open()
        } else {
            const elem1 = document.querySelector("#modal1")
            const instance = M.Modal.init(elem1, {dismissible: false})
            instance.destroy()
        }
        //lunch scenario modal
        if (count === 7) {
            response1.href = "#modal2"
            const elem2 = document.querySelector("#modal2")
            const instance2 = M.Modal.init(elem2, {dismissible: false})
            instance2.open()
        } else {
            response1.href = "#modal1"
            const elem2 = document.querySelector("#modal2")
            const instance2 = M.Modal.init(elem2, {dismissible: false})
            instance2.destroy()
        }
        //after hours scenario modal
        if (count === 11) {
            response1.href = "#modal6"
            const elem6 = document.querySelector("#modal6")
            const instance6 = M.Modal.init(elem6, {dismissible: false})
            instance6.open()
        } else {
            response1.href = "#modal1"
            const elem6 = document.querySelector("#modal6")
            const instance6 = M.Modal.init(elem6, {dismissible: false})
            instance6.destroy()
        }
        populateScenarioBox()
    })
    //response 2 clicked
    response2.addEventListener("click", () => {
        count++
        points = points - 5
        console.log("The count is" + count)
        console.log("The point count is" + points)
        //leave early scenario modal is default starting modal because it is first in response2
        if (count === 10) {
            const elem3 = document.querySelector("#modal3")
            const instance3 = M.Modal.init(elem3, {dismissible: false})
            instance3.open()
        } else {
            const elem3 = document.querySelector("#modal3")
            const instance3 = M.Modal.init(elem3, {dismissible: false})
            instance3.destroy()
        }
        //after hours scenario modal
        if (count === 11) {
            response2.href = "#modal4"
            const elem4 = document.querySelector("#modal4")
            const instance4 = M.Modal.init(elem4, {dismissible: false})
            instance4.open()
        } else {
            response1.href = "#modal3"
            const elem4 = document.querySelector("#modal4")
            const instance4 = M.Modal.init(elem4, {dismissible: false})
            instance4.destroy()
        }
        populateScenarioBox()
    })

    //RESET GAME
    restartform.addEventListener ("submit", (e) => {
        resetGame()
        console.log("clicked")
    })
})
