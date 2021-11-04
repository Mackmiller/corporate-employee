//============= DECLARE VARIABLES ===============
//core scenario arrays
let scenarioInfo = new Array ()
scenarioInfo[0] = new Array ("<h6><blockquote><strong>It's Sunday night. Are you already feeling anxious about work tomorrow?</strong></blockquote></h6>", "No, I'm feeling good.", "Yes, I'm already anxious.")
scenarioInfo[1] = new Array("<h6><blockquote><strong>It's Monday morning. Do you indulge your boss when they ask about your weekend?</strong></blockquote></h6>", "I gave an in-depth overview of my weekend and even ask about theirs.", "Not interested in small talk. I quickly move on to work-related conversation.", 9)
scenarioInfo[2] = new Array("<h6><blockquote><strong>No one seems to be working except for you. Do you keep working anyway?</strong></blockquote></h6>", "Of course I do- I'm getting paid to work!", "No way. If others aren't working, why should I?", 10)
scenarioInfo[3] = new Array("<h6><blockquote><strong>The desk phone starts ringing, but it's your boss' line and they aren't currently in the office. Do you answer the call?</strong></blockquote></h6>", "Yes, because it could be an important call.", "Not my problem, I'm going to let it ring.", 11)
scenarioInfo[4] = new Array("<h6><blockquote><strong>It's time for the weekly department meeting. Someone else just took credit for <em>your</em> idea. Should you say something?</strong></blockquote></h6>", "I'm not going to say anything. My time to shine will come later.", "That's not cool. I'm going to bring it up to the employee... or maybe our boss.", 12)
scenarioInfo[5] = new Array("<h6><blockquote><strong>Phew, it's finally time for lunch. You were hoping to leave the office to eat on your own, but a coworker asks to eat with you in the cafeteria instead. Do you accept?</strong></blockquote></h6>", "Alright, I'll stay- it would be good to make friends with colleagues.", "Lunch is a time for me to get <em>away</em> from work. Raincheck maybe?", 1)
scenarioInfo[6] = new Array("<h6><blockquote><strong>Time to check for emails after lunch. You have a new message that requests information already sent to them in a previous email. How do you reply?</strong></blockquote></h6>", "Attached is the information you are requesting.", "Please see my previous email for the information you are requesting.", 2)
scenarioInfo[7] = new Array("<h6><blockquote><strong>You only have a few hours left in the work day and someone assigns a task to turn in by EOD (end of day). Do you complete the project today?</strong></blockquote></h6>", "Yes, finishing it today because tight deadlines are to be expected.", "No way. Completing this task this afternoon is above my paygrade.", 3)
scenarioInfo[8] = new Array("<h6><blockquote><strong>There's technically one hour left of work. Your boss is nowhere to be seen. Do you stay until 5 or leave early?</strong></blockquote></h6>", "I'm being paid to stay until 5, so that's when I'll leave.", "Leaving early, of course! Not interested in a rush hour commute home.", 4)
scenarioInfo[9] = new Array("<h6><blockquote><strong>It's after hours, but your boss just called your personal phone. Do you answer?</strong></blockquote></h6>", "Yes, it could be something urgent", "No, it can wait until work tomorrow.", 5)
scenarioInfo[10] = new Array("<h6><blockquote><strong>Navigate your way through a series of corporate cliches for each hour of the nine-to-five work day.</strong></blockquote></h6><p>Don't worry, you'll have your office's classic analog clock helping you keep track of the time of day.</p>")
//resignation array
let resignInfo = new Array ()
resignInfo[0] = new Array("<h6><blockquote><strong>You've thought about it long and hard and have decided to resign. Do you resign tonight or give two weeks' notice?</strong></blockquote></h6>", "Two weeks notice.", "As soon as possible- tonight.")
//random number variable for num generator 1 (wifi outage)
let number = 0
//random number variable for num generator 2 (ceiling leak)
let number2 = 0
//reset click count
let count = 0
//reset game points
let points = 0
//add music audio
let audio = new Audio("audio/officesounds.wav") //background noise
let audio1 = new Audio("audio/happy.wav") //positive sound
let audio2 = new Audio("audio/sad.wav") //negative sound
let audio3 = new Audio("audio/splash.wav") //ceiling drip
let audio4 = new Audio("audio/thunder.wav") //thunder clap
//DOM variables
let hourHand = document.getElementById("hour") //clock
let scenario = document.querySelector("#scenarioBox")
let response1 = document.querySelector("#response1")
let response2 = document.querySelector("#response2")
let restart = document.querySelector("#restart")
let restartDiv = document.querySelector("#restartform")
let resign = document.querySelector("#resign")
let resignDiv = document.querySelector("#resignform")

