const messages = [
    "Tengo algo que decirte...",
    "Me encanta verte reir 😌",
    "Eres una persona muy especial ✨",
    "Y la verdad...",
    "Me gustas muchísimo 💖"
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