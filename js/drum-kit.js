// MOUSE
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("mousedown", function () {
        this.classList.add("white-text");
        switch (this.innerHTML) {
            case "a":
                var audio = new Audio("/sounds/tom-1.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("/sounds/tom-2.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("/sounds/tom-3.mp3");
                audio.play();
                break;
            case "f":
                var audio = new Audio("/sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("/sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("/sounds/crash.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("/sounds/kick-bass.mp3");
                audio.play();
                break;
            default:
        }
    });

    document.querySelectorAll(".drum")[i].addEventListener("mouseup", function () {
        this.classList.remove("white-text");
    });
}

// KEYBOARD
document.addEventListener("keydown", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

function playSound(key) {
    switch (key) {
        case "a":
            var audio = new Audio("/sounds/tom-1.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("/sounds/tom-2.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("/sounds/tom-3.mp3");
            audio.play();
            break;
        case "f":
            var audio = new Audio("/sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("/sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("/sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("/sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    // Define an array of valid keys
    var validKeys = ["a", "s", "d", "f", "j", "k", "l"];
    
    // Check if the current key is a valid key
    if (validKeys.includes(currentKey)) {
        var button = document.querySelector("." + currentKey);
        if (button) {
            button.classList.add("pressed");

            setTimeout(function () {
                button.classList.remove("pressed");
            }, 100);
        }
    }
}

// document.querySelectorAll("button").forEach(function(button) {
//   button.addEventListener("click", handleClick);
// });
// function handleClick() {
//     alert("I got clicked");
// }