//============= GAME FUNCTIONS ===============
//clock
const hourRotation = (hour) => {
    let hourDegree = (hour/12) * 360
    hourHand.style.transform = "rotate( " + hourDegree + "deg)"
}
//core game scenario info
const populateScenarioBox = () => {
    response1.style.display = "block"
    response2.style.display = "block"
    //populate divs with scenario info, based on click count
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
        //rotate clock hand based on scenarioInfo array element 3
        hourRotation(scenarioInfo[1][3])
    } else if (count == 3) {
        scenario.innerHTML = scenarioInfo[2][0]
        response1.innerHTML = scenarioInfo[2][1]
        response2.innerHTML = scenarioInfo[2][2]
        hourRotation(scenarioInfo[2][3])
        //potential random wifi outage
        randomWifi()
    } else if (count == 4) {
        scenario.innerHTML = scenarioInfo[3][0]
        response1.innerHTML = scenarioInfo[3][1]
        response2.innerHTML = scenarioInfo[3][2]
        hourRotation(scenarioInfo[3][3])
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
        //potential random wifi outage
        randomWifi()
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
        //potential random drip
        randomRain()
    } else if (count == 9) {
        scenario.innerHTML = scenarioInfo[8][0]
        response1.innerHTML = scenarioInfo[8][1]
        response2.innerHTML = scenarioInfo[8][2]
        hourRotation(scenarioInfo[8][3])
        //potential random wifi outage
        randomWifi()
    } else if (count == 10) {
        scenario.innerHTML = scenarioInfo[9][0]
        response1.innerHTML = scenarioInfo[9][1]
        response2.innerHTML = scenarioInfo[9][2]
        hourRotation(scenarioInfo[9][3])
    } else if (count == 11) {
        //end of core game/performance evaluation
        scenario.innerHTML = "<h5>PERFORMANCE EVALUATION:</h5>"
        if (points <= 20) {
            response1.innerHTML = "<strong>POOR</strong>"
            response1.style.color = "red"
            response2.innerHTML = "You made poor choices today from a work standpoint, but you put yourself first- that takes guts! But maybe a different job would be a better fit."
        } else if (points > 20 && points <= 40) {
            response1.innerHTML = "<strong>MEDIOCRE</strong>"
            response1.style.color = "yellow"
            response2.innerHTML = "You performed as an average employee today: working hard or hardly working."
        } else if (points > 40) {
            response1.innerHTML = "<strong>EXCELLENT</strong>"
            response1.style.color = "green"
            response2.innerHTML = "Stellar work today. You could ask for a raise, but let's be honest... it won't happen any time soon (if at all)."
        }
        //disable hover
        response1.style.backgroundColor = "#b2dfdb"
        response2.style.backgroundColor = "#b2dfdb"
        //re-display restart button
        // setTimeout(()=> {
        // }, 2000)
        restartDiv.style.display = "inline-block"
        restart.style.display = "inline-block"
        resignDiv.style.display = "inline-block"
        resign.style.display = "inline-block"
    } else if (count === 12) {
        //resign
        resignWork()
    }
}
// random num generator for wifi outage
const randomWifi = () => {
    //random integer generator 
    number = Math.floor(Math.random() * 100)
    //random wifi outage and game restart
    if (number > 85) {
        //display modal 5 (wifi down)
        response1.href = "#modal5"
        const elem5 = document.querySelector("#modal5")
        const instance5 = M.Modal.init(elem5, {dismissible: false})
        instance5.open()
        resetGame()
    } else {
        //game continues without interruption 
        response1.href = "#modal1"
        const elem5 = document.querySelector("#modal5")
        const instance5 = M.Modal.init(elem5, {dismissible: false})
        instance5.destroy()
    }
}
// random num generator for ceiling leak
const randomRain = () => {
    //random integer generator 
    number2 = Math.floor(Math.random() * 3)
    //ceiling leak
    if (number2 < 2) {
        //display modal 8 (ceiling leak)
        audio4.play()
        audio3.play()
        audio3.volume = .4
        audio3.loop = true
        response2.href = "#modal8"
        const elem8 = document.querySelector("#modal8")
        const instance8 = M.Modal.init(elem8, {dismissible: false})
        instance8.open()
    } else {
        //game continues without interruption 
        response2.href = "#modal7"
        const elem8 = document.querySelector("#modal8")
        const instance8 = M.Modal.init(elem8, {dismissible: false})
        instance8.destroy()
    }
}
//resign scenario
const resignWork = () => {
    scenario.innerHTML = resignInfo[0][0]
    response1.innerHTML = resignInfo[0][1]
    response2.innerHTML = resignInfo[0][2]
    audio.pause()
    audio3.pause()
    audio4.pause()
    restartDiv.style.display = "none"
    restart.style.display = "none"
    resignDiv.style.display = "none"
    resign.style.display = "none"
    response1.style.backgroundColor = ""
    response2.style.backgroundColor = ""
    response1.style.color = "black"
}
//reset
const resetGame = () => {
    count = 0
    points = 0
    hourHand.style.transform = ""
    scenario.innerHTML = scenarioInfo[10][0]
    response1.innerHTML = ""
    response2.innerHTML = ""
    start.style.display = ""
    restartDiv.style.display = "none"
    restart.style.display = "none"
    resignDiv.style.display = "none"
    resign.style.display = "none"
    response1.style.backgroundColor = ""
    response2.style.backgroundColor = ""
    response1.style.color = "black"
    response1.style.display = "none"
    response2.style.display = "none"
    //stop all audio
    audio.pause()
    audio3.pause()
    audio4.pause()
}
//============= MODAL FUNCTIONS ===============
//modals for response1 click event listener
const response1Modals = () => {
    if (count === 5) {
        //phone scenario modal is default starting modal because it is first in array for response1 responses
        audio2.play()
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
        audio1.play()
        const elem2 = document.querySelector("#modal2")
        const instance2 = M.Modal.init(elem2, {dismissible: false})
        instance2.open()
    } else {
        response1.href = "#modal1"
        const elem2 = document.querySelector("#modal2")
        const instance2 = M.Modal.init(elem2, {dismissible: false})
        instance2.destroy()
    }
    //leave early scenario modal
    if (count === 10) {
        response1.href = "#modal9"
        audio1.play()
        const elem9 = document.querySelector("#modal9")
        const instance9 = M.Modal.init(elem9, {dismissible: false})
        instance9.open()
    } else {
        response1.href = "#modal1"
        const elem9 = document.querySelector("#modal9")
        const instance9 = M.Modal.init(elem9, {dismissible: false})
        instance9.destroy()
    }
    //after hours scenario modal
    if (count === 11) {
        response1.href = "#modal6"
        audio2.play()
        const elem6 = document.querySelector("#modal6")
        const instance6 = M.Modal.init(elem6, {dismissible: false})
        instance6.open()
    } else {
        response1.href = "#modal1"
        const elem6 = document.querySelector("#modal6")
        const instance6 = M.Modal.init(elem6, {dismissible: false})
        instance6.destroy()
    }
    //resign modal for response1
    if (count === 13) {
        response1.href = "#modal11"
        audio2.play()
        const elem11 = document.querySelector("#modal11")
        const instance11 = M.Modal.init(elem11, {dismissible: false})
        instance11.open()
        resetGame()
    } else {
        response1.href = "#modal1"
        const elem11 = document.querySelector("#modal11")
        const instance11 = M.Modal.init(elem11, {dismissible: false})
        instance11.destroy()
    }
}
//modals for response2 click event listener
const response2Modals = () => {
     //response2 modals:
     if (count === 4) {
        //working hard/hardly working modal is default starting modal because it is first in response2
        audio1.play()
        const elem7 = document.querySelector("#modal7")
        const instance7 = M.Modal.init(elem7, {dismissible: false})
        instance7.open()
    } else {
        const elem7 = document.querySelector("#modal7")
        const instance7 = M.Modal.init(elem7, {dismissible: false})
        instance7.destroy()
    }
    //lunch scenario modal
    if (count === 7) {
        response2.href = "#modal10"
        audio2.play()
        const elem10 = document.querySelector("#modal10")
        const instance10 = M.Modal.init(elem10, {dismissible: false})
        instance10.open()
    } else {
        response2.href = "#modal7"
        const elem10 = document.querySelector("#modal10")
        const instance10 = M.Modal.init(elem10, {dismissible: false})
        instance10.destroy()
    }
    //leave early scenario modal
    if (count === 10) {
        response2.href = "#modal3"
        audio2.play()
        const elem3 = document.querySelector("#modal3")
        const instance3 = M.Modal.init(elem3, {dismissible: false})
        instance3.open()
    } else {
        response2.href = "#modal7"
        const elem3 = document.querySelector("#modal3")
        const instance3 = M.Modal.init(elem3, {dismissible: false})
        instance3.destroy()
    }
    //after hours scenario modal
    if (count === 11) {
        response2.href = "#modal4"
        audio1.play()
        const elem4 = document.querySelector("#modal4")
        const instance4 = M.Modal.init(elem4, {dismissible: false})
        instance4.open()
    } else {
        response2.href = "#modal7"
        const elem4 = document.querySelector("#modal4")
        const instance4 = M.Modal.init(elem4, {dismissible: false})
        instance4.destroy()
    }
     //resign modal for response2
     if (count === 13) {
        response2.href = "#modal12"
        audio1.play()
        const elem12 = document.querySelector("#modal12")
        const instance12 = M.Modal.init(elem12, {dismissible: false})
        instance12.open()
        resetGame()
    } else {
        response2.href = "#modal7"
        const elem12 = document.querySelector("#modal12")
        const instance12 = M.Modal.init(elem12, {dismissible: false})
        instance12.destroy()
    }
}
//ignore response div hover effect for mobile devices
function watchForHover() {
    // ignoring emulated mousemove events
    let lastTouchTime = 0
    //display hover div style (desktop)
    function enableHover() {
        if (new Date() - lastTouchTime < 500) return 
        document.body.classList.add('hasHover')
    }
    //disable hover div style
    function disableHover() {
        document.body.classList.remove('hasHover')
    }
    //occurs right after touchstart
    function updateLastTouchTime() {
        lastTouchTime = new Date()
    }
    //when user touches an element (mobile)
    document.addEventListener('touchstart', updateLastTouchTime, true)
    document.addEventListener('touchstart', disableHover, true)
    //when user clicks an element (desktop)
    document.addEventListener('mousemove', enableHover, true)
    enableHover()
  }

//============= ONCE PAGE LOADS ===============
document.addEventListener ("DOMContentLoaded", () => {
    //check for touchstart
    watchForHover()
    //start game
    form.addEventListener ("submit", (e) => {
        e.preventDefault()
        count++
        //change text to scenario 0
        populateScenarioBox()
        start.style.display = "none"
    })
    //response1 clicked (scenarios 1-10)
    response1.addEventListener("click", () => {
        count++
        points = points + 5
        response1Modals()
        populateScenarioBox()
    })
    //response2 clicked (scenarios 1-10)
    response2.addEventListener("click", () => {
        //adjust counters
        count++
        points = points - 5
        response2Modals()
        populateScenarioBox()
    })
    //reset game button
    restartform.addEventListener ("submit", (e) => {
        resetGame()
    })
     //resign scenario button
     resignDiv.addEventListener ("submit", (e) => {
        count++
        //added this 11/4/21 to guarantee next screen view:
        resignWork()
        response1Modals()
        response2Modals()
        populateScenarioBox()
    })
})