const messages = [
    "Vi tus ojos y dije: Wow!",
    "Tiene pupilas",
    "Y luego vi tus pupilas y dije: Wow!",
    "Tienen hormonas",
    "Así que yo se que piensas",
    "Y cuando piensas imaginas",
    "Y cuando imaginas sueñas",
    "Y cuando sueñas...",
    "Yo se que lo haces conmigo",
];

let index = 0;

function nextMessage() {
    index++;
    if (index < messages.length) {
        document.getElementById("message").innerText = messages[index];
    }
}

// corazones animados
function crearCorazon() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0px";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(crearCorazon, 300);