//workday array
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
//resign array
let resignInfo = new Array ()
resignInfo[0] = new Array("<h6><blockquote><strong>You've thought about it long and hard and have decided to resign. Do you resign tonight or give two weeks' notice?</strong></blockquote></h6>", "Two weeks notice.", "As soon as possible- tonight.")
//add music audio
let audio = new Audio("audio/officesounds.wav") //background noise
let audio1 = new Audio("audio/happy.wav") //positive sound
let audio2 = new Audio("audio/sad.wav") //negative sound
let audio3 = new Audio("audio/splash.wav") //ceiling drip
let audio4 = new Audio("audio/thunder.wav") //thunder clap
//DOM elements
let hourHand = document.getElementById("hour") //clock
let scenario = document.querySelector("#text")
let response1 = document.querySelector("#response1")
let response2 = document.querySelector("#response2")
let a = document.getElementById("inp");
let b = document.getElementById("inp2");
const dis = () => {
    a.style.display = "none";  
    b.style.display = "none"; 
}
//performance eval
let points = 0
//random number variable for num generator 1 (wifi outage)
let number = 0
//random number variable for num generator 2 (ceiling leak)
let number2 = 0
//actual game function
const Game = () => {
    //show response divs
    response1.style.display = ""
    response2.style.display = ""
    //clock
    const hourRotation = (hour) => {
        let hourDegree = (hour/12) * 360
        hourHand.style.transform = "rotate( " + hourDegree + "deg)"
    }
    //response 1 modals
    const response1Modal1 = () => {
            //answer phone
            audio2.play()
            const elem1 = document.querySelector("#modal1")
            const instance = M.Modal.init(elem1, {dismissible: false})
            instance.open()
    }
    const response1Modal1Close = () => {
        const elem1 = document.querySelector("#modal1")
            const instance = M.Modal.init(elem1, {dismissible: false})
            instance.destroy()
    }
    const response1Modal2 = () => {
        //positive lunch
        audio1.play()
        const elem1 = document.querySelector("#modal2")
        const instance = M.Modal.init(elem1, {dismissible: false})
        instance.open()
    }
    const response1Modal2Close = () => {
        const elem1 = document.querySelector("#modal2")
            const instance = M.Modal.init(elem1, {dismissible: false})
            instance.destroy()
    }
    const response1Modal5 = () => {
        //positive leaving early
        audio1.play()
        const elem1 = document.querySelector("#modal5")
        const instance = M.Modal.init(elem1, {dismissible: false})
        instance.open()
    }
    const response1Modal5Close = () => {
        const elem1 = document.querySelector("#modal5")
            const instance = M.Modal.init(elem1, {dismissible: false})
            instance.destroy()
    }
    const response1Modal7 = () => {
        //after hours
        audio2.play()
        const elem1 = document.querySelector("#modal7")
        const instance = M.Modal.init(elem1, {dismissible: false})
        instance.open()
    }
    const response1Modal7Close = () => {
        const elem1 = document.querySelector("#modal7")
            const instance = M.Modal.init(elem1, {dismissible: false})
            instance.destroy()
    }
    const response1Modal11 = () => {
        //resign two weeks
        audio2.play()
        const elem1 = document.querySelector("#modal11")
        const instance = M.Modal.init(elem1, {dismissible: false})
        instance.open()
    }
    const response1Modal11Close = () => {
    const elem1 = document.querySelector("#modal11")
        const instance = M.Modal.init(elem1, {dismissible: false})
        instance.destroy()
    }
    //response 2 modals
    const response2Modal3 = () => {
        //not social lunch
        audio2.play()
        const elem1 = document.querySelector("#modal3")
        const instance = M.Modal.init(elem1, {dismissible: false})
        instance.open()
    }
    const response2Modal3Close = () => {
        const elem1 = document.querySelector("#modal3")
            const instance = M.Modal.init(elem1, {dismissible: false})
            instance.destroy()
    }
    const response2Modal4 = () => {
        //hardly working
        audio1.play()
        const elem1 = document.querySelector("#modal4")
        const instance = M.Modal.init(elem1, {dismissible: false})
        instance.open()
    }
    const response2Modal4Close = () => {
        const elem1 = document.querySelector("#modal4")
            const instance = M.Modal.init(elem1, {dismissible: false})
            instance.destroy()
    }
    const response2Modal6 = () => {
        //leaving early
        audio2.play()
        const elem1 = document.querySelector("#modal6")
        const instance = M.Modal.init(elem1, {dismissible: false})
        instance.open()
    }
    const response2Modal6Close = () => {
        const elem1 = document.querySelector("#modal6")
            const instance = M.Modal.init(elem1, {dismissible: false})
            instance.destroy()
    }
    const response2Modal8 = () => {
        //hardly working
        audio1.play()
        const elem1 = document.querySelector("#modal8")
        const instance = M.Modal.init(elem1, {dismissible: false})
        instance.open()
    }
    const response2Modal8Close = () => {
        const elem1 = document.querySelector("#modal8")
            const instance = M.Modal.init(elem1, {dismissible: false})
            instance.destroy()
    }
    const response2Modal12 = () => {
        //hardly working
        audio1.play()
        const elem1 = document.querySelector("#modal12")
        const instance = M.Modal.init(elem1, {dismissible: false})
        instance.open()
    }
    const response2Modal12Close = () => {
        const elem1 = document.querySelector("#modal8")
            const instance = M.Modal.init(elem1, {dismissible: false})
            instance.destroy()
    }
    //game functions
    const beginning = () => {
        start.style.display = "none"
        hourHand.style.transform = ""
        scenario.innerHTML = scenarioInfo[0][0]
        response1.innerHTML = scenarioInfo[0][1]
        response2.innerHTML = scenarioInfo[0][2]
        response1.onclick = () => {
            response1Modal11Close()
            response2Modal12Close()
            points = points + 5
            console.log(points)
            nineAm()
        }
        response2.onclick = () => {
            response1Modal11Close()
            response2Modal12Close()
            points = points - 5
            console.log(points)
            nineAm()
        }
    }
    const nineAm = () => {
        audio.play()
        audio.loop = true;
        audio.volume = .2
        scenario.innerHTML = scenarioInfo[1][0]
        response1.innerHTML = scenarioInfo[1][1]
        response2.innerHTML = scenarioInfo[1][2]
        hourRotation(scenarioInfo[1][3])
        response1.onclick = () => {
            console.log("response1 clicked")
            points = points + 5
            console.log(points)
            tenAm()
        }
        response2.onclick = () => {
            console.log("response2 clicked")
            points = points - 5
            console.log(points)
            tenAm()
        }
    }
    const tenAm = () => {
        scenario.innerHTML = scenarioInfo[2][0]
        response1.innerHTML = scenarioInfo[2][1]
        response2.innerHTML = scenarioInfo[2][2]
        hourRotation(scenarioInfo[2][3])
        response1.onclick = () => {
            console.log("response1 clicked")
            points = points + 5
            console.log(points)
            elevenAm()
        }
        response2.onclick = () => {
            console.log("response2 clicked")
            points = points - 5
            console.log(points)
            response2Modal4()
            elevenAm()
        }
        randomWifi()
    }
    const elevenAm = () =>{
        scenario.innerHTML = scenarioInfo[3][0]
        response1.innerHTML = scenarioInfo[3][1]
        response2.innerHTML = scenarioInfo[3][2]
        hourRotation(scenarioInfo[3][3])
        response1.onclick = () => {
            response2Modal4Close()
            console.log("response1 clicked")
            points = points + 5
            console.log(points)
            response1Modal1()
            twelvePm()
        }
        response2.onclick = () => {
            response2Modal4Close()
            console.log("response2 clicked")
            points = points - 5
            console.log(points)
            twelvePm()
        }
    }
    const twelvePm = () =>{
        scenario.innerHTML = scenarioInfo[4][0]
        response1.innerHTML = scenarioInfo[4][1]
        response2.innerHTML = scenarioInfo[4][2]
        hourRotation(scenarioInfo[4][3])
        response1.onclick = () => {
            response1Modal1Close()
            console.log("response1 clicked")
            points = points + 5
            console.log(points)
            onePm()
        }
        response2.onclick = () => {
            response1Modal1Close()
            console.log("response2 clicked")
            points = points - 5
            console.log(points)
            onePm()
        }
    }
    const onePm = () =>{
        scenario.innerHTML = scenarioInfo[5][0]
        response1.innerHTML = scenarioInfo[5][1]
        response2.innerHTML = scenarioInfo[5][2]
        hourRotation(scenarioInfo[5][3])
        response1.onclick = () => {
            console.log("response1 clicked")
            points = points + 5
            console.log(points)
            response1Modal2()
            twoPm()
        }
        response2.onclick = () => {
            console.log("response2 clicked")
            points = points - 5
            console.log(points)
            response2Modal3()
            twoPm()
        }
        randomWifi()
    }
    const twoPm = () =>{
        scenario.innerHTML = scenarioInfo[6][0]
        response1.innerHTML = scenarioInfo[6][1]
        response2.innerHTML = scenarioInfo[6][2]
        hourRotation(scenarioInfo[6][3])
        response1.onclick = () => {
            response1Modal2Close()
            response2Modal3Close()
            console.log("response1 clicked")
            points = points + 5
            console.log(points)
            threePm()
        }
        response2.onclick = () => {
            response1Modal2Close()
            response2Modal3Close()
            console.log("response2 clicked")
            points = points - 5
            console.log(points)
            threePm()
        }
    }
    const threePm = () =>{
        scenario.innerHTML = scenarioInfo[7][0]
        response1.innerHTML = scenarioInfo[7][1]
        response2.innerHTML = scenarioInfo[7][2]
        hourRotation(scenarioInfo[7][3])
        randomRain()
        response1.onclick = () => {
            console.log("response1 clicked")
            points = points + 5
            console.log(points)
            fourPm()
        }
        response2.onclick = () => {
            console.log("response2 clicked")
            points = points - 5
            console.log(points)
            fourPm()
        }
    }
    const fourPm = () =>{
        scenario.innerHTML = scenarioInfo[8][0]
        response1.innerHTML = scenarioInfo[8][1]
        response2.innerHTML = scenarioInfo[8][2]
        hourRotation(scenarioInfo[8][3])
        response1.onclick = () => {
            console.log("response1 clicked")
            points = points + 5
            console.log(points)
            response1Modal5()
            fivePm()
        }
        response2.onclick = () => {
            console.log("response2 clicked")
            points = points - 5
            console.log(points)
            response2Modal6()
            fivePm()
        }
        randomWifi()
    }
    const fivePm = () =>{
        scenario.innerHTML = scenarioInfo[9][0]
        response1.innerHTML = scenarioInfo[9][1]
        response2.innerHTML = scenarioInfo[9][2]
        hourRotation(scenarioInfo[9][3])
        response1.onclick = () => {
            response1Modal5Close()
            response2Modal6Close()
            console.log("response1 clicked")
            points = points + 5
            console.log(points)
            response1Modal7()
            end()
        }
        response2.onclick = () => {
            response1Modal5Close()
            response2Modal6Close()
            console.log("response2 clicked")
            points = points - 5
            console.log(points)
            response2Modal8()
            end()
        }
    }
    const end = () => {
        if (points <= 20) {
            scenario.innerHTML = "<strong><h6 class='poor'>PERFORMANCE EVALUATION: POOR</h6></br><p>You made poor work decisions today, but you put yourself first- that takes guts! But maybe a different job would be a better fit.</p></strong>"
            response1.innerHTML = "Try another work day"
            response2.innerHTML = "Resign from job"
        } else if (points > 20 && points <= 40) {
            scenario.innerHTML = "<strong><h6 class='mediocre'>PERFORMANCE EVALUATION: MEDIOCRE</h6></br><p>You performed as an average employee today: working hard or hardly working.</p></strong>"
            response1.innerHTML = "Try another work day"
            response2.innerHTML = "Resign from job"
        } else if (points > 40) {
            scenario.innerHTML = "<strong><h6 class='excellent'>PERFORMANCE EVALUATION: EXCELLENT</h6></br><p>Stellar work today. You could ask for a raise, but let's be honest... it won't happen any time soon (if at all).</p></strong>"
            response1.innerHTML = "Try another work day"
            response2.innerHTML = "Resign from job"
        }
        response1.onclick = () => {
            response1Modal7Close()
            response2Modal8Close()
            //reset
            resetGame()
        }
        response2.onclick = () => {
            response1Modal7Close()
            response2Modal8Close()
            audio.pause()
            audio3.pause()
            audio4.pause()
            //resign
            scenario.innerHTML = resignInfo[0][0]
            response1.innerHTML = resignInfo[0][1]
            response2.innerHTML = resignInfo[0][2]
            response1.onclick = () => {
                console.log("response1 clicked")
                response1Modal11()
                points = 0
                number = 0
                number2 = 0
                beginning()
            }
            response2.onclick = () => {
                console.log("response2 clicked")
                response2Modal12()
                points = 0
                number = 0
                number2 = 0
                beginning()
            }
        }
    }
    const resetGame = () => {
        audio.pause()
        audio3.pause()
        audio4.pause()
        points = 0
        number = 0
        number2 = 0
        hourHand.style.transform = ""
        beginning()
    }
    //add random generator functions here
    // //wifi outage
    const randomWifi = () => {
        //random integer generator 
        number = Math.floor(Math.random() * 100)
        console.log("wifi outtage " + number)
        //random wifi outage and game restart

        if (number > 85) {
            //display modal 9 (wifi down)
            response1.href = "#modal9"
            const elem1 = document.querySelector("#modal9")
            const instance1 = M.Modal.init(elem1, {dismissible: false})
            instance1.open()
            resetGame()
        } else {
            //game continues without interruption 
            //response1.href = "#modal9"
            const elem1 = document.querySelector("#modal9")
            const instance1 = M.Modal.init(elem1, {dismissible: false})
            instance1.destroy()
        }
    }
    //ceiling leak
    const randomRain = () => {
        //random integer generator 
        number2 = Math.floor(Math.random() * 3)
        console.log("rain leak " + number2)
        //ceiling leak
        if (number2 < 2) {
            //display modal 8 (ceiling leak)
            audio4.play()
            audio3.play()
            audio3.volume = .4
            audio3.loop = true
            response2.href = "#modal10"
            const elem1 = document.querySelector("#modal10")
            const instance1 = M.Modal.init(elem1, {dismissible: false})
            instance1.open()
        } else {
            //game continues without interruption 
            //response2.href = "#modal4"
            const elem1 = document.querySelector("#modal10")
            const instance1 = M.Modal.init(elem1, {dismissible: false})
            instance1.destroy()
        }
    }
    // *** run
    beginning()
}
//ignore response div hover effect for mobile devices
//still exploring this option
watchForHover = () => {
    // ignoring emulated mousemove events
    let lastTouchTime = 0
    //display hover div style (desktop)
    const enableHover = () => {
        if (new Date() - lastTouchTime < 500) return 
        document.body.classList.add('hasHover')
    }
    //disable hover div style
    const disableHover = () => {
        document.body.classList.remove('hasHover')
    }
    //occurs right after touchstart
    const updateLastTouchTime = () => {
        lastTouchTime = new Date()
    }
    //when user touches an element (mobile)
    document.addEventListener('touchstart', updateLastTouchTime, true)
    document.addEventListener('touchstart', disableHover, true)
    //when user clicks an element (desktop)
    document.addEventListener('mousemove', enableHover, true)
    enableHover()
  }

document.addEventListener ("DOMContentLoaded", () => {
    //hide response divs until game starts
    response1.style.display = "none"
    response2.style.display = "none"
    //still exploring this option:
    watchForHover()
    Start = Start = () => {
        Game()
        console.log("game started");   
    }
})