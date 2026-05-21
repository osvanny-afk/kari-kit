const frases = [

    "Todo lo que sientes ahora es temporal.",

    "Respira profundo, poco a poco todo mejorará.",

    "No estás solo/a, siempre hay alguien que te quiere.",

    "Está bien descansar y darte tiempo.",

    "Eres más fuerte de lo que crees.",

    "Un mal momento no define tu vida.",

    "Tu paz también es importante.",

    "Cada día es una nueva oportunidad para sanar.",

    "Incluso las tormentas más fuertes terminan.",

    "Mereces sentir tranquilidad y amor."

];

function cambiarFrase(){

    const frase =
    document.getElementById("frase");

    let numeroAleatorio =
    Math.floor(Math.random() * frases.length);

    frase.textContent =
    frases[numeroAleatorio];

}
/* RESPIRACION */

const textoRespiracion =
document.getElementById(
    "texto-respiracion"
);

let inhalando = true;

setInterval(() => {

    if(inhalando){

        textoRespiracion.textContent =
        "Exhala...";

    }else{

        textoRespiracion.textContent =
        "Inhala...";

    }

    inhalando = !inhalando;

},4000);
/* SONIDOS */

function cambiarSonido(tipo){

    const player =
    document.getElementById("player");

    if(tipo === "lluvia"){

        player.src =
        "https://www.youtube.com/embed/lFcSrYw-ARY";

    }

    if(tipo === "mar"){

        player.src =
        "https://www.youtube.com/embed/V1bFr2SWP1I";

    }

    if(tipo === "bosque"){

        player.src =
        "https://www.youtube.com/embed/xNN7iTA57jM";

    }

}
/* MODOS EMOCIONALES */

function cambiarModo(tipo){

    const body =
    document.body;

    const frase =
    document.getElementById("frase");

    if(tipo === "ansiedad"){

        body.style.background =
        "#dbeeff";

        frase.textContent =
        "Respira profundo, todo estará bien 💙";

    }

    if(tipo === "tristeza"){

        body.style.background =
        "#dcd6f7";

        frase.textContent =
        "Está bien sentir tristeza, no estás solo/a 💜";

    }

    if(tipo === "calma"){

        body.style.background =
        "#dff5e1";

        frase.textContent =
        "Disfruta este momento de tranquilidad 🌿";

    }

    if(tipo === "motivacion"){

        body.style.background =
        "#fff4cc";

        frase.textContent =
        "Eres capaz de superar cualquier momento ✨";

    }

}
/* CHATBOT */
/* CHATBOT MEJORADO */

function enviarMensaje(){

    const input =
    document.getElementById(
        "user-input"
    );

    const mensaje =
    input.value.toLowerCase();

    const chatBox =
    document.getElementById(
        "chat-box"
    );

    /* MENSAJE USUARIO */

    const userMensaje =
    document.createElement("div");

    userMensaje.classList.add(
        "mensaje",
        "user"
    );

    userMensaje.textContent =
    input.value;

    chatBox.appendChild(
        userMensaje
    );

    /* RESPUESTA BOT */

    const botMensaje =
    document.createElement("div");

    botMensaje.classList.add(
        "mensaje",
        "bot"
    );

    /* RESPUESTAS */

    if(
        mensaje.includes("ansiedad")
    ){

        botMensaje.textContent =
        "💙 Intenta respirar lento. También puedes usar la sección de respiración guiada para relajarte.";

    }

    else if(
        mensaje.includes("triste")
    ){

        botMensaje.textContent =
        "💜 Está bien sentir tristeza. Escuchar música tranquila o hablar con alguien puede ayudarte.";

    }

    else if(
        mensaje.includes("solo")
    ){

        botMensaje.textContent =
        "💙 Recuerda que no estás solo/a. Las personas que te quieren siguen ahí para ti.";

    }

    else if(
        mensaje.includes("miedo")
    ){

        botMensaje.textContent =
        "🌙 El miedo es temporal. Respira profundo y trata de enfocarte en el presente.";

    }

    else if(
        mensaje.includes("estres")
    ){

        botMensaje.textContent =
        "🌿 Tal vez necesites descansar un momento. Respira y relaja tus hombros.";

    }

    else if(
        mensaje.includes("llorar")
    ){

        botMensaje.textContent =
        "💧 Llorar también ayuda a liberar emociones. No tienes que guardarte todo.";

    }

    else if(
        mensaje.includes("feliz")
    ){

        botMensaje.textContent =
        "✨ Me alegra mucho que te sientas feliz. Sigue cuidando de ti mismo/a.";

    }

    else if(
        mensaje.includes("ayuda")
    ){

        botMensaje.textContent =
        "💙 Pedir ayuda es algo valiente. Hablar con alguien de confianza puede ayudarte mucho.";

    }

    else{

        botMensaje.textContent =
        "💙 Estoy aquí para acompañarte. Intenta contarme un poco más cómo te sientes.";

    }

    /* AGREGAR RESPUESTA */

    setTimeout(() => {

        chatBox.appendChild(
            botMensaje
        );

        chatBox.scrollTop =
        chatBox.scrollHeight;

    },500);

    /* LIMPIAR INPUT */

    input.value = "";

}