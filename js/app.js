new WOW().init()

let roll = document.getElementById("roll")
const rollText = ["This page is not found.", "Why you just...", "Oh...", "Another programmer, again...", "Well, please go away from this page", "You are breaking my party", "Do you want to know who I'm I?", "For that, you should go AWAY!!!", "Ohhh...", "Why you do this?", "You know, for what this page?", "To chase away?", "My answer is YES!", "what did you think?", "To look at it?", "NO", "...", "...", "Go Away!!!", "Just go away", "Please!", "I'm stoping it"]

roll.innerText = "This page is not found."

i = 0

setTimeout(() => {
    document.getElementById('with-shadow').classList.add('shadow')
}, 1800);

let interval = setInterval(() => {
    if (i == 22) {
        roll.innerText = rollText[0]
        clearInterval(interval)
    } else {
        roll.innerText = rollText[i]
    }
    i++
}, 1800);
